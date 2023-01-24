const seta = document.querySelector('#up');



window.addEventListener('scroll',function(){


let value = window.scrollY;

if (value >= 520){

 seta.style.display="block"
 seta.style.animation="dropon 4s ease";
 
 
 



}else{
    seta.style.display="none";
    seta.style.animation="dropon 4s invert";
}

console.log(value)



});