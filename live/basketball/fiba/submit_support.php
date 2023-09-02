<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Validate the data (you can add more validation as needed)
    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill out all fields.";
        exit;
    }

    // Email configuration
    $to = "phillipjones1990x@gmail.com"; // Replace with your email address
    $subject = "Support Request from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Your request has been submitted successfully. We will get back to you shortly.";
    } else {
        echo "Sorry, there was an error sending your request. Please try again later.";
    }
} else {
    // Redirect back to the form if accessed directly
    header("Location: index.html"); // Replace with the actual URL of your form page
    exit;
}
?>
