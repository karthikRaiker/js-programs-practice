function callOneTime() {
  let count = 0;
  return function () {
    if (count > 0) console.log`Already Called ${count} hello ${count} world `;
    else {
      console.log`Called First Time ${count} hello ${count} world`;
      count++;
    }
  };
}

const callFunc = callOneTime();
callFunc();
callFunc();
callFunc();
