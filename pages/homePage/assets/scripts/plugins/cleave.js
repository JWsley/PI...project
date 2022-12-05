 
// FORMULARIO 1 =================================================

const dataNasc = document.querySelector('.dataNasc');
const tel = document.querySelector('.tel');
const cpf = document.querySelector('.cpf')
const rg = document.querySelector('.rg')
 const cep = document.querySelector('.cep')
 const num = document.querySelector('.inptnum')







//  new Cleave(dataNasc,{
//     date:true,
//     delimeters:['/','/'],
//     blocks:[2,2,4],
//     numericOnly:true



//  });


 new Cleave(tel, {
    delimiters: ['(',')',' ', '.', '-'],
    blocks: [0,2,1 ,4,4 ],
    numericOnly:true
});
 

new Cleave(cpf,{

    delimiters:['.','.','-'],
    blocks:[3,3,3,2],
    numericOnly:true

});

new Cleave(rg,{

    delimiters:['.','.','-'],
    blocks:[2,3,3,1],
    numericOnly:true


});


new Cleave(cep,{

    delimiters:['-'],
    blocks:[5,3],
    numericOnly:true



});


new Cleave(num,{
    blocks:[5],

    numericOnly:true




});



// FORMULARIO 2 ==============================================  
 
 
const tel2 = document.querySelector('.tel2');
 const cep2 = document.querySelector('.cep2')
 const num2 = document.querySelector('.num2') 
 const cnpj = document.querySelector('.cnpj')




// "99.999.999/9999-99"
new Cleave(cnpj,{
    delimiters:['.','.','/','-'],
    blocks:[2,3,3,4,2],
    numericOnly:true


});



new Cleave(cep2,{

    delimiters:['-'],
    blocks:[5,3],
    numericOnly:true



});


new Cleave(num2,{
    blocks:[5],

    numericOnly:true



});


new Cleave(tel2, {
    delimiters: ['(',')',' ', '.', '-'],
    blocks: [0,2,1 ,4,4 ],
    numericOnly:true
});