import { sizeofArr, tower_update_color, towers_sizes, towers_update_color, towers_update, swapColor, swapFailColor, comparisonColor, divs, delay, defaultTowerColor } from './main.js'
export async function BubbleSort() {
  console.log(towers_sizes);
  console.log(divs);
  for (let i = 0; i < sizeofArr - 1; i++) {
    for (var j = 0; j < sizeofArr - i - 1; j++) {
      // console.log("here too");
      towers_update_color(divs[j], divs[j + 1], "yellow");
      await delay(5);
      if (towers_sizes[j] > towers_sizes[j + 1]) {
        [towers_sizes[j], towers_sizes[j + 1]] = [
          towers_sizes[j + 1],
          towers_sizes[j],
        ];
        towers_update_color(divs[j], divs[j + 1], "red");
        await delay(5);
        towers_update(divs[j], divs[j + 1]);
      }
      else {
        towers_update_color(divs[j], divs[j + 1], swapFailColor);
        await delay(5);
      }
      towers_update_color(divs[j], divs[j + 1], "blue");
    }
    tower_update_color(divs[j], "green");
  }
  tower_update_color(divs[0], "green");

}
