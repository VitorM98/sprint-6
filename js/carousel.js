
// Array storage class
let carouselArr = [];


//class Carousel
class Carousel {

    constructor(imgUrl, title, linkUrl) {
        this.imgUrl = "img/" + imgUrl; 
        this.title = title;
        this.linkUrl = linkUrl;
    }
    
      
    static Start(arr){
        if(arr && arr.length > 0){
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            
            Carousel.ShowSlide(); 
            
            Carousel._interval = setInterval(function(){ Carousel.Next(); }, 5000);

        } else if (!arr) {
            throw "Method Start need a Array Variable.";
        }
    }

    static ShowSlide() {
        const currentSlide = carouselArr[Carousel._sequence];

        const carouselDiv = document.getElementById("carousel");
        
        carouselDiv.innerHTML = '';

        const imageElement = document.createElement('img');
        imageElement.src = currentSlide.imgUrl;
        imageElement.alt = currentSlide.title;

        const linkElement = document.createElement('a');
        linkElement.href = currentSlide.linkUrl;
        linkElement.appendChild(imageElement);
        
        carouselDiv.appendChild(linkElement);

        const titleContainer = document.createElement('div');
        titleContainer.className = 'carousel-caption'; 

        const titleLinkElement = document.createElement('a');
        titleLinkElement.href = currentSlide.linkUrl;
        titleLinkElement.textContent = currentSlide.title; 
        
        titleContainer.appendChild(titleLinkElement);

        carouselDiv.appendChild(titleContainer);
    }
    
    static Next(){
        Carousel._sequence++;
        if(Carousel._sequence >= Carousel._size){
            Carousel._sequence = 0; 
        }
        Carousel.ShowSlide();
    }
    
    static Prev(){
        Carousel._sequence--;
        if(Carousel._sequence < 0){
            Carousel._sequence = Carousel._size - 1; 
        }
        Carousel.ShowSlide();
    }
};