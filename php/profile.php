<?php
// Enable error reporting for debugging (remove this line in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// MongoDB configuration
$mongoClient = new MongoDB\Client("mongodb://localhost:27017");
$mongoDb = $mongoClient->selectDatabase("mongo_db");
$mongoCollection = $mongoDb->selectCollection("user_profiles");

// Collect data from request
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming you have a way to get the user's ID from the form data.
    // For this example, let's assume you're sending the user ID in the form data.
    $userId = $_POST['userId'];
    $updatedAge = $_POST['updatedAge'];
    $updatedDob = $_POST['updatedDob'];
    $updatedContact = $_POST['updatedContact'];

    // Update user profile details in MongoDB
    $result = $mongoCollection->updateOne(
        ['userId' => $userId],
        ['$set' => [
            'age' => $updatedAge,
            'dob' => $updatedDob,
            'contact' => $updatedContact
        ]]
    );

    if ($result->getModifiedCount() > 0) {
        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Profile update failed"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
