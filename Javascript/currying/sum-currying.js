const curryingSum = (a) => (b) => b ? curryingSum(a + b) : a;

console.log(curryingSum(10)(20)(30)());
