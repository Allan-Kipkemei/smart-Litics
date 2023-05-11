var loginButton = document.getElementById('loginButton');
var colors = ['#337ab7', '#5cb85c', '#f0ad4e', '#d9534f']; // Array of colors to cycle through
var currentIndex = 0;

function changeButtonColor() {
    loginButton.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; // Move to the next color in the array
}

// Start changing colors every 2 seconds (2000 milliseconds)
var colorInterval = setInterval(changeButtonColor, 000);

loginButton.addEventListener('click', function () {
    // Add your login logic here
    console.log('Login clicked!');
    clearInterval(colorInterval); // Stop changing colors when the button is clicked
});
