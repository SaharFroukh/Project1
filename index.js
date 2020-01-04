const container = document.getElementById("container");
const input = document.getElementById("divs-number");
const button = document.getElementById("change-number");

const createDivs = () => {
  const { value } = input;
  const number = value ? value : 16; // if there's value number will be the typed value otherwise will be 16
  const squareNumber = number * number;

  const element = document.getElementById("parent");
  if (element) {
    element.remove();
  }
  const parentDiv = document.createElement("div"); // div container to hold the Rectangles and once the user add new number this will be removed so all rectangles will be removed
  parentDiv.id = "parent";

  //basic style will be changed
  parentDiv.style.width = "100%";
  parentDiv.style.height = "auto";
  parentDiv.style.display = "flex";
  parentDiv.style.flexFlow = "row wrap";
  parentDiv.style.justifyContent = "center";

  container.appendChild(parentDiv); // add parent div to the container div in html
  const squareWidth = parentDiv.offsetWidth / number + "px";

  //create number of divs
  for (let i = 0; i < squareNumber; i++) {
    const div = document.createElement("div");
    //add diff color for odd rectangles
    i % 2 === 0
      ? (div.style.background = "rebeccapurple")
      : (div.style.background = "pink");

    div.style.width = squareWidth;
    div.style.height = squareWidth;

    parentDiv.appendChild(div);
  }
};

button.addEventListener("click", createDivs); // whenebver the user click on the button this listner will call createDivs method

createDivs(); // this function will be called only once the app is luanched
