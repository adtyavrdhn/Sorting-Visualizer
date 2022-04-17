import { mspeed, speedofAlgo, sizeofArr, towers_update_color, towers_sizes, towers_update, divs, tower_update_color, delay, swapColor, comparisonColor, defaultTowerColor, SortedColor } from "./main.js";

export async function Heap() {
    await sort(towers_sizes);
}
async function sort(arr) {
    var n = arr.length;

    for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
        await heapify(arr, n, i);

    for (var i = n - 1; i > 0; i--) {
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        towers_update_color(divs[0], divs[i], swapColor);
        await delay(mspeed - speedofAlgo);
        towers_update(divs[0], divs[i]);

        towers_update_color(divs[0], divs[i], defaultTowerColor);
        await delay(mspeed - speedofAlgo);

        tower_update_color(divs[i], SortedColor);
        tower_update_color(divs[i], comparisonColor);


        await heapify(arr, i, 0);
        tower_update_color(divs[i], defaultTowerColor);
        tower_update_color(divs[i], SortedColor);
    }

    tower_update_color(divs[i], SortedColor);
}

async function heapify(arr, n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;


    if (l < n && arr[l] > arr[largest]) {
        if (largest != i) {
            tower_update_color(divs[largest], defaultTowerColor);
            await delay(mspeed - speedofAlgo);
        }
        largest = l;
        tower_update_color(divs[largest], swapColor);
    }



    if (r < n && arr[r] > arr[largest]) {
        if (largest != i) {
            tower_update_color(divs[largest], defaultTowerColor);
            await delay(mspeed - speedofAlgo);
        }
        largest = r;
        tower_update_color(divs[largest], swapColor);
    }



    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        towers_update_color(divs[i], divs[largest], swapColor);
        await delay(mspeed - speedofAlgo);
        towers_update(divs[i], divs[largest]);
        towers_update_color(divs[i], divs[largest], defaultTowerColor);
        await heapify(arr, n, largest);
    }
}
