// Get the favorite button elements
const favoriteButtons = document.querySelectorAll('.favourite');

// Add event listener to the favorite buttons
favoriteButtons.forEach(button => {
  button.addEventListener('click', addToFavorites);
});

// Function to add a box to favorites
function addToFavorites(event) {
  const box = event.target.closest('.box');
  const boxId = box.getAttribute('id');

  // Add the box HTML to the favorites list in local storage
  let favorites = localStorage.getItem('favorites');
  favorites = favorites ? JSON.parse(favorites) : [];

  if (!favorites.includes(boxId)) {
    favorites.push(boxId);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Change the button text content to indicate it is already saved
    const buttonText = event.target;
    buttonText.innerHTML = 'Added to Favorites <i class="fa fa-heart" style="font-size:1vw;"></i>';

    // Clone the box element and append it to the favorite.html page
    const clonedBox = box.cloneNode(true);
    const favoriteContainer = parent.document.querySelector('.favorite-container');
    favoriteContainer.appendChild(clonedBox);
  }
}
