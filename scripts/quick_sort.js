import { sizeofArr, towers_update_color, towers_sizes, towers_update, divs, tower_update_color } from "./main.js";

export function Quick() {

    quick_sort(0, sizeofArr - 1);

    // enable_buttons();
}

export async function quick_partition(start, end) {
    var i = start + 1;
    var piv = towers_sizes[start];//make the first element as pivot element.
    tower_update_color(divs[start], "yellow");//Color update

    for (var j = start + 1; j <= end; j++) {
        //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
        if (towers_sizes[j] < piv) {
            tower_update_color(divs[j], "yellow");//Color update

            // div_update(divs[i], div_sizes[i], "red");//Color update
            // div_update(divs[j], div_sizes[j], "red");//Color update
            towers_update_color(divs[i], divs[j], "red");

            var temp = towers_sizes[i];
            towers_sizes[i] = towers_sizes[j];
            towers_sizes[j] = temp;

            // div_update(divs[i], div_sizes[i], "red");//Height update
            // div_update(divs[j], div_sizes[j], "red");//Height update

            towers_update(divs[i], divs[j]);

            // div_update(divs[i], div_sizes[i], "blue");//Height update
            // div_update(divs[j], div_sizes[j], "blue");//Height update

            towers_update_color(divs[i], divs[j], "blue");

            i += 1;
        }
    }
    towers_update_color(divs[start], divs[i - 1], "red");//Color update
    // div_update(divs[i - 1], div_sizes[i - 1], "red");//Color update

    var temp = towers_sizes[start];//put the pivot element in its proper place.
    towers_sizes[start] = towers_sizes[i - 1];
    towers_sizes[i - 1] = temp;

    towers_update(divs[start], divs[i - 1]);//Height update
    // div_update(divs[i - 1], div_sizes[i - 1], "red");//Height update

    for (var t = start; t <= i; t++) {
        tower_update_color(divs[t], "green");//Color update
    }

    return i - 1;//return the position of the pivot
}

function quick_sort(start, end) {
    if (start < end) {
        //stores the position of pivot element
        var piv_pos = quick_partition(start, end);
        quick_sort(start, piv_pos - 1);//sorts the left side of pivot.
        quick_sort(piv_pos + 1, end);//sorts the right side of pivot.
    }
}