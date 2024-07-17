//switch case

let dayNum = 2;

switch (dayNum) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("Invalid day number");
}

const score = 44;
let grade;
switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 75:
    grade = "B";
    break;
  case score >= 60:
    grade = "C";
    break;
  case score >= 45:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log(`score is ${score}. so grade is ${grade}`);
