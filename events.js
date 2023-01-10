let num = 1;
function increment(){
    const countElem = document.getElementById("count");
    countElem.innerText = ++num;
}

function decrement(){
    const countElem = document.getElementById("count");
    countElem.innerText = --num;
}   

function reset(){
    const countElem = document.getElementById("count");
    num = 0;
    countElem.innerText = 0;
}

function modifyNum(number){
    const countElem = document.getElementById("count");
    num += number;
    countElem.innerText = num;
}

function fizzbuzz(){
    console.log(document.querySelector('#fizzbuzz-input').value);
    //you'll want to look up
    //javascript loops (either while, or for will work well)
    let n;
    for (let i = 0; i < n; i++) {
        if(i % 3 == 0 ){
            console.log("Fizz"+(i));
        // } else if(i % 5 == 0){
        //     console.log("Buzz"+(i));
        // } else if(i % 15 == 0){
        //     console.log("FizzBuzz"+(i));
        } else {
            console.log(i);
        }
        
    }
    //conditionals(if, elseif, else) or switch statements
    //modulo operator will also come handy here
    console.log(document.querySelector('#fizzbuzz-output').value);
}

function calculator(value){
    const calcValue = document.getElementById("expression")
}