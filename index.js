const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
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

const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "?",
  "/",
  "`",
  "~",
];
let pass1El = document.getElementById("pass1");
let pass2El = document.getElementById("pass2");
let passwrd1 = "";
let passwrd2 = "";
let char = "";
document.getElementById("lengthTxtF").value = "4";
let passLng = 4;
let genBtn = document.getElementById("genPassBtn");
genBtn.addEventListener("click", genratePassword);
let clickS = 0;
let cilckedS = false;
let noSym = document.getElementById("noSymopt");
noSym.addEventListener("click", function () {
  clickS++;
});
let clickN = 0;
let cilckedN = false;
let noNum = document.getElementById("noNumopt");
noNum.addEventListener("click", function () {
  clickN++;
});

let pass1 = document.getElementById("pass1");

// Add click event listener to a button or element
document.getElementById("pass1").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pass1.textContent);
    console.log("Text copied to clipboard");
    // Optional: Show feedback to user (e.g., toast, alert)
    alert("Text copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
});

let pass2 = document.getElementById("pass2");

// Add click event listener to a button or element
document.getElementById("pass2").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(pass1.textContent);
    console.log("Text copied to clipboard");
    // Optional: Show feedback to user (e.g., toast, alert)
    alert("Text copied to clipboard!");
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
});

function checkNrS() {
  if (clickN % 2 != 0) {
    cilckedN = true;
  } else {
    cilckedN = false;
  }
  if (clickS % 2 != 0) {
    cilckedS = true;
  } else {
    cilckedS = false;
  }
}

function genratePassword() {
  passwrd1 = "";
  passwrd2 = "";
  char = "";
  document.getElementById("lengthTxtF").value = Math.floor(
    document.getElementById("lengthTxtF").value,
  );
  if (document.getElementById("lengthTxtF").value > 26) {
    document.getElementById("lengthTxtF").value = "26";
    passLng = 26;
  } else if (document.getElementById("lengthTxtF").value < 4) {
    document.getElementById("lengthTxtF").value = "4";
    passLng = 4;
  } else {
    passLng = document.getElementById("lengthTxtF").value;
  }
  checkNrS();
  //if none
  if (cilckedN && cilckedS) {
    for (let i = 0; i < passLng; i++) {
      passwrd1 += letters[Math.floor(Math.random() * letters.length)];
    }
    pass1El.textContent = passwrd1;
    for (let i = 0; i < passLng; i++) {
      passwrd2 += letters[Math.floor(Math.random() * letters.length)];
    }
    while (passwrd1 === passwrd2) {
      passwrd2 = "";
      for (let i = 0; i < passLng; i++) {
        passwrd2 += letters[Math.floor(Math.random() * letters.length)];
      }
    }
    pass2El.textContent = passwrd2;
  }

  //if s
  else if (cilckedN) {
    char = [...letters, ...symbols];
    for (let i = 0; i < passLng; i++) {
      passwrd1 += char[Math.floor(Math.random() * char.length)];
    }
    pass1El.textContent = passwrd1;
    for (let i = 0; i < passLng; i++) {
      passwrd2 += char[Math.floor(Math.random() * char.length)];
    }
    while (passwrd1 === passwrd2) {
      passwrd2 = "";
      for (let i = 0; i < passLng; i++) {
        passwrd2 += char[Math.floor(Math.random() * char.length)];
      }
    }
    pass2El.textContent = passwrd2;
  }
  //if n
  else if (cilckedS) {
    char = [...letters, ...numbers];
    for (let i = 0; i < passLng; i++) {
      passwrd1 += char[Math.floor(Math.random() * char.length)];
    }
    pass1El.textContent = passwrd1;
    for (let i = 0; i < passLng; i++) {
      passwrd2 += char[Math.floor(Math.random() * char.length)];
    }
    while (passwrd1 === passwrd2) {
      passwrd2 = "";
      for (let i = 0; i < passLng; i++) {
        passwrd2 += char[Math.floor(Math.random() * char.length)];
      }
    }
    pass2El.textContent = passwrd2;
  }
  //if s + n
  else {
    char = [...letters, ...numbers, ...symbols];
    for (let i = 0; i < passLng; i++) {
      passwrd1 += char[Math.floor(Math.random() * char.length)];
    }
    pass1El.textContent = passwrd1;
    for (let i = 0; i < passLng; i++) {
      passwrd2 += char[Math.floor(Math.random() * char.length)];
    }
    while (passwrd1 === passwrd2) {
      passwrd2 = "";
      for (let i = 0; i < passLng; i++) {
        passwrd2 += char[Math.floor(Math.random() * char.length)];
      }
    }
    pass2El.textContent = passwrd2;
  }
}
/*word length copy on click toogle nums and syms off */
