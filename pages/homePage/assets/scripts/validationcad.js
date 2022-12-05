const btn = document.querySelector('#btn');
const msg = document.querySelector('#menssage');

const form = document.querySelector('#form1');



btn.addEventListener('click',(e) => {

e.preventDefault();

console.log(form1.value);
if (form1.valid){
    
 
msg.style.display="block";
msg.style.animation="cadastrado 2.5s";

setInterval( 'msg.style.display="none";',3000);

console.log(form1.value);
}
 









});

 