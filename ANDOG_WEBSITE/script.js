<?php
// Check if form is submitted
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Save feedback to a file (you can use a database instead)
    $feedbackFile = 'feedback.txt';
    $data = "$name | $email | $message\n";
    file_put_contents($feedbackFile, $data, FILE_APPEND);

    // Redirect back to the contact page after submission
    header("Location: contact.html");
    exit();
}



        // Function to delete feedback
        function deleteFeedback() {
            if (confirm("Are you sure you want to delete all feedback?")) {
                // Perform delete operation (for example, delete feedback file or clear database table)
                // You can perform the delete operation via an AJAX call to a backend endpoint
                // After successful deletion, you can update UI accordingly
            }
        

        // Function to undo deletion
        function undoDeletion() {
            // Implement logic to undo deletion (for example, restore backup or revert database changes)
            // You can perform the undo operation via an AJAX call to a backend endpoint
            // After successful undo, you can update UI accordingly
        }

        // Event listener for delete button
        document.getElementById("deleteBtn").addEventListener("click", deleteFeedback);
        // Event listener for undo button
        document.getElementById("undoBtn").addEventListener("click", undoDeletion);
        ?>