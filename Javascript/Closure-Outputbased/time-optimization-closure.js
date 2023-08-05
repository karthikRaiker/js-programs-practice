// Closures in Javascript
// Ques 3: Time Optimization
function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++){
    a[i] = i * i;
    }
    return function(index) {
    console.log(a[index]);
    }; I
}
const closure = find();
console.time("6");
closure(6);
console.timeEnd("6");
console.time("50");
closure(50);
console.timeEnd("50");