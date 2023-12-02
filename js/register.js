$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
        event.preventDefault();

        var formData = $(this).serialize();
        console.log("Form Data Serialized: ", formData); // Logging the serialized data for debugging

        $.ajax({
            type: 'POST',
            url: 'php/register.php',
            data: formData,
            dataType: 'json',
            success: function(response) {
                if(response.success) {
                    alert('Registration successful');
                    window.location.href = 'login.html'; // Redirect to login page on success
                } else {
                    alert('Registration failed: ' + response.message);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert('Registration failed. Please try again. Error: ' + textStatus + ', ' + errorThrown);
            }
        });
    });
});
