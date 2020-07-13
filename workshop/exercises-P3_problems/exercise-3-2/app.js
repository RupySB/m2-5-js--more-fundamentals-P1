// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const btnList = document.querySelector("#btn-list");

for (let id = 1; id < 5; id++) {
  const mainButton = document.getElementById(`btn-${id}`);
  mainButton.style.backgroundColor = "gold";
  mainButton.style.opacity = "100";
}

const toggleColor = (id, color) => {
  const btnElement = document.getElementById(id);
  const currentColor = btnElement.style.backgroundColor;

  btnElement.style.backgroundColor = currentColor === "gold" ? color : "gold";
};

const onClick = (x) => {
  const buttonId = x.target.id;
  const buttonElement = document.getElementById(buttonId);
  switch (buttonId) {
    case "btn-1":
      buttonElement.style.opacity =
        buttonElement.style.opacity === "100" ? "0" : "100";
      break;
    case "btn-2":
      toggleColor(buttonId, "crimson");
      break;
    case "btn-3":
      toggleColor(buttonId, "lightblue");
      break;
    case "btn-4":
      buttonElement.classList.add("jitters");
      break;
    default:
      break;
  }
};
btnList.addEventListener("click", onClick);

// function fillArray(value, len) {
//   var arr = [];
//   for (var i = 0; i < len; i++) {
//     arr.push(value);
//   }
//   return arr;
// }
//default color as gold + onclick = toggle
