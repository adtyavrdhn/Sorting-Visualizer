import { time_taken, speedofAlgo, divs, delay, sizeofArr, towers_update, towers_update_color, tower_update_color, towers_sizes, mspeed, SortedColor, defaultTowerColor, comparisonColor, swapFailColor, swapColor, disablebtns, enablebtns } from "./main.js";

export async function SelectionSort() {
    time_taken.textContent = "Time Taken: ";
    var startTime = performance.now();
    disablebtns();
    for (var i = 0; i < sizeofArr - 1; i++) {
        await delay(mspeed - speedofAlgo);
        tower_update_color(divs[i], swapFailColor);//Color update

        var index_min = i;

        for (var j = i + 1; j < sizeofArr; j++) {

            tower_update_color(divs[j], comparisonColor);//Color update
            await delay(mspeed - speedofAlgo);
            if (towers_sizes[j] < towers_sizes[index_min]) {
                if (index_min != i) {
                    tower_update_color(divs[index_min], defaultTowerColor);//Color update
                    await delay(mspeed - speedofAlgo);
                }
                index_min = j;
                tower_update_color(divs[index_min], swapFailColor);//Color update
                await delay(mspeed - speedofAlgo);
            }
            else {
                tower_update_color(divs[j], defaultTowerColor);//Color update
                await delay(mspeed - speedofAlgo);
            }
        }

        if (index_min != i) {
            var temp = towers_sizes[index_min];
            towers_sizes[index_min] = towers_sizes[i];
            towers_sizes[i] = temp;

            towers_update_color(divs[index_min], divs[i], swapColor);
            await delay(mspeed - speedofAlgo);
            towers_update(divs[index_min], divs[i]);
            tower_update_color(divs[index_min], defaultTowerColor);//Color update
            await delay(mspeed - speedofAlgo);
        }
        tower_update_color(divs[i], SortedColor);//Color update
        await delay(mspeed - speedofAlgo);
    }
    tower_update_color(divs[i], SortedColor);//Color update
    await delay(mspeed - speedofAlgo);

    var endTime = performance.now();
    time_taken.textContent += `${(endTime - startTime).toPrecision(8)}` + " milliseconds";
    enablebtns();
}