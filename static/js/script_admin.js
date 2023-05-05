let movies = [];
let venues = [];

function addMovie() {
  let name = document.getElementById("movie-name").value;
  let description = document.getElementById("movie-description").value;
  let rating = document.getElementById("movie-rating").value;
  let image= document.getElementById("movie-image").value;

  let movie = { name: name,description: description, rating: rating, image: image };
  movies.push(movie);
  console.log(movies);
  alert("Movie added successfully!");
  document.getElementById("movie-name").value = "";
  document.getElementById("movie-description").value = "";
  document.getElementById("movie-rating").value = "";
  document.getElementById("movie-image").value = "";
}

function addVenue() {
  let name = document.getElementById("venue-name").value;
  let location = document.getElementById("venue-location").value;
  let capacity = document.getElementById("venue-capacity").value;

  let venue = { name: name, location: location, capacity: capacity };
  venues.push(venue);
  console.log(venues);
  alert("Venue added successfully!");
  document.getElementById("venue-name").value = "";
  document.getElementById("venue-location").value = "";
  document.getElementById("venue-capacity").value = "";
}


const form = document.getElementById('add-show');
const movie = document.getElementById('movie');
const theater = document.getElementById('theater');

