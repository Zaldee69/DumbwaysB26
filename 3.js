let n = 5;
let tamp1 = "DUMBWAYSIDUJIAN";
let tamp2 = tamp1.split("");
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    string += "A";
  }
  string += "\n";
}
console.log(string);
