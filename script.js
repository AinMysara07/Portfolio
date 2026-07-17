const thumbnails = document.querySelectorAll(".thumbnail");

const mainImage = document.getElementById("main-image");

thumbnails.forEach(thumbnail => {

    thumbnail.addEventListener("click", () => {

        mainImage.src = thumbnail.src;

        thumbnails.forEach(img => img.classList.remove("active"));

        thumbnail.classList.add("active");

    });

});

const sliders = document.querySelectorAll(".slider-image");

sliders.forEach(slider=>{

    const images = JSON.parse(slider.dataset.images);

    const dots = slider.nextElementSibling.children;

    let current = 0;

    setInterval(()=>{

        current++;

        if(current>=images.length){

            current=0;

        }

        slider.src=images[current];

        [...dots].forEach(dot=>dot.classList.remove("active"));

        dots[current].classList.add("active");

    },3000);

});

/* ==========================================
   PROJECT SCREENSHOTS
========================================== */

const galleryThumbs = document.querySelectorAll(".gallery-thumb");

const galleryMain = document.getElementById("gallery-main");

const counter = document.getElementById("current-image");

let galleryIndex = 0;

galleryThumbs.forEach((thumb,index)=>{

    thumb.addEventListener("click",()=>{

        galleryIndex=index;

        updateGallery();

    });

});

function updateGallery(){

    galleryMain.src=galleryThumbs[galleryIndex].src;

    counter.textContent=galleryIndex+1;

    galleryThumbs.forEach(img=>img.classList.remove("active"));

    galleryThumbs[galleryIndex].classList.add("active");

}

document.getElementById("nextGallery").onclick=function(){

    galleryIndex++;

    if(galleryIndex>=galleryThumbs.length){

        galleryIndex=0;

    }

    updateGallery();

}

document.getElementById("prevGallery").onclick=function(){

    galleryIndex--;

    if(galleryIndex<0){

        galleryIndex=galleryThumbs.length-1;

    }

    updateGallery();

}