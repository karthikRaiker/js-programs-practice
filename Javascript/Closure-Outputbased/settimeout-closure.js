function a() {
  for (var i = 0; i <= 3; i++) {
    function inner(i) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }
    inner(i);
  }
}
a();
