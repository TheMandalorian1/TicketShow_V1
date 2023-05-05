// Get the login form
const loginForm = document.querySelector('#login-form');

// Attach a submit event listener to the login form
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the email and password input fields
  const emailInput = loginForm.querySelector('#email');
  const passwordInput = loginForm.querySelector('#password');

  // Get the user's email and password
  const email = emailInput.value;
  const password = passwordInput.value;

  // TODO: Validate the user's email and password

  // TODO: Make an API call to the server to authenticate the user
  // using the email and password values
  
  // Redirect the user to their dashboard on successful authentication
  window.location.href = '/homepage';
});

// Get the sign up form
const signupForm = document.querySelector('#signup-form');

// Attach a submit event listener to the sign up form
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the name, email, and password input fields
  const nameInput = signupForm.querySelector('#name');
  const emailInput = signupForm.querySelector('#email');
  const passwordInput = signupForm.querySelector('#password');

  // Get the user's name, email, and password
  const name = nameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;

  // TODO: Validate the user's name, email, and password

  // TODO: Make an API call to the server to create a new user
  // using the name, email, and password values
  
  // Redirect the user to their dashboard on successful sign up
  window.location.href = '/homepage';
});
