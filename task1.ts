const englishMarks: number = 80;
const urduMarks: number = 70;

const average: number = (englishMarks + urduMarks) / 2;

let grade: string;

if (average >= 80) {
  grade = "A";
} else if (average >= 70 && average < 80) {
  grade = "B";
} else if (average >= 60 && average < 70) {
  grade = "C";
} else if (average >= 50 && average < 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log(`Your grade is ${grade}`);
