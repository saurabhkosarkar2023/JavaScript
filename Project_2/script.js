const form=document.querySelector('form');
console.log(form);

form.addEventlistener('submit',function(e){
    console.log(e);
    // e.preventDefault();
})