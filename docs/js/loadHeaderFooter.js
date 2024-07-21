document.addEventListener("DOMContentLoaded", function() {
  // Load Header
  fetch('partials/header.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('header').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

  // Load Footer
  fetch('partials/footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelector('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
});