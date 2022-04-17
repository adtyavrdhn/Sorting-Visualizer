import { disablebtns, lookedatcolor, speedofAlgo, sizeofArr, tower_update_color, towers_sizes, towers_update_color, towers_update, swapColor, swapFailColor, comparisonColor, divs, delay, defaultTowerColor, mspeed, SortedColor, enablebtns } from './main.js'

export async function BubbleSort() {
  disablebtns();
  console.log(towers_sizes);
  console.log(divs);
  for (let i = 0; i < sizeofArr - 1; i++) {
    for (var j = 0; j < sizeofArr - i - 1; j++) {
      towers_update_color(divs[j], divs[j + 1], comparisonColor);
      await delay(mspeed - speedofAlgo);
      if (towers_sizes[j] > towers_sizes[j + 1]) {
        [towers_sizes[j], towers_sizes[j + 1]] = [
          towers_sizes[j + 1],
          towers_sizes[j],
        ];
        towers_update_color(divs[j], divs[j + 1], swapColor);
        await delay(mspeed - speedofAlgo);
        towers_update(divs[j], divs[j + 1]);
      }
      else {
        towers_update_color(divs[j], divs[j + 1], swapFailColor);
        await delay(mspeed - speedofAlgo);
      }
      towers_update_color(divs[j], divs[j + 1], defaultTowerColor);
      await delay(mspeed - speedofAlgo);
    }
    tower_update_color(divs[j], SortedColor);
    await delay(mspeed - speedofAlgo);
  }
  tower_update_color(divs[0], SortedColor);
  await delay(mspeed - speedofAlgo);

  enablebtns();
}
