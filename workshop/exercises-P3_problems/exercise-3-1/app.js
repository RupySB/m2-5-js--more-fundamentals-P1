// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const btnList = document.querySelector("#btn-list");

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
