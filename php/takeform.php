<html>
<head>
<title>Thanks For Contacting Me!</title>
</head>
<body>
<php
  // Change this to YOUR address
  $recipient = 'catier101@gmail.com';
  $email = $_POST['email'];
  $realName = $_POST['realname'];
  $subject = "New Message from Personal Website"
  $body = $_POST['body'];
  # We'll make a list of error messages in an array
  $messages = array();
# Allow only reasonable email addresses
if (!preg_match("/^[\w\+\-.~]+\@[\-\w\.\!]+$/", $email)) {
$messages[] = "That is not a valid email address. Please check for typos.";
}
# Allow only reasonable real names
if (!preg_match("/^[\w\ \+\-\'\"]+$/", $realName)) {
$messages[] = "The real name field must contain only " .
"alphabetical characters, numbers, spaces, and " .
"reasonable punctuation. We apologize for any inconvenience.";
}

$body = $_POST['body'];
# Make sure the message has a body
if (preg_match('/^\s*$/', $body)) {
$messages[] = "Your message was blank. Please enter something! :)";
}
  if (count($messages)) {
    # There were problems, so tell the user and
    # don't send the message yet
    foreach ($messages as $message) {
      echo("<p>$message</p>\n");
    }
    echo("<p>Click the back button and correct the problems. " .
      "Then click Send Your Message again.</p>");
  } else {
    # Send the email - we're done
mail($recipient,
      $body,
      $subject,
      "From: $realName <$email>\r\n" .
      "Reply-To: $realName <$email>\r\n");
    echo("<p>Your message has been sent. Thank you!</p>\n");
  }
?>
</body>
</html>
