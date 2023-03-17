"use strict";
const englishMarks = 80;
const urduMarks = 70;
const average = (englishMarks + urduMarks) / 2;
let grade;
if (average >= 80) {
    grade = "A";
}
else if (average >= 70 && average < 80) {
    grade = "B";
}
else if (average >= 60 && average < 70) {
    grade = "C";
}
else if (average >= 50 && average < 60) {
    grade = "D";
}
else {
    grade = "F";
}
console.log(`Your grade is ${grade}`);
