document.addEventListener("DOMContentLoaded", function() {
  const searchin = document.querySelector('input[type="search"]');
  const searchbutton = document.querySelector('button[type="submit"]');
  const boxes = document.querySelectorAll(".box");
  const favouriteButtons = document.querySelectorAll(".favourite");

  // Add event listener to search button
  searchbutton.addEventListener("click", searchFunction);

  // Add event listener to favourite buttons
  favouriteButtons.forEach(button => {
    button.addEventListener("click", addToFavourites);
  });

  function searchFunction(event) {
    event.preventDefault();

    let searchInput = searchin.value.toLowerCase();
    boxes.forEach(box => {
      let name = box.querySelector(".name").textContent.toLowerCase();
      if (name.includes(searchInput)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  }

  function addToFavourites(event) {
    event.preventDefault();

    // Check if already added to favourites
    if (this.classList.contains("added")) {
      alert("Already added to favourites!");
      return;
    }

    // Add to favourites
    const box = this.parentElement;
    const name = box.querySelector(".name").textContent;

    // Create an object with the superhero details
    const superhero = {
      name: name
      // Add more details if needed
    };

    // Save the superhero object to local storage
    saveToFavourites(superhero);

    // Add the "added" class to the favourite button
    this.classList.add("added");

    // Disable the favourite button
    this.disabled = true;

    // Update button text
    this.innerHTML = "Added to Favourites";

    // Display a success message
    alert("Added to favourites!");
  }

  function saveToFavourites(superhero) {
    // Retrieve existing favourites from local storage
    let favourites = localStorage.getItem("favourites");
    favourites = favourites ? JSON.parse(favourites) : [];

    // Check if superhero is already in favourites
    const superheroExists = favourites.some(item => item.name === superhero.name);
    if (!superheroExists) {
      // Add superhero to favourites
      favourites.push(superhero);

      // Save updated favourites back to local storage
      localStorage.setItem("favourites", JSON.stringify(favourites));
    }
  }
  
});
