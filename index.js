const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");
const a5 = document.getElementById("a5");
const a6 = document.getElementById("a6");
const a7 = document.getElementById("a7");
const a8 = document.getElementById("a8");
const a9 = document.getElementById("a9");
let b1 = a1.value;
let b2 = a2.value;
let b3 = a3.value;
let b4 = a4.value;
let b5 = a5.value;
let b6 = a6.value;
let b7 = a7.value;
let b8 = a8.value;
let b9 = a9.value;
let flag = 1;
let result = document.getElementById("result");
function checking() {
  if (b1 == "X" && b2 == "X" && b3 == "X") {
    result.innerHTML = "Player X won";
    a4.disable = true;
    a5.disable = true;
    a6.disable = true;
    a7.disable = true;
    a8.disable = true;
    a9.disable = true;
    window.alert("Player X won");
  } else if (b4 == "X" && b5 == "X" && b6 == "X") {
    result.innerHTML = "Player X won";
    a1.disable = true;
    a2.disable = true;
    a3.disable = true;
    a7.disable = true;
    a8.disable = true;
    a9.disable = true;
    window.alert("Player X won");
  } else if (b7 == "X" && b8 == "X" && b9 == "X") {
    result.innerHTML = "Player X won";
    a1.disable = true;
    a2.disable = true;
    a3.disable = true;
    a4.disable = true;
    a5.disable = true;
    a6.disable = true;
    window.alert("Player X won");
  } else if (b1 == "X" && b4 == "X" && b7 == "X") {
    result.innerHTML = "Player X won";
    a2.disable = true;
    a3.disable = true;
    a5.disable = true;
    a6.disable = true;
    a8.disable = true;
    a9.disable = true;
    window.alert("Player X won");
  } else if (b2 == "X" && b5 == "X" && b8 == "X") {
    result.innerHTML = "Player X won";
    a1.disable = true;
    a3.disable = true;
    a4.disable = true;
    a6.disable = true;
    a7.disable = true;
    a9.disable = true;
    window.alert("Player X won");
  } else if (b3 == "X" && b6 == "X" && b9 == "X") {
    result.innerHTML = "Player X won";
    a1.disable = true;
    a2.disable = true;
    a4.disable = true;
    a5.disable = true;
    a7.disable = true;
    a8.disable = true;
    window.alert("Player X won");
  } else if (b3 == "X" && b5 == "X" && b7 == "X") {
    result.innerHTML = "Player X won";
    a1.disable = true;
    a2.disable = true;
    a4.disable = true;
    a6.disable = true;
    a8.disable = true;
    a9.disable = true;
    window.alert("Player X won");
  } else if (b1 == "X" && b5 == "X" && b9 == "X") {
    result.innerHTML = "Player X won";
    a2.disable = true;
    a3.disable = true;
    a4.disable = true;
    a6.disable = true;
    a7.disable = true;
    a8.disable = true;
    window.alert("Player X won");
  } else if (b1 == "O" && b2 == "O" && b3 == "O") {
    result.innerHTML = "Player O won";
    a4.disable = true;
    a5.disable = true;
    a6.disable = true;
    a7.disable = true;
    a8.disable = true;
    a9.disable = true;
    window.alert("Player O won");
  } else if (b4 == "O" && b5 == "O" && b6 == "O") {
    result.innerHTML = "Player O won";
    a1.disable = true;
    a2.disable = true;
    a3.disable = true;
    a7.disable = true;
    a8.disable = true;
    a9.disable = true;
    window.alert("Player O won");
  } else if (b7 == "O" && b8 == "O" && b9 == "O") {
    result.innerHTML = "Player O won";
    a1.disable = true;
    a2.disable = true;
    a3.disable = true;
    a4.disable = true;
    a5.disable = true;
    a6.disable = true;
    window.alert("Player O won");
  } else if (b1 == "O" && b4 == "O" && b7 == "O") {
    result.innerHTML = "Player O won";
    a2.disable = true;
    a3.disable = true;
    a5.disable = true;
    a6.disable = true;
    a8.disable = true;
    a9.disable = true;
    window.alert("Player O won");
  } else if (b2 == "O" && b5 == "O" && b8 == "O") {
    result.innerHTML = "Player O won";
    a1.disable = true;
    a3.disable = true;
    a4.disable = true;
    a6.disable = true;
    a7.disable = true;
    a9.disable = true;
    window.alert("Player O won");
  } else if (b3 == "O" && b6 == "O" && b9 == "O") {
    result.innerHTML = "Player O won";
    a1.disable = true;
    a2.disable = true;
    a4.disable = true;
    a5.disable = true;
    a7.disable = true;
    a8.disable = true;
    window.alert("Player O won");
  } else if (b3 == "O" && b5 == "O" && b7 == "O") {
    result.innerHTML = "Player O won";
    a1.disable = true;
    a2.disable = true;
    a4.disable = true;
    a6.disable = true;
    a8.disable = true;
    a9.disable = true;
    window.alert("Player O won");
  } else if (b1 == "O" && b5 == "O" && b9 == "O") {
    result.innerHTML = "Player O won";
    a2.disable = true;
    a3.disable = true;
    a4.disable = true;
    a6.disable = true;
    a7.disable = true;
    a8.disable = true;
    window.alert("Player O won");
  } else if (
    (b1 == "X" || b1 == "O") &&
    (b2 == "X" || b2 == "O") &&
    (b3 == "X" || b3 == "O") &&
    (b4 == "X" || b4 == "O") &&
    (b5 == "X" || b5 == "O") &&
    (b6 == "X" || b6 == "O") &&
    (b7 == "X" || b7 == "O") &&
    (b8 == "X" || b8 == "O") &&
    (b9 == "X" || b9 == "O")
  ) {
    result.innerHTML = "Match Tie";
    window.alert("Match Tie");
  } else {
    if (flag == 1) {
      result.innerHTML = "Player X Turn";
    } else {
      result.innerHTML = "Player O Turn";
    }
  }
}
function reset() {
  location.reload();
  b1 = "";
  b2 = "";
  b3 = "";
  b4 = "";
  b5 = "";
  b6 = "";
  b7 = "";
  b8 = "";
  b9 = "";
}
function func1() {
  if (flag == 1) {
    a1.innerHTML = "X";
    b1 = "X";
    a1.disable = true;
    flag = 0;
  } else {
    a1.innerHTML = "O";
    b1 = "O";
    a1.disable = true;
    flag = 1;
  }
}
function func2() {
  if (flag == 1) {
    a2.innerHTML = "X";
    b2 = "X";
    a2.disable = true;
    flag = 0;
  } else {
    a2.innerHTML = "O";
    b2 = "o";
    a2.disable = true;
    flag = 1;
  }
}
function func3() {
  if (flag == 1) {
    a3.innerHTML = "X";
    b3 = "X";
    a3.disable = true;
    flag = 0;
  } else {
    a3.innerHTML = "O";
    b3 = "O";
    a3.disable = true;
    flag = 1;
  }
}
function func4() {
  if (flag == 1) {
    a4.innerHTML = "X";
    b4 = "X";
    a4.disable = true;
    flag = 0;
  } else {
    a4.innerHTML = "O";
    b4 = "O";
    a4.disable = true;
    flag = 1;
  }
}
function func5() {
  if (flag == 1) {
    a5.innerHTML = "X";
    b5 = "X";
    a5.disable = true;
    flag = 0;
  } else {
    a5.innerHTML = "O";
    b5 = "O";
    a5.disable = true;
    flag = 1;
  }
}
function func6() {
  if (flag == 1) {
    a6.innerHTML = "X";
    b6 = "X";
    a6.disable = true;
    flag = 0;
  } else {
    a6.innerHTML = "O";
    b6 = "O";
    a6.disable = true;
    flag = 1;
  }
}
function func7() {
  if (flag == 1) {
    a7.innerHTML = "X";
    b7 = "X";
    a7.disable = true;
    flag = 0;
  } else {
    a7.innerHTML = "O";
    b7 = "O";
    a7.disable = true;
    flag = 1;
  }
}
function func8() {
  if (flag == 1) {
    a8.innerHTML = "X";
    b8 = "X";
    a8.disable = true;
    flag = 0;
  } else {
    a8.innerHTML = "O";
    b8 = "O";
    a8.disable = true;
    flag = 1;
  }
}
function func9() {
  if (flag == 1) {
    a9.innerHTML = "X";
    b9 = "X";
    a9.disable = true;
    flag = 0;
  } else {
    a9.innerHTML = "O";
    b9 = "O";
    a9.disable = true;
    flag = 1;
  }
}
