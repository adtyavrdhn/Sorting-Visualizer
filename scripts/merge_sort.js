import { sizeofArr, tower_update_color, towers_sizes, towers_update_color, towers_update, swapColor, swapFailColor, comparisonColor, divs, delay, defaultTowerColor } from "./main.js";

export function Merge() {

    merge_partition(0, sizeofArr - 1);

}

export async function MergeSort(start, mid, end) {
    let p = start, q = mid + 1;

    let Arr = [], k = 0;

    for (let i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = towers_sizes[q++];
            tower_update_color(divs[q - 1], "red");//Color update
            await delay(5);
        }
        else if (q > end) {
            Arr[k++] = towers_sizes[p++];
            tower_update_color(divs[p - 1], "red");//Color update
            await delay(5);
        }
        else if (towers_sizes[p] < towers_sizes[q]) {
            Arr[k++] = towers_sizes[p++];
            tower_update_color(divs[p - 1], "red");//Color update
            await delay(5);
        }
        else {
            Arr[k++] = towers_sizes[q++];
            tower_update_color(divs[q - 1], "red");//Color update
            await delay(5);
        }
    }

    for (var t = 0; t < k; t++) {
        towers_sizes[start++] = Arr[t];
        tower_update_color(divs[start - 1], "green");//Color update
        await delay(5);
    }
}

function merge_partition(start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        tower_update_color(divs[mid], "yellow");//Color update
        // await delay(5);

        merge_partition(start, mid);
        merge_partition(mid + 1, end);

        MergeSort(start, mid, end);
    }
}