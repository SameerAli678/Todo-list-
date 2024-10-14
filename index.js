const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("listcontainer");
// const add_btn = document
//   .getElementById("add_btn")
//   .addEventListener("click", addtask);
function addtask() {
  if (inputbox.value === "") {
    alert("please enter a task ");
  } else {
    let li = document.createElement("li");

    li.innerHTML = inputbox.value;
    listcontainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    // Element.classlist.add("sam");
  }
  inputbox.value = "";
  // Element.setAttribute("class", "sam");
  Element.classlist.add("sam");
}
listcontainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classlist.toggle("chaked");
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
    }
  },
  false
);


