const stars = document.querySelectorAll('.star');
let currentRating = 0;

// Function to set the rating
function setRating(rating) {
    currentRating = rating;
    updateStars();
}

// Function to update the star colors based on the current rating
function updateStars() {
    stars.forEach(star => {
        if (star.dataset.value <= currentRating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Add click event listener to each star
stars.forEach(star => {
    star.addEventListener('click', () => {
        setRating(star.dataset.value);
    });
});

// Initialize with a default rating (optional)
setRating(3);


