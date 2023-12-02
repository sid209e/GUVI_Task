<?php
// Database configuration
$host = "localhost";
$dbUsername = "root"; // Default MAMP username
$dbPassword = "root"; // Default MAMP password
$dbName = "user_db"; // Your database name

// Create database connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Collect data from request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $conn->real_escape_string($_POST['email']);
    $password = $_POST['password'];

    // Prepare and bind
    $stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($user = $result->fetch_assoc()) {
        if (password_verify($password, $user['password'])) {
            // Fetch additional user details needed for the profile
            $stmt = $conn->prepare("SELECT username, email, age, dob, contact FROM users WHERE id = ?");
            $stmt->bind_param("i", $user['id']);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($userData = $result->fetch_assoc()) {
                // Create an array to hold the response data
                $response = [
                    "success" => true, 
                    "userId" => $user['id'],
                    "username" => $userData['username'],
                    "email" => $userData['email'],
                    "age" => $userData['age'],
                    "dob" => $userData['dob'],
                    "contact" => $userData['contact']
                ];
    
                // Encode the array as JSON and output it
                echo json_encode($response);
    
                // Exit the script to prevent further output
                exit();
            }
        } else {
            echo json_encode(["success" => false, "message" => "Incorrect password"]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "User not found"]);
    }

    $stmt->close();
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}

$conn->close();
?>
