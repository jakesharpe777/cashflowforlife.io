const galleryWrapper = document.querySelector('#gallery');

const reviews = []

// Size of Reviews Folder (+1)
const reviewsLength = 214;

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function createGalleryArray() {
    for (let i = 1; i < reviewsLength; i++) {
        let location = './IMG/reviews/pic-' + i + '.png';
        
        let testimonialObject = {
            'src' : location
        };
        
        reviews.push(testimonialObject);
    };
    
    shuffleArray(reviews);
} 

function createGallery() {
    for (let i = 0; i < reviews.length; i++) {
        const galleryIMG = `
            <div class="item">
                <img src="${reviews[i].src}" alt="CashflowForLife Review">
            </div>
        `;

        galleryWrapper.insertAdjacentHTML("beforeend", galleryIMG);
    };
};



$(document).ready(function() {
    createGalleryArray();
    createGallery();
});
