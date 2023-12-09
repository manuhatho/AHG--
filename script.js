
const barMenu = document.querySelector(".menu");
const navMenu = document.querySelector(".nav2");
const navMenu2 = document.querySelector(".nav3");
const header = document.querySelector("header");
// const headerSc = document.querySelector("header");
const body = document.querySelector("body");
const scrollcolor = document.querySelectorAll('#scrollColor');
const barForm = document.querySelector('.form');
const btnInscription = document.getElementById('inscription');
const exit = document.getElementById('exit');
// const logo = document.getElementById("logo");
const form = document.getElementById ('inscriptionForm');

const boxInscription = document.querySelector('.boxInscription');
console.log(boxInscription);

document.addEventListener("scroll",function(){
    if(window.scrollY > 0){
        header.classList.add("active");
        header.style.background ="white";
       
    } else {
        header.classList.remove("active")
        header.style.background ="none"
    }
});
barMenu.addEventListener("click",function(){
    barMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    navMenu2.classList.toggle('active');
    body.classList.toggle('active');
    // logo.classList.toggle('active');
    // headerSc.classList.toggle('active')
 
});

btnInscription.addEventListener("click",function(){
    boxInscription.classList.toggle('active');
    form.classList.add('active');
    body.classList.toggle('active')
})
barForm.addEventListener("click",function(){

    boxInscription.classList.remove('active');
    form.classList.add('actives');
    body.classList.remove('active');
   
})

exit.addEventListener("click",function(){
    navMenu.classList.toggle('active');
    navMenu2.classList.toggle('active');
    barMenu.classList.toggle('active');
    body.classList.remove('active');
})




const first = document.querySelector('.first');
const home = document.getElementById('home')
first.addEventListener("mouseover",function(){
    home.classList.add('black')
})
first.addEventListener("mouseout",function(){
    home.classList.remove('black')
})

let imageIndex = 0;
gallery();
function plusImage(n){
    gallery(imageIndex += n)
}
const next = document.getElementById('next');
const previous = document.getElementById('previous');

next.addEventListener("click",function(){
    plusImage(1);
})
previous.addEventListener("click",function(){
    plusImage(-1);
})

next.addEventListener("mousedown",function(){
    next.style.transform = "scale(0.8)";
})
next.addEventListener('mouseup',function(){
    next.style.transform = "scale(1)";
})
previous.addEventListener("mousedown",function(){
    previous.style.transform = "scale(0.8)";
})
previous.addEventListener('mouseup',function(){
    previous.style.transform = "scale(1)";
})
function gallery (){
   let images = document.querySelectorAll('#image');
   images.forEach(function(){
    if(imageIndex < 0){
        imageIndex = images.length -1;
    }

    if(imageIndex >= images.length){
        imageIndex = 0;
    }

   
    for(i = 0; i < images.length; i++){
        images[i].style.display = 'none';
        
      

    }
    
    images[imageIndex].style.display = 'block';
   
   });
}

 gallery();
 

 function diapo (){
    let images = document.getElementsByClassName("image");
    
       for(i = 0 ; i < images.length; i++){
        images[i].style.display = 'none';
       }
       imageIndex++
       if(imageIndex >= images.length){
        imageIndex = 0;
       }
       images[imageIndex].style.display = "block";

       setTimeout(diapo,15000);

 }
 diapo();

// -------------------------------------------------------------------


 