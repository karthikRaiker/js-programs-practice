let count = 0;
(function printCount(){
    if(count===0){
        let count=1;
        console.log(count) //shadowing 1
    }
    console.log(count) //took from global 0
})()