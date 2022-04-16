import { sizeofArr, towers_sizes, towers_update_color, tower_update_color, towers_update, swapColor, swapFailColor, comparisonColor, divs, delay, defaultTowerColor } from './main.js'
export async function InsertionSort() {
    for (let j = 0; j < sizeofArr; j++) {
        tower_update_color(divs[j], "yellow");//Color update
        await delay(5);
        let key = towers_sizes[j];
        let i = j - 1;
        while (i >= 0 && towers_sizes[i] > key) {

            towers_update_color(divs[i], divs[i + 1], "red");
            await delay(5);

            towers_sizes[i + 1] = towers_sizes[i];

            towers_update(divs[i], divs[i + 1]);

            tower_update_color(divs[i], "blue");//Color update
            await delay(5);
            if (i == (j - 1)) {
                tower_update_color(divs[i + 1], "yellow");//Color update
                await delay(5);
            }
            else {
                tower_update_color(divs[i + 1], "blue");//Color update
                await delay(5);
            }
            i -= 1;
        }
        towers_sizes[i + 1] = key;

        for (let t = 0; t < j; t++) {
            tower_update_color(divs[t], "green");//Color update
            await delay(5);
        }
    }
    tower_update_color(divs[sizeofArr - 1], "green");//Color update
    await delay(5);

}