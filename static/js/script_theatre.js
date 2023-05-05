// This is just an example code to show how you can use JavaScript to handle events on the page
// You can modify it according to your needs

// Get all the book buttons
const bookBtns = document.querySelectorAll('.book-btn');

// Add event listener to each book button
bookBtns.forEach((bookBtn) => {
  bookBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('This button is not functional yet');
  });
});
