const galleryWrapper = document.querySelector('#gallery');

const reviews = []

// Size of Reviews Folder (+1)
const reviewsLength = 214;

function createGalleryArray() {
    for (let i = 1; i < reviewsLength; i++) {
        let location = './IMG/reviews/pic-' + i;
        
        let testimonialObject = {
            'src' : location
        };
        
        reviews.push(testimonialObject);
    };
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
