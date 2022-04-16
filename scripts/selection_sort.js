import { divs, delay, sizeofArr, towers_update, towers_update_color, tower_update_color, towers_sizes } from "./main.js";

export async function SelectionSort() {

    for (var i = 0; i < sizeofArr - 1; i++) {
        await delay(5);
        tower_update_color(divs[i], "red");//Color update

        var index_min = i;

        for (var j = i + 1; j < sizeofArr; j++) {

            tower_update_color(divs[j], "yellow");//Color update
            await delay(5);
            if (towers_sizes[j] < towers_sizes[index_min]) {
                if (index_min != i) {
                    tower_update_color(divs[index_min], "blue");//Color update
                    await delay(5);
                }
                index_min = j;
                tower_update_color(divs[index_min], "red");//Color update
                await delay(5);
            }
            else {
                tower_update_color(divs[j], "blue");//Color update
                await delay(5);
            }
        }

        if (index_min != i) {
            var temp = towers_sizes[index_min];
            towers_sizes[index_min] = towers_sizes[i];
            towers_sizes[i] = temp;

            towers_update_color(divs[index_min], divs[i], "red");
            await delay(5);
            towers_update(divs[index_min], divs[i]);
            tower_update_color(divs[index_min], "blue");//Color update
            await delay(5);
        }
        tower_update_color(divs[i], "green");//Color update
        await delay(5);
    }
    tower_update_color(divs[i], "green");//Color update
    await delay(5);
}