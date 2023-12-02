<?php
// Start the session
session_start();

// Check if a user is logged in
if (isset($_SESSION['username'])) {
    echo "Welcome, " . $_SESSION['username'] . "!"; // Display the username if logged in
} else {
    echo "You are not logged in.";
}

// Set session data
$_SESSION['username'] = 'exampleuser';


?>
