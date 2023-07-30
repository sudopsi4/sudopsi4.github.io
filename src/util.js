export function randomLetter() {
    const letters = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  
    return letters[Math.floor(Math.random() * 26)];
  }

export function calculateGridItemsAndRows(gridItemWidth, minGridItemWidth, gridGap, gridPadding) {

    const availableWidth = window.innerWidth - gridPadding*2;
    const availableHeight = window.innerHeight - gridPadding*2;
  
    const minGridItems = Math.floor(availableWidth / (minGridItemWidth + gridGap));
    const maxGridItems = Math.floor(availableWidth / (gridItemWidth + gridGap));
    const gridItemsInRow = Math.min(minGridItems, maxGridItems);

    const minRows = Math.floor(availableHeight / (minGridItemWidth + gridGap));
    const maxRows = Math.floor(availableHeight / (gridItemWidth + gridGap));
    const numberOfRows = Math.min(minRows, maxRows);
  
    return { 'cols' : gridItemsInRow, 'rows' : numberOfRows };
  }
