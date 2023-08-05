
function testing()
{
    let a=10;
    function inner()
    {
        a++;
        console.log(a);
    }
    return inner
}
const b=testing()
b()
b()

