# User Profile Management System

This is a simple web application for managing user profiles. It allows users to update their profile details and change their passwords. The application is built using HTML, PHP, and JavaScript.

## You can access it here:- https://sid209e.github.io/GUVI_Task/


## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Updating User Profile](#updating-user-profile)
  - [Changing Password](#changing-password)
- [File Structure](#file-structure)
- [Contributing](#contributing)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Web server (e.g., Apache) with PHP support.
- MySQL database to store user data.
- Web browser.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/sid209e/GUVI_Task.git
   ```
2. Configure your web server to serve the project's files.

3. Set up the MySQL database by importing the database.sql file provided.

4. Update the database connection settings in php/profile.php and php/change_password.php with your database credentials.

5. Open the project in your web browser such as:
   git clone https://github.com/yourusername/user-profile-management.git


## Usage

### Updating User Profile

1. Visit the application's homepage.
2. Log in or create an account if you haven't already.
3. Click the "Update Details" button to open the update modal.
4. Modify your profile details (Username, Email, Age, Date of Birth, Contact Number).
5. Click the "Save Changes" button to update your profile.

### Changing Password

1. Visit the application's homepage.
2. Log in.
3. Click the "Change Password" button.
4. Enter your current password, new password, and confirm the new password.
5. Click the "Change Password" button to update your password.

### File Structure

`index.html`: Homepage of the application.

`profile.html`: User profile page.

`login.html`: Login page.

`register.html`: Registration page.

`js/`: JavaScript files for handling form submissions and UI interactions.

`php/`: PHP scripts for processing user data and database interactions.

`css/`: CSS files for styling the application.

## Contributing

###Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
3. Create a new branch for your feature or bug fix: git checkout -b feature/my-feature or git checkout -b bugfix/issue-description.
4. Commit your changes and push to your fork: git commit -m "Add new feature" && git push origin feature/my-feature.
5. Create a pull request with a detailed description of your changes.
