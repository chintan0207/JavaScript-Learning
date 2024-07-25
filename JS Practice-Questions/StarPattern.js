console.log("Star Pattern");

const simpleTringle = (row) => {
  for (let i = 1; i <= row; i++) {
    let s = "";
    for (let j = 1; j <= i; j++) {
      // s+= `${i}`;
      s += "* ";
    }
    console.log(s);
  }
};
// row=3 j<=i
// i=1 -> j=1 -> s="* "    console.log(s)
// i=2 -> j=1 -> s="* "
//        j=2 -> s="* * "  console.log(s)
// i=3 -> j=1 -> s="* "
//        j=2 -> s="* * "
//        j=3 -> s="* * * " console.log(s)

const regularTringle = (row) => {
  for (let i = 1; i <= row; i++) {
    let space = "";

    for (let s = row; s >= i; s--) {
      space += " ";
    }
    for (let j = 1; j <= i; j++) {
      space += "* ";
    }

    console.log(space);
  }
};

const oppositeSimpleTringle = (row) => {
  for (let i = row; i >= 1; i--) {
    let s = "";
    for (let j = 1; j <= i; j++) {
      s += "* ";
    }
    console.log(s);
  }
};

const aTringle = (row) => {
  for (let i = 1; i <= row; i++) {
    let line = "";
    for (let s = row; s >= i; s--) {
      line += "  ";
    }

    for (let j = 1; j <= i; j++) {
      line += " *";
    }

    console.log(line);
  }
};
// i=1, s=3  s>=i -> line = " "
//      s=2       -> line = "  "
//      s=1       -> line = "   "
// i=1, j=1  j<=i -> line = "     *"   console.log(line)   "     *"

// i=2, s=3  s>=i -> line = " "
//      s=2       -> line = "  "
// i=2, j=1  j<=i -> line = "   *"
//      j=2       -> line = "   * *"    console.log(line)  "     *"
//     "   * *"
// i=3, s=3  s>=i -> line = " "
// i=3, j=1  j<=i -> line = "  *"
//      j=2       -> line = "  * *"
//      j=3       -> line = "  * * *"   console.log(line)  "    *"
//                                                         "  * *"
//                                                         "* * *"

const oppositeRegularTringle = (row) => {
  for (let i = 1; i <= row; i++) {
    let line = "";
    for (let s = 1; s <= i; s++) {
      line += " ";
    }

    for (let j = row; j >= i; j--) {
      line += " *";
    }

    console.log(line);
  }
};

const zTringle = (row) => {
  for (let i = 1; i <= row; i++) {
    let line = "";
    for (let s = 1; s <= i; s++) {
      line += "  ";
    }

    for (let j = row; j >= i; j--) {
      line += " *";
    }

    console.log(line);
  }
};

simpleTringle(5);
console.log("");
oppositeSimpleTringle(5);
console.log("");
regularTringle(5);
console.log("");
oppositeRegularTringle(5);
console.log("");
aTringle(3);
console.log("");
zTringle(5);
