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
    

formcontainer.style.display="block"
 

body.style.overflow="hidden"

 

 


}




function formEnd(){

    var formcontainer = document.querySelector('#formback')
    var body = document.querySelector('#body')
        
    
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

        pointer2.style.display="none"
        area2.style.display="none";

    }else{
       
    
        pointer2.style.display="block"
        area2.style.display="block";

        pointer1.style.display="none";
        area1.style.display="none";

    }
  


}
 