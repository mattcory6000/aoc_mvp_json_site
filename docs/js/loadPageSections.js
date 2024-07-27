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

  // Load other sections (add as needed)

  // Create and Insert Banner Container
  const bannerContainer = document.createElement('div');
  bannerContainer.id = 'banner';
  bannerContainer.className = 'banner';
  document.body.insertBefore(bannerContainer, document.body.firstChild);

  // Function to update the banner image based on the selected market
  function updateBannerImage(market) {
    const banner = document.getElementById('banner');
    if (!banner) return; // Exit if banner element doesn't exist on the current page

    switch(market) {
      case 'Chattanooga':
        banner.innerHTML = '<img src="img/chattanooga.png" alt="Chattanooga Skyline">';
        break;
      case 'Memphis':
        banner.innerHTML = '<img src="img/memphis.png" alt="Memphis Skyline">';
        break;
      case 'Nashville':
        banner.innerHTML = '<img src="img/nashville.png" alt="Nashville Skyline">';
        break;
      case 'Knoxville':
        banner.innerHTML = '<img src="img/knoxville.png" alt="Knoxville Skyline">';
        break;
      default:
        banner.innerHTML = '<img src="img/chattanooga.png" alt="Chattanooga Skyline">';
        break;
    }
  }

  // Function to load the selected market and update the banner image
  function loadSelectedMarket() {
    const selectedMarket = localStorage.getItem('selectedMarket');
    if (selectedMarket) {
      console.log(`Market selected: ${selectedMarket}`);
      updateBannerImage(selectedMarket);
    } else {
      console.log('No market selected');
    }
  }

  // Load the selected market and update the banner image on every page load
  loadSelectedMarket();
});
