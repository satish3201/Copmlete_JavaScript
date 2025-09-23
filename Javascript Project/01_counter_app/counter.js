let count = document.querySelector('.container')
let btn = document.getElementById('btn')

let value = 0;

function counter(){
    value = value+1;
    count.textContent = value;
}

function decrement(){
    value = value-1;
    count.textContent = value;
}

function reset(){
    value = 0;
    count.textContent = value;
}