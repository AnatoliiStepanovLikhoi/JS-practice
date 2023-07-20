// const now = new Date();

let mode = "time";
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const output = document.getElementById("output");
const fullBtn = document.getElementById("full");
const dateBtn = document.getElementById("date");
const timeBtn = document.getElementById("time");

const bindMode = (name) => {
  return function () {
    mode = name;
    update();
  };
};

fullBtn.onclick = bindMode("full");

dateBtn.onclick = bindMode("date");

timeBtn.onclick = bindMode("time");

update();

setInterval(() => update(), 100);

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString() + "." + now.getMilliseconds();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return (
        now.toLocaleDateString() +
        "/" +
        now.toLocaleTimeString() +
        "/" +
        dayNames[now.getDay()]
      );
    default:
      return now.toLocaleTimeString();
  }
}

//Функція приймає рядок виду "DunYweMY48"
//та повертає "D+unY+weM+Y+48"

function transform(input) {
  const characters = input.split("");

  let result = characters
    .map((char) => (char === char.toLowerCase() ? char : char + "+"))
    .join("");

  return result;
}

console.log(transform("DunYweMY48"));

// функція приймає довільне число типу 5681
// та повертає рядок виду "5000+600+80+1"

function decompose(input) {
  return input
    .toString()
    .split("")
    .map((digit, index, array) => digit + "0".repeat(array.length - index - 1))
    .filter((segment) => segment > 0)
    .join("+");
}

console.log(decompose(5681));
