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

//fizzbuzz() - Can call function before being defind

function fizzbuzz(){
    const userInput = document.querySelector('#fizzbuzz-input').value;
    //you'll want to look up
    //javascript loops (either while, or for will work well)
    // let n;
    // for (let i = 0; i < n; i++) {
    //     if(i % 15 == 0 ){
    //         console.log("Fizz"+(i));
        // } else if(i % 5 == 0){
        //     console.log("Buzz"+(i));
        // } else if(i % 3 == 0){
        //     console.log("FizzBuzz"+(i));
        // } else {
        //     console.log(i);
        // }
        
    // }
    //conditionals(if, elseif, else) or switch statements
    //modulo operator will also come handy here
    // console.log(document.querySelector('#fizzbuzz-output').value);

    //Use for loop
    //We are initializing our counter variable(i) to 1, while it is less than or equal to userInput value, we'll continue looping
    //we'll continue looping
    //after each iteration, we'll increment the value of i by 1
    for(let i = 1; i <= userInput; i++){
        console.log(i);     //Take small steps for success and build up slowly
    }

    //closure
    function divisible(){
        let result = '';
        if(num % 15 === 0){         //Go through the flow of the most restrictive to least
            result += "fizzbuzz";
        }
        else if(num % 5 ===0){
            result += "buzz";
        }
        else if(num % 3 ===0){
            result += "fizz";
        }
        else{
            result += num;
        }
    
        // switch(num){        //Break not need; will flow through naturally
        //     case 15:
        //         result += "fizzbuzz"
        //     //break;
        //     case 5:
        //         result += "buzz"
        //     //break;
        //     case 3:
        //         result += "fizz"
        //     //break;
        //     default:
        //         result += num
        // }
    
        return result;
    }
}

function display(num){

    // document.getElementById('expression') = document.querySelectorAll('calc-num');                           // error, doesn't work
    // document.getElementById('expression').textContent = document.querySelectorAll('calc-num').value;         // div space collapses
    // document.getElementById('expression') = document.querySelectorAll('calc-num').value;                     // error, doesn't work

    document.getElementById('expression').value += num                                   // does not generate output
    return num

    // const numBtn = document.querySelectorAll("calc-num")
    // const operatorBtn = document.querySelectorAll("operation")
    // const equalsBtn = document.getElementById("equals")
}

let numOne;
let numTwo;

function calculator(numOne, numTwo){
    const calc = 0                      //initialize if using const keyword
    switch(numOne, numTwo){
        case '+': calc = numOne + numTwo
            break            
        case '-': calc = numOne - numTwo
            break            
        case '*': calc = numOne * numTwo
            break            
        case '/': calc = numOne / numTwo
            break            
        default: return "Error"
    }      
        
    const calcValue = document.querySelector('calc-val');
    calcValue
}

// //different ways to create functions
// const fn = function(){}
// const fn2 = calculator;
// const fn3 = () => {}

