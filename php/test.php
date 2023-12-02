<?php
$conn = new mysqli("localhost", "root", "root", "user_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
