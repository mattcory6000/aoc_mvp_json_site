// Function to select the market and save it to localStorage
function selectMarket(market) {
  console.log(`Selecting market: ${market}`);
  localStorage.setItem('selectedMarket', market);
  // Update the banner image immediately after selection
  updateBannerImage(market);
  // Redirect to the search page or another page as needed
  window.location.href = 'search.html'; // Update with your actual search page URL
}

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

// Event listener to load the selected market and update the banner image on every page load
document.addEventListener("DOMContentLoaded", loadSelectedMarket);

// Call loadSelectedMarket immediately in case the script runs after DOMContentLoaded
loadSelectedMarket();
