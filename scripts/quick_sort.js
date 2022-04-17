import { time_taken, mspeed, speedofAlgo, sizeofArr, towers_update_color, towers_sizes, towers_update, divs, tower_update_color, delay, swapColor, SortedColor, defaultTowerColor, comparisonColor, disablebtns, enablebtns } from "./main.js";

export async function Quick() {
    time_taken.textContent = "Time Taken: ";
    var startTime = performance.now();
    disablebtns();
    await quickSort(towers_sizes, 0, sizeofArr - 1);
    var endTime = performance.now();
    time_taken.textContent += `${(endTime - startTime).toPrecision(8)}` + " milliseconds";
    enablebtns();
}

async function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

async function partition(arr, low, high) {

    let pivot = arr[high];

    let i = (low - 1);

    tower_update_color(divs[high], comparisonColor);
    for (let j = low; j <= high - 1; j++) {

        if (arr[j] < pivot) {
            tower_update_color(divs[j], comparisonColor);
            i++;
            swap(arr, i, j);
            towers_update(divs[i], divs[j]);
            towers_update_color(divs[i], divs[j], swapColor);
            await delay(mspeed - speedofAlgo);
            towers_update_color(divs[i], divs[j], defaultTowerColor);
        }
    }
    swap(arr, i + 1, high);
    towers_update_color(divs[i + 1], divs[high], swapColor);
    tower_update_color(divs[i + 1], SortedColor);
    await delay(mspeed - speedofAlgo);
    tower_update_color(divs[high], defaultTowerColor);
    towers_update(divs[i + 1], divs[high]);


    for (let t = high; t >= i; t--) {
        tower_update_color(divs[t], SortedColor);
    }
    return (i + 1);
}


async function quickSort(arr, low, high) {
    if (low < high) {

        let pi = await partition(arr, low, high);
        await quickSort(arr, low, pi - 1);
        await quickSort(arr, pi + 1, high);
    }
}