///////////Selecting Elements///////////
////Containers
const towersContainer = document.querySelector(".towers-container");
const visualizerContainer = document.querySelector(".visualizer-container");
/////////Buttons
const mergeSortbtn = document.querySelector(".mergesort");
const selectionSortbtn = document.querySelector(".selectionsort");
const insertionSortbtn = document.querySelector(".insertionsort");
const heapSortbtn = document.querySelector(".heapsort");
const bubbleSortbtn = document.querySelector(".bubblesort");
const genarraybtn = document.querySelector(".generate-array");
////////Sections
const footer = document.querySelector(".footer");
//////////////////////////////////
///////////////////////Inputs
const sizeSlider = document.getElementById("size-slider");
const speedSlider = document.getElementById("speed-slider");
/////////////////////
///////////////////Variables
let sizeofArr = sizeSlider.value;
let speedofAlgo = 1;
let divs = [];
let towers_sizes = [];
/////////////////////
function initialSetup() {
  genArray(sizeofArr);
}
initialSetup();
////////////////////Functions

function genNewArray() {
  genArray(sizeofArr);
}

function genArray(size) {
  towers_sizes = [];
  towers_sizes = Array.from(
    { length: size },
    () => 1 + Math.floor(Math.random() * size)
  );
  renderTowers(towers_sizes, size);
}
function renderTowers(towers_sizes, size) {
  towersContainer.innerHTML = "";
  towers_sizes.forEach(function (ele) {
    const tower = document.createElement("div");
    divs.push(tower);
    if (size > 32) tower.style.height = `${0.3 * ele}rem`;
    else tower.style.height = `${ele}rem`;
    tower.classList.add("tower");
    towersContainer.appendChild(tower);
  });
}
function changeSize(e) {
  sizeofArr = this.value;
  towersContainer.innerHTML = "";
  genArray(sizeofArr);
}
function changeSpeed(e) {
  speedofAlgo = this.value;
}
////////////////////Event Listeners
function dothis() {
  BubbleSort();
}
sizeSlider.addEventListener("input", changeSize);
speedSlider.addEventListener("input", changeSpeed);
genarraybtn.addEventListener("click", genNewArray);
bubbleSortbtn.addEventListener("click", dothis);
