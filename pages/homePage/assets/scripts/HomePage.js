function activeSearch(){
    var bar = document.querySelector('#pesquisa')
    var input = document.querySelector('#input')


    bar.style.borderBottom= "3px solid #BCECE0";
    input.style.opacity= "1";
    input.style.cursor= "pointer";


}




function formStart(){

var formcontainer = document.querySelector('#formback')
var body = document.querySelector('#body')
var form = document.querySelector('#formulario')
    

formcontainer.style.display="block"

form.style.animation="dropon 1s ease";
 

body.style.overflow="hidden"

    
form.style.visibility="hidden"
form.style.visibility="visible"
form.style.transition="10s"
 


}




function formEnd(){
    var pointer1 = document.querySelector('#pnt1');
    var area1 = document.querySelector('#a1')
    var pointer2 = document.querySelector('#pnt2');
    var area2 = document.querySelector('#a2')
    
    var formcontainer = document.querySelector('#formback')
    var body = document.querySelector('#body');
    
    pointer1.style.display="none"
    area1.style.display="none"
    pointer2.style.display="none"
    area2.style.display="none"
   
        
    
    formcontainer.style.display="none"
    
    body.style.overflow="visible"
    
     
    
     
    
    
    }



  
 
function selectOPT(escolha){
    var pointer1 = document.querySelector('#pnt1');
    var area1 = document.querySelector('#a1')
    var pointer2 = document.querySelector('#pnt2');
    var area2 = document.querySelector('#a2')
    if (escolha == 1){
       
        pointer1.style.display="block";
        area1.style.display="block";
        area1.style.animation="area1opc .5s ease"

        pointer2.style.display="none"
        area2.style.display="none";

    }else{
       
    
        pointer2.style.display="block"
        area2.style.display="block";
        area2.style.animation="area2opc .5s ease"

        pointer1.style.display="none";
        area1.style.display="none";

    }
  


}
 



// VERIFICAÇAO DA SCROLLBAR==========================================
 
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









// //////////////////////login area





function loginstart(){

    var loginback = document.querySelector('#loginback');
    var body = document.querySelector('#body');
 
        
    
    loginback.style.display="block";
    body.style.overflow="hidden";
    
    loginback.style.animation="dropon 1s ease";
     
    
    body.style.overflow="hidden"
    console.log('foi')
     
    
    
    }
    
    
    
    
    function loginend(){
        
        
        var loginback = document.querySelector('#loginback')
        var body = document.querySelector('#body');
        
    
       
            
        
        loginback.style.display="none"
        
        body.style.overflow="visible"
        
         
        
         
        
        
        }
    

        function atalhocad(){
            loginend()

            formStart()
        }