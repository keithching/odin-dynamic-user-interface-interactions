import Img1 from './img/1.jpg';
import Img2 from './img/2.jpeg';
import Img3 from './img/3.jpg';
import Img4 from './img/4.jpg';
import Img5 from './img/5.jpg';


const createImageSlider = () => {

    // DOM creation
    const container = document.querySelector('.container');

    const top = document.createElement('div');
    top.classList.add('top');
    const bottom = document.createElement('div');
    bottom.classList.add('bottom');

    const imageSlider = document.createElement('div');
    imageSlider.classList.add('imageSlider');

    const image1 = new Image();
    image1.classList.add('images');
    image1.src = Img1;
    image1.classList.add('image1');
    imageSlider.appendChild(image1);

    const image2 = new Image();
    image2.classList.add('images');
    image2.src = Img2;
    image2.classList.add('image2');
    imageSlider.appendChild(image2);

    const image3 = new Image();
    image3.classList.add('images');
    image3.src = Img3;
    image3.classList.add('image3');
    imageSlider.appendChild(image3);

    const image4 = new Image();
    image4.classList.add('images');
    image4.src = Img4;
    image4.classList.add('image4');
    imageSlider.appendChild(image4);

    const image5 = new Image();
    image5.classList.add('images');
    image5.src = Img5;
    image5.classList.add('image5');
    imageSlider.appendChild(image5);


    const previousButton = document.createElement('button');
    previousButton.classList.add('sliderButton');
    previousButton.textContent = '<';
    previousButton.addEventListener('click', switchToPreviousImage);
    
    const nextButton = document.createElement('button');
    nextButton.classList.add('sliderButton');
    nextButton.textContent = '>';
    nextButton.addEventListener('click', switchToNextImage);

    top.appendChild(previousButton);
    top.appendChild(imageSlider);
    top.appendChild(nextButton);

    // navigation circles DOM
    const navCircles = document.createElement('div');
    navCircles.classList.add('navCircles');
    navCircles.addEventListener('click', (e) => {

        if (e.target.nodeName == 'DIV') {
            return;
        }
        jumpToImage(e.target.id);
    })

    const circle1 = document.createElement('p');
    circle1.id = 'circle1';
    const circle2 = document.createElement('p');
    circle2.id = 'circle2';
    const circle3 = document.createElement('p');
    circle3.id = 'circle3';
    const circle4 = document.createElement('p');
    circle4.id = 'circle4';
    const circle5 = document.createElement('p');
    circle5.id = 'circle5';


    circle1.classList.add('currentCircle');

    navCircles.appendChild(circle1);
    navCircles.appendChild(circle2);
    navCircles.appendChild(circle3);
    navCircles.appendChild(circle4);
    navCircles.appendChild(circle5);


    bottom.appendChild(navCircles);

    container.appendChild(top);
    container.appendChild(bottom);


    // execute slide show
    playSlideShow();

};


const playSlideShow = () => {

    // slide show: 5-second interval
    const showImage = setInterval(() => {
        switchToNextImage();
    }, 5000);

    // function for stopping the slider when navbar gets clicked away from image slider
    const stopSlider = () => {
            clearInterval(showImage);
    };

    const navbar = document.querySelector('.navbar ul');
    const imageSliderId = 'image-slider-id';

    navbar.addEventListener('click', (e) => {

        // return if click not on the list items
        if (e.target.nodeName == 'UL') {
            return;
        }

        if (e.target.id !== imageSliderId) {
            stopSlider();
        }

    });

};


const jumpToImage = (circleId) => {

    // set the input id as the current image
    let newImageSourceIndex;

    if (circleId == 'circle1') {
        newImageSourceIndex = 0;
    } else if (circleId == 'circle2') {
        newImageSourceIndex = 1;        
    } else if (circleId == 'circle3') {
        newImageSourceIndex = 2;        
    } else if (circleId == 'circle4') {
        newImageSourceIndex = 3;        
    } else if (circleId == 'circle5') {
        newImageSourceIndex = 4;        
    } 


    const images = document.querySelectorAll('.images');

    // reorder the image array so that the previous image becomes the current image
    const reorderedImages = Array.from(images); // create array from nodelist
    const shortenedArray = reorderedImages.splice(newImageSourceIndex, images.length - newImageSourceIndex); 
    // shortened array being the extracted sub-array
    // reorderedImages being the remaining sub-array

    const finalArray = shortenedArray.concat(reorderedImages); // joining the extracted array and the remaining array together

    // assign the classes so that the new current image is shown within the frame

    // remove existing ordering
    images.forEach(image => {
        for (let i = 0; i < images.length; i++) {
            image.classList.remove(`image${i+1}`);
        }
    });
    
    // assign new ordering
    for (let i = 0; i < finalArray.length; i++) {
        finalArray[i].classList.add(`image${i+1}`);
    }
    

    // nav circles styling
    const navCircles = document.querySelector('.navCircles').children;

    for (let i = 0; i < navCircles.length; i++) {
        navCircles[i].classList.remove('currentCircle');
    }

    navCircles[newImageSourceIndex].classList.add('currentCircle');
    
};


const switchToPreviousImage = () => {

    // get the current image
    const currentImage = document.querySelector('.image1');
    const images = document.querySelectorAll('.images');
    let currentImageSourceIndex;

    images.forEach((image, index) => {
        if (image === currentImage) {
            currentImageSourceIndex = index;
        } 
    });

    // get the previous image in the queue
    let previousImageSourceIndex;

    if (currentImageSourceIndex == 0) {
        previousImageSourceIndex = images.length - 1;
    } else {
        previousImageSourceIndex = currentImageSourceIndex - 1;
    }

    // reorder the image array so that the previous image becomes the current image
    const reorderedImages = Array.from(images); // create array from nodelist
    const shortenedArray = reorderedImages.splice(previousImageSourceIndex, images.length - previousImageSourceIndex); 
    // shortened array being the extracted sub-array
    // reorderedImages being the remaining sub-array

    const finalArray = shortenedArray.concat(reorderedImages); // joining the extracted array and the remaining array together

    // assign the classes so that the new current image is shown within the frame

    // remove existing ordering
    images.forEach(image => {
        for (let i = 0; i < images.length; i++) {
            image.classList.remove(`image${i+1}`);
        }
    });
    
    // assign new ordering
    for (let i = 0; i < finalArray.length; i++) {
        finalArray[i].classList.add(`image${i+1}`);
    }


    // nav circles styling
    const navCircles = document.querySelector('.navCircles').children;

    for (let i = 0; i < navCircles.length; i++) {
        navCircles[i].classList.remove('currentCircle');
    }

    navCircles[previousImageSourceIndex].classList.add('currentCircle');

};


const switchToNextImage = () => {

    // get the current image
    const currentImage = document.querySelector('.image1');
    const images = document.querySelectorAll('.images');
    let currentImageSourceIndex;

    images.forEach((image, index) => {
        if (image === currentImage) {
            currentImageSourceIndex = index;
        } 
    });

    // get the next image in the queue
    let nextImageSourceIndex;

    if (currentImageSourceIndex == images.length - 1) {
        nextImageSourceIndex = 0;
    } else {
        nextImageSourceIndex = currentImageSourceIndex + 1;
    }

    // reorder the image array so that the next image becomes the current image
    const reorderedImages = Array.from(images); // create array from nodelist
    const shortenedArray = reorderedImages.splice(nextImageSourceIndex, images.length - nextImageSourceIndex); 
    // shortened array being the extracted sub-array
    // reorderedImages being the remaining sub-array

    const finalArray = shortenedArray.concat(reorderedImages); // joining the extracted array and the remaining array together

    // assign the classes so that the new current image is shown within the frame

    // remove existing ordering
    images.forEach(image => {
        for (let i = 0; i < images.length; i++) {
            image.classList.remove(`image${i+1}`);
        }
    });
    
    // assign new ordering
    for (let i = 0; i < finalArray.length; i++) {
        finalArray[i].classList.add(`image${i+1}`);
    }


    // nav circles styling
    const navCircles = document.querySelector('.navCircles').children;

    for (let i = 0; i < navCircles.length; i++) {
        navCircles[i].classList.remove('currentCircle');
    }

    navCircles[nextImageSourceIndex].classList.add('currentCircle');

};


export {
    createImageSlider
};