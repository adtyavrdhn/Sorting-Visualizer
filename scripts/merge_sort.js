import { mspeed, speedofAlgo, sizeofArr, tower_update_height, tower_update_color, towers_sizes, towers_update_color, towers_update, swapColor, swapFailColor, comparisonColor, divs, delay, defaultTowerColor, SortedColor, lookedatcolor } from "./main.js";

export async function Merge() {
    await mergeSort(towers_sizes, 0, sizeofArr - 1);
}
export async function merge(arr, l, m, r) {
    var n1 = m - l + 1;
    var n2 = r - m;

    var L = new Array(n1);
    var R = new Array(n2);

    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];


    var i = 0;

    var j = 0;

    var k = l;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            tower_update_color(divs[k], lookedatcolor);
            towers_sizes[k] = L[i];
            await delay(mspeed - speedofAlgo);
            if (sizeofArr > 32)
                divs[k].style.height = `${0.3 * L[i]}rem`;
            else
                divs[k].style.height = `${L[i]}rem`;
            i++;

        }
        else {
            tower_update_color(divs[k], lookedatcolor);
            await delay(mspeed - speedofAlgo);
            towers_sizes[k] = R[j];
            if (sizeofArr > 32)
                divs[k].style.height = `${0.3 * R[j]}rem`;
            else divs[k].style.height = `${R[j]}rem`;
            j++;
        }
        await delay(mspeed - speedofAlgo);
        k++;
    }

    while (i < n1) {
        tower_update_color(divs[k], lookedatcolor);
        towers_sizes[k] = L[i];
        if (sizeofArr > 32)
            divs[k].style.height = `${0.3 * L[i]}rem`;
        else divs[k].style.height = `${L[i]}rem`;
        i++;
        k++;
    }

    while (j < n2) {
        tower_update_color(divs[k], lookedatcolor);
        towers_sizes[k] = R[j];
        if (sizeofArr > 32)
            divs[k].style.height = `${0.3 * R[j]}rem`;
        else divs[k].style.height = `${R[j]}rem`;
        j++;
        k++;
    }

    let x = l;
    for (var t = 0; t < k; t++) {
        x++;
        tower_update_color(divs[x - 1], SortedColor);
    }
}

export async function mergeSort(arr, l, r) {
    if (l >= r) {
        return;
    }
    var m = l + parseInt((r - l) / 2);
    tower_update_color(divs[m], comparisonColor);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);

}