const prevBtn = document.querySelector('.prevbtn');
const nextBtn = document.querySelector('.nextbtn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides=slides.length;
let slideNumber=0;

//slider next button
nextBtn.onclick=()=>{
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    });

    slideNumber++;
    if(slideNumber>(numberOfSlides-1)){
        slideNumber=0;
    }
    slides[slideNumber].classList.add('active');
}

//slider prev button
prevBtn.onclick=()=>{
    slides.forEach((slide)=>{
        slide.classList.remove('active');
    });
    slideNumber--;
    if(slideNumber<0){
        slideNumber= numberOfSlides-1;
    }
    slides[slideNumber].classList.add('active');
}