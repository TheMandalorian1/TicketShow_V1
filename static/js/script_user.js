// Assuming you have an array of booking details for the user
const bookings = [
    {
      movieName: "Avengers: Endgame",
      moviePosterUrl: "https://via.placeholder.com/300x400",
      date: "2023-04-01",
      time: "10:30 AM"
    },
    {
      movieName: "The Dark Knight",
      moviePosterUrl: "https://via.placeholder.com/300x400",
      date: "2023-04-03",
      time: "2:00 PM"
    },
    // More booking details...
  ];
  
  const cardContainer = document.querySelector(".card-container");
  
  bookings.forEach((booking) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const moviePoster = document.createElement("img");
    moviePoster.src = booking.moviePosterUrl;
    card.appendChild(moviePoster);
  
    const movieDetails = document.createElement("div");
    movieDetails.classList.add("movie-details");
  
    const movieName = document.createElement("div");
    movieName.classList.add("movie-name");
    movieName.textContent = booking.movieName;
    movieDetails.appendChild(movieName);
  
    const movieDate = document.createElement("div");
    movieDate.classList.add("movie-date");
    movieDate.textContent = `${booking.date} at ${booking.time}`;
    movieDetails.appendChild(movieDate);
  
    card.appendChild(movieDetails);
  
    cardContainer.appendChild(card);
  });
  