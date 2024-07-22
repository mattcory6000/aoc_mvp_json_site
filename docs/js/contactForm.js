document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message")
    };

    // For demonstration, we'll just log the data and show an alert
    console.log(data);
    alert("Message sent successfully!");

    // Here you would typically send the data to the server, e.g.:
    // fetch('/send-message', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // }).then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //     alert("Message sent successfully!");
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     alert("There was an error sending your message.");
    //   });
  });
});
