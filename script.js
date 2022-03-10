var display=document.getElementById('result');
var btn=document.querySelectorAll('#btn');
var equals=document.getElementById('equals');
btn.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        display.value=display.value+event.currentTarget.value;
    });
});

equals.addEventListener('click',function(){
    display.value=eval(display.value);
});
var clear=document.querySelector('.clear')
clear.addEventListener('click',()=>{
    display.value=0;
});
var delet=document.querySelector('.delet');
delet.addEventListener('click',()=>{
    display.value=display.value.slice(0,-1);
});