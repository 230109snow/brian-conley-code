console.log("I am a string");

var num = 1

let foo = 'bar'
const bar = 'foo'

foo = 3
console.log(foo)

foo = false
console.log(foo)

//bar = false

//function
function greet(){
    //this name variable doesn't exist outside of greet function
    let name = 'auryn';
    console.log("hello " + name);

    //block scope
    if(true){
        //this creates a block scope
        let x = 3;
        const z = 10;
        //creating variable using var allows for usage outside block
        //var y = 6;
        console.log(x);

        //invokes both x and y
        //console.log(x,y);
        //console.log(x,y,z);
    }
    //x is in block scope; cannot be invoked
    //console.log(z);
    //console.log(x);

    //y can be invoked; var type used
    //console.log(y);
    //for(var i = 0; i < arr.length; i++){

    //}
    //this will work because we use var
    //console.log(i);
}

greet()

function increment(){
    num++;
}

increment()

function operations(){
    const a = 2, b = 5;
    const c = a+b;
    const d = b-a;
    const e = b/a;
    const f = b%a;
    const g = a*b;
    let h = 1;
    h++;
    console.log(h)
    h += 5;
    console.log(a, b, c, d, e)
}

operations()

// function conditionalOperators(){
//     if(true == false){
//         return "No";
//     }

//     if(true && false){
//         return "Why";
//     }

//     if(false || true){
//         return "Yes";
//     }

//     if(!false){
//         return "True";
//     }

//     if(3 === 3){        //Value comparison
//         return "True";
//     }

//     if(3 == '3'){       //Type comparison
//         return "True";
//     }

//     if(!undefined){
//         //truthy
//     }

//     if(null){
//         //falsey
//     }    
//      let arr = []

//      if(arr){
            
//      }
    
// }

