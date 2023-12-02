$(document).ready(function() {
    $('#updateDetailsForm').submit(function(event) {
        event.preventDefault();

        var formData = $(this).serialize() + "&userId=" + localStorage.getItem('userId');

        // AJAX request to the server
        $.ajax({
            type: 'POST',
            url: 'php/profile.php', // Updated URL
            data: formData,
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    localStorage.setItem('userId', response.userId);
                    localStorage.setItem('username', response.username);
                    localStorage.setItem('email', response.email);
                    // Set additional user details
                    localStorage.setItem('age', response.age); // Set age
                    localStorage.setItem('dob', response.dob); // Set date of birth
                    localStorage.setItem('contact', response.contact); // Set contact number
                    window.location.href = 'profile.html';
                } else {
                    alert('Profile update failed: ' + response.message);
                }
            },
            error: function() {
                alert('Profile update failed. Please try again.');
            }
        });
    });

    $('#changePasswordForm').submit(function(event) {
        event.preventDefault();

        var formData = $(this).serialize() + "&userId=" + localStorage.getItem('userId');

        // AJAX request to the server to change password
        $.ajax({
            type: 'POST',
            url: 'php/change_password.php', // Use the new PHP script for changing password
            data: formData,
            dataType: 'json',
            success: function(response) {
                if (response.success) {
                    alert('Password changed successfully');
                    // Clear the password fields
                    $('#currentPassword').val('');
                    $('#newPassword').val('');
                    $('#confirmNewPassword').val('');
                } else {
                    alert('Password change failed: ' + response.message);
                }
            },
            error: function() {
                alert('An error occurred while changing the password. Please try again.');
            }
        });
    });

    // Function to open the "Update Details" modal
    function openUpdateDetailsModal() {
        // Get the user ID from localStorage
        var userId = localStorage.getItem('userId');

        // Set the user ID in the hidden input field
        $('#userId').val(userId);

        // Open the modal
        $('#updateDetailsModal').modal('show');
    }

    // Attach a click event handler to the button that opens the modal
    $('#updateDetailsButton').click(function() {
        openUpdateDetailsModal();
    });

    // Logout function
    function logout() {
        localStorage.clear();
        window.location.href = 'login.html';
    }

    // Retrieve user details from localStorage and populate the profile
    var userId = localStorage.getItem('userId');
    var username = localStorage.getItem('username');
    var email = localStorage.getItem('email');
    var age = localStorage.getItem('age'); // Add this line
    var dob = localStorage.getItem('dob'); // Add this line
    var contact = localStorage.getItem('contact'); // Add this line

    $('#usernameDisplay').text(username);
    $('#emailDisplay').text(email);
    $('#ageDisplay').text(age); // Add this line
    $('#dobDisplay').text(dob); // Add this line
    $('#contactDisplay').text(contact); // Add this line

    // Logout button click event
    $('#logoutButton').click(function() {
        logout();
    });
});
