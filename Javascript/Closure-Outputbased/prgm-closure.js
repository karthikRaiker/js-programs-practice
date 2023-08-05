// Closures in Javascript
// Ques 2: Write a function that would allow you to do this

function createBase(num){
    return function(innerNum){
        return num + innerNum
    }
    
}

var addSix = createBase(6);
console.log( addSix(21) ) // returns 27
console.log( addSix(10))  // returns 16

