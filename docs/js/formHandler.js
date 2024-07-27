document.getElementById('contact-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  // Create the payload
  const payload = {
    name: name,
    email: email,
    subject: subject,
    message: message
  };

  try {
    // Send the POST request to the Lambda function URL
    const response = await fetch('https://ym4dkcmpmbm5e4zshw7tayhkfy0hafwt.lambda-url.us-east-2.on.aws/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      alert('Message sent successfully!');
      // Optionally clear the form after successful submission
      document.getElementById('contact-form').reset();
    } else {
      alert('Failed to send message. Please try again later.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred while sending the message. Please try again later.');
  }
});
