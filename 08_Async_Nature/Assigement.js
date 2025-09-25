// 1. Write a JavaScript program that prints "Hello, World!" in the console after 3 seconds using setTimeout.
function  print(){
    console.log("Hello World")
}
// print();
setTimeout(function print(){
    console.log("hello world!!")
},3000)

setTimeout(print, 3000)

// 2. Use setInterval to print the numbers from 1 to 5 in the console, one number every 1 second. Stop after printing 5.

let count = 1;

function counter(){
    console.log(count);
    count++;
}

const setIntervalId = setInterval(counter, 1000);

setTimeout(() => {
    clearInterval(setIntervalId);
}, 6000);

//3.  Create a timer using setInterval that counts up from 0, printing the count every second. Stop the timer automatically when the count reaches 10 using clearInterval.

let num=0;
function number(){
    console.log("counter",num)
    num++;
}
const setinter = setInterval(number,1000);
setTimeout(() =>{
    clearInterval(setinter);    
},12000)


// 4. Using setTimeout (not setInterval), write a program that prints "Tick" every 2 seconds for a total of 5 times.
 

function print(num){
    if (num > 0){
        console.log("Tick");
        setTimeout(() => {
            print(num - 1);
        },2000);
    }
}

print(10);

//5.  Write a program that uses setInterval to print numbers starting from 1. Double the interval time after every print (1s, 2s, 4s, 8s, …) and stop after printing 5 numbers.

let count1 = 1;
let delay = 1000; 
let intervalId;

function startInterval() {
  intervalId = setInterval(() => {
    console.log(count1);

    if (count1 === 5) {
      clearInterval(intervalId); 
    } else {
      count1++;
      clearInterval(intervalId);   
      delay *= 2;                  
      startInterval();             
    }
  }, delay);
}

startInterval();
