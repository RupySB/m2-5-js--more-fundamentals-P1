// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

const btnList = document.querySelector("#btn-list");

const revertNormal = () => {
  for (let id = 1; id < 5; id++) {
    const mainButton = document.getElementById(`btn-${id}`);
    mainButton.style.backgroundColor = "gold";
    mainButton.style.opacity = "100";
    if (id === 4) {
      mainButton.classList.remove("jitters");
    }
  }
}; //now
revertNormal();

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
    case "reset":
      revertNormal();
      //NEVER FORGET TO PUT BREAKS AFTER EVERYTHING EVER AGAIN.
      break;
    default:
      break;
  }
};
btnList.addEventListener("click", onClick);
