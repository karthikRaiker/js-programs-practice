// Currying in Javascript
// Question 5 - Manipulating DOM
function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}
const updateHeader = updateElementText("heading");
updateHeader("Best example of DOM updation using Currying");
