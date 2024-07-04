// - - - @
// - - * @
// - $ * @
// & $ * @ 

function generatePattern(rows) {
    let pattern = "";
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows - i - 1; j++) {
        pattern += "    "; // Adding spaces
      }
      for (let k = 0; k <= i; k++) {
        if (k === i) {
          pattern += "@ ";
        } else {
          pattern += pattern.length === 0 ? "# " : "$ * ";
        }
      }
      if (i < rows - 1) {
        pattern += "\n";
      }
    }
    return pattern;
  }
  
  console.log(generatePattern(4));
  