function selectMarket(market) {
  localStorage.setItem('selectedMarket', market);
  alert(`Market selected: ${market}`);
  // Redirect to the search page or another page as needed
  window.location.href = 'search.html'; // Update with your actual search page URL
}

document.addEventListener("DOMContentLoaded", function() {
  const selectedMarket = localStorage.getItem('selectedMarket');
  if (selectedMarket) {
    console.log(`Market selected: ${selectedMarket}`);
    // Update the UI or perform actions based on the selected market
  }
});
