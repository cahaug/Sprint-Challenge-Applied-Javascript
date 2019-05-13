class Carousel {
    constructor(carousel){
        this.element = carousel;
        this.left = document.querySelector('.carousel .left-button');
        this.right = document.querySelector('.carousel .right-button');
        this.cslImgs = document.querySelectorAll('.carousel img');
        this.cslImgs = Array.from(this.cslImgs).map( cslImgs => new CarouselImgs(cslImgs));

        document.querySelector('.carousel .left-button').addEventListener('click', (event) => {
            console.log("user clicked left");        
            cslImgs[0].style.display = 'none';

            this.slideLeft();
        });

        document.querySelector('.carousel .right-button').addEventListener('click', () => {
            console.log("user clicked right");
            this.slideRight();
        });
    }
    slideLeft() {
    }

    slideRight() {
        cslImgs[1].style.display = 'none';
    }
};
class CarouselImgs {
    constructor(cslImg){
      this.element = cslImg;
    }
    
    displayCarouselImg(){
        this.element.style.display = 'block';
    }
  }

let carousel = document.querySelector('.carousel');
carousel = Array.from(carousel).map( carousel => new Carousel(carousel));


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
