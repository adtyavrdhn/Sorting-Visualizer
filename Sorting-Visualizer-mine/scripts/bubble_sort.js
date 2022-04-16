function BubbleSort() {
  console.log("here");
  for (let i = 0; i < sizeofArr - 1; i++) {
    for (let j = 0; j < sizeofArr - i - 1; j++) {
      //   div_update(divs[j], div_sizes[j], "yellow"); //Color update

      if (towers_sizes[j] > towers_sizes[j + 1]) {
        // div_update(divs[j], div_sizes[j], "red"); //Color update
        // div_update(divs[j + 1], div_sizes[j + 1], "red"); //Color update

        // let temp = towers_sizes[j];
        // towers_sizes[j] = towers_sizes[j + 1];
        // towers_sizes[j + 1] = temp;

        // div_update(divs[j], div_sizes[j], "red"); //Height update
        // div_update(divs[j + 1], div_sizes[j + 1], "red"); //Height update
        [towers_sizes[j], towers_sizes[j + 1]] = [
          towers_sizes[j + 1],
          towers_sizes[j],
        ];
        renderTowers(towers_sizes, sizeofArr);
      }
      //   div_update(divs[j], div_sizes[j], "blue"); //Color updat
    }
    // div_update(divs[j], div_sizes[j], "green"); //Color update
  }
  //   div_update(divs[0], div_sizes[0], "green"); //Color update

  //   enable_buttons();
}
