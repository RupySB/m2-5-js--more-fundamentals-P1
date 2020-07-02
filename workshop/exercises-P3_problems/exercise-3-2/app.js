// Exercise 3-2
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referenceable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

const btnList = document.querySelector("#btn-list");


let initButton=document.getElementById(`btn-${id}`);
color = ["gold"];
initButton.onClick = function(){
    (function loop()
    {
        let color = color.shift();
        initButton.backgroundColor = color;
    }
});

const onClick = (x) => {
const buttonId = x.target.id;
const buttonElement = document.getElementById(buttonId);
  switch (buttonId) {
    case "btn-1":
      buttonElement.style.opacity = 0;
      break;
    case "btn-2":
      buttonElement.style.background = "crimson";
      break;
    case "btn-3":
      buttonElement.style.background = "lightblue";
      break;
    case "btn-4":
      buttonElement.classList.add("jitters");
      break;
    default:
      break;
  }
};
btnList.addEventListener("click", onClick);
