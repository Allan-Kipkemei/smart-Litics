// Delayed display of sign-up pop-up
setTimeout(function () {
    var modal = document.getElementById('signup-modal');
    modal.style.display = 'block';
}, 0000); // 6000 milliseconds = 6 seconds

// Get the modal and close button
var modal = document.getElementById('signup-modal');
var closeBtn = document.getElementsByClassName('close')[0];

// Close the modal and redirect to home page when the close button is clicked
closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    window.location.href = 'index.html'; // Replace 'home.html' with the desired URL of your home page
});

// Close the modal when the user clicks outside of it
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        window.location.href = 'index.html'; // Replace 'home.html' with the desired URL of your home page
    }
});
