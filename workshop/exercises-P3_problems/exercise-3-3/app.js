// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

const btnList = document.querySelector("#btn-list");

const revertNormal = () => {
    for (let id = 1; id < 5; id++) {
    
      const initButton = document.getElementById(`btn-${id}`);
      initButton.style.opacity = '100';
      initButton.style.backgroundColor = 'gold';
    }
};

revertNormal();

let initButton=document.getElementById(`btn-${id}`);
color = ["gold"];
initButton.onClick = function(){
    (function loop()
    {
        let color = color.shift();
        initButton.backgroundColor = color;
    }
});
//It keeps saying theres an error around here..im not sure what it is. 

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
    case "reset":
    revertNormal();
    default:
      break;
  }
};
btnList.addEventListener("click", onClick);
