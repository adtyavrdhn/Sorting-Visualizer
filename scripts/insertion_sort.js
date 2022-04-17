import { mspeed, speedofAlgo, sizeofArr, towers_sizes, towers_update_color, tower_update_color, towers_update, swapColor, swapFailColor, comparisonColor, divs, delay, defaultTowerColor, SortedColor, disablebtns, enablebtns } from './main.js'
export async function InsertionSort() {
    disablebtns();
    for (let j = 0; j < sizeofArr; j++) {
        tower_update_color(divs[j], comparisonColor);
        await delay(mspeed - speedofAlgo);
        let key = towers_sizes[j];
        let i = j - 1;
        while (i >= 0 && towers_sizes[i] > key) {

            towers_update_color(divs[i], divs[i + 1], swapColor);
            await delay(mspeed - speedofAlgo);

            towers_sizes[i + 1] = towers_sizes[i];

            towers_update(divs[i], divs[i + 1]);

            tower_update_color(divs[i], defaultTowerColor);
            await delay(mspeed - speedofAlgo);
            if (i == (j - 1)) {
                tower_update_color(divs[i + 1], comparisonColor);
                await delay(mspeed - speedofAlgo);
            }
            else {
                tower_update_color(divs[i + 1], defaultTowerColor);
                await delay(mspeed - speedofAlgo);
            }
            i -= 1;
        }
        towers_sizes[i + 1] = key;

        for (let t = 0; t < j; t++) {
            tower_update_color(divs[t], SortedColor);
            await delay(mspeed - speedofAlgo);
        }
    }
    tower_update_color(divs[sizeofArr - 1], SortedColor);
    await delay(mspeed - speedofAlgo);

    enablebtns();
}