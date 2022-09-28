const galleryWrapper = document.querySelector('#gallery');

const reviews = [
    {
        'src' : './IMG/reviews/review1.png'
    },
    {
        'src' : './IMG/reviews/review2.png'
    },
    {
        'src' : './IMG/reviews/review3.png'
    },
    {
        'src' : './IMG/reviews/review4.png'
    },
    {
        'src' : './IMG/reviews/review5.png'
    },
    {
        'src' : './IMG/reviews/review6.png'
    },
    {
        'src' : './IMG/reviews/review7.png'
    },
    {
        'src' : './IMG/reviews/review8.png'
    },
    {
        'src' : './IMG/reviews/review9.png'
    },
    {
        'src' : './IMG/reviews/review10.png'
    },
    {
        'src' : './IMG/reviews/review11.png'
    },
    {
        'src' : './IMG/reviews/review12.png'
    }
]


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
    createGallery();
});