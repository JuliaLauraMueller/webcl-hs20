/* ----   Slider   ---- */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var index;
    var slides  = document.getElementsByClassName("mySlides");
    var dots    = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
    }
    for (index = 0; index < dots.length; index++) {
        dots[index].className = dots[index].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display    = "block";
    dots[slideIndex - 1].className          += " active";
}

function openWindow(){
    window.open("https://www.fhnw.ch");
}

const openWinToCounter = () => {
    window.open("counter.html")
}

function openImg(){
    window.open("images/i_am_groot.jpg")
}


/* ----   COUNTER   ---- */
let number = 0;
document.getElementById("myNumber").innerHTML = number.toString();

function plusNumber(number){
    number += 1;
    document.write(number);
    return number;
}

function minusNumber(number){
    if(number >= 0){
        number -= 1;
    } else {
        document.write("Can not be minus");
    }
    document.write(number);
    return number;
}

function resetNumber(number){
    number = 0;
    document.write(number);
    return number;
}


