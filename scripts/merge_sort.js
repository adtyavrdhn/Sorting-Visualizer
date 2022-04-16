import { sizeofArr, tower_update_height, tower_update_color, towers_sizes, towers_update_color, towers_update, swapColor, swapFailColor, comparisonColor, divs, delay, defaultTowerColor } from "./main.js";

export function Merge() {
    // console.log("here");
    mergeSort(towers_sizes, 0, sizeofArr - 1);
}
function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    // Initial index of first subarray
    var i = 0;

    // Initial index of second subarray
    var j = 0;

    // Initial index of merged subarray
    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {

            towers_sizes[k] = L[i];
            if (sizeofArr > 32)
                divs[k].style.height = `${0.3 * L[i]}rem`;
            else
                divs[k].style.height = `${L[i]}rem`;
            i++;
        }
        else {
            towers_sizes[k] = R[j];
            if (sizeofArr > 32)
                divs[k].style.height = `${0.3 * R[j]}rem`;
            else divs[k].style.height = `${R[j]}rem`;
            j++;
        }
        k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        towers_sizes[k] = L[i];
        if (sizeofArr > 32)
            divs[k].style.height = `${0.3 * L[i]}rem`;
        else divs[k].style.height = `${L[i]}rem`;
        i++;
        k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        towers_sizes[k] = R[j];
        if (sizeofArr > 32)
            divs[k].style.height = `${0.3 * R[j]}rem`;
        else divs[k].style.height = `${R[j]}rem`;
        j++;
        k++;
    }
}

function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);

    console.log(towers_sizes);
}

