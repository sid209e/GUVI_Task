$(document).ready(function() {
    
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        console.log('Form submitted');


        var formData = $(this).serialize();

        // AJAX request to the server
        $.ajax({
            type: 'POST',
            url: 'php/login.php',
            data: formData,
            dataType: 'json', // Expected data format from server
            success: function(response) {
                if (response.success) {
                    localStorage.setItem('userId', response.userId);
                    localStorage.setItem('username', response.username);
                    localStorage.setItem('email', response.email);
                    localStorage.setItem('age', response.age);
                    localStorage.setItem('dob', response.dob);
                    localStorage.setItem('contact', response.contact);
                    window.location.href = 'profile.html';
                } else {
                    alert('Login failed: ' + response.message);
                }
            },            
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Login failed. Please try again. Error: ' + textStatus + ', ' + errorThrown);
            }
        });
    });
});
