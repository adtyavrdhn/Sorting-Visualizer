import { BubbleSort } from "./bubble_sort.js";
import { Heap } from "./heap_sort.js";
import { InsertionSort } from "./insertion_sort.js";
import { Merge } from "./merge_sort.js";
import { Quick } from "./quick_sort.js";
import { SelectionSort } from "./selection_sort.js";
import anime from '../anime-master/lib/anime.es.js';
///////////Selecting Elements///////////
////Containers
const root = document.querySelector(":root");
///////
////////////////Colors
export const swapFailColor = getComputedStyle(root).getPropertyValue(
  "--swap-failed-color"
);
export const swapColor = getComputedStyle(root).getPropertyValue("--swap-color");
export const SortedColor = getComputedStyle(root).getPropertyValue("--sorted-color");
export const comparisonColor = getComputedStyle(root).getPropertyValue(
  "--comparision-tower-color"
);
export const defaultTowerColor = getComputedStyle(root).getPropertyValue(
  "--default-tower-color"
);
export const lookedatcolor = getComputedStyle(root).getPropertyValue(
  "--lookedat-color"
);
////////////////
const towersContainer = document.querySelector(".towers-container");
const visualizerContainer = document.querySelector(".visualizer-container");
const btnContainer = document.querySelector(".btn-container");
/////////Buttons
const mergeSortbtn = document.querySelector(".mergesortbtn");
const selectionSortbtn = document.querySelector(".selectionsortbtn");
const insertionSortbtn = document.querySelector(".insertionsortbtn");
const heapSortbtn = document.querySelector(".heapsortbtn");
const bubbleSortbtn = document.querySelector(".bubblesortbtn");
const genarraybtn = document.querySelector(".generate-array");
const quickSortbtn = document.querySelector(".quicksortbtn");
////////Sections
const footer = document.querySelector(".footer");
//////////////////////////////////
///////////////////////Inputs
const sizeSlider = document.getElementById("size-slider");
const speedSlider = document.getElementById("speed-slider");
/////////////////////
///////////////////Variables
export let sizeofArr = sizeSlider.value;
export let speedofAlgo = 1;
export let divs = [];
export let towers_sizes = [];
export let mspeed = 450;
export const delay = (ms) => new Promise((res) => setTimeout(res, ms));
/////////////////////
function initialSetup() {
  genArray(sizeofArr);
}
initialSetup();
////////////////////Rendering Divs
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
  divs = [];
  towersContainer.innerHTML = "";
  towers_sizes.forEach(function (ele) {
    const tower = document.createElement("div");
    divs.push(tower);
    if (size > 32) tower.style.height = `${0.35 * ele}rem`;
    else tower.style.height = `${ele}rem`;
    tower.classList.add("tower");
    towersContainer.appendChild(tower);
  });

}

//////////// Updating
function changeSize(e) {
  sizeofArr = this.value;
  towersContainer.innerHTML = "";
  genArray(sizeofArr);
}
function changeSpeed(e) {
  speedofAlgo = this.value;
}
export async function towers_update(tower_1, tower_2) {
  let height = tower_2.style.height;
  tower_2.style.height = tower_1.style.height;
  tower_1.style.height = height;
  await delay(5)
}
export async function towers_update_color(tower_1, tower_2, color) {
  // console.log("here to update color");
  await delay(100)
  tower_2.style.backgroundColor = tower_1.style.backgroundColor = color;
  await delay(100)
}
export async function tower_update_color(tower, color) {
  await delay(105)
  tower.style.backgroundColor = color;
  await delay(5);
}
export async function tower_update_height(tower, height) {
  await delay(5)
  tower.style.height = `${height}rem`;
  await delay(5)
}
export function disablebtns() {
  mergeSortbtn.disabled = true;
  selectionSortbtn.disabled = true;
  insertionSortbtn.disabled = true;
  heapSortbtn.disabled = true;
  bubbleSortbtn.disabled = true;
  genarraybtn.disabled = true;
  quickSortbtn.disabled = true;
  sizeSlider.disabled = true;
}
export function enablebtns() {
  mergeSortbtn.disabled = false;
  selectionSortbtn.disabled = false;
  insertionSortbtn.disabled = false;
  heapSortbtn.disabled = false;
  bubbleSortbtn.disabled = false;
  genarraybtn.disabled = false;
  quickSortbtn.disabled = false;
  sizeSlider.disabled = false;
}
////////////////////Event Listeners
sizeSlider.addEventListener("input", changeSize);
speedSlider.addEventListener("input", changeSpeed);
genarraybtn.addEventListener("click", genNewArray);
bubbleSortbtn.addEventListener("click", BubbleSort);
insertionSortbtn.addEventListener("click", InsertionSort);
mergeSortbtn.addEventListener("click", Merge);
selectionSortbtn.addEventListener("click", SelectionSort);
quickSortbtn.addEventListener("click", Quick);
heapSortbtn.addEventListener("click", Heap);

////////////////////// Animations
///// Used: https://codepen.io/xoihazard/pen/QJVEJj by xoihazard
const random_char = () => {
  const possible = "0123456789";
  return possible.charAt(Math.floor(Math.random() * possible.length));
};

const mask = (chars, progress) => {
  const masked = [];

  for (let i = 0; i < chars.length; i++) {
    const position = (i + 1) / chars.length;
    if (position > progress) {
      masked.push(random_char());
    } else {
      masked.push(chars[i]);
    }
  }

  return masked.join('');
};

const shuffle = el => {
  const chars = el.textContent.split('');

  const params = {
    progress: 0
  };

  const a = anime({
    targets: params,
    progress: 1,
    delay: 100,
    duration: 210,
    easing: 'easeInQuad',
    update: () => {
      el.textContent = mask(chars, params.progress);
    },
    complete: () => {
      el.classList.add('completed');
    }
  });

  el.onclick = () => {
    el.classList.remove('completed');
    a.restart();
  };
};
anime.speed = 0.17;
for (const el of document.querySelectorAll('.header')) {
  shuffle(el);
}