$(function () {
  let flag = 1;

  $("#a1").click(function () {
    if (flag == 1) {
      $("#a1").text("X");
      $("#a1").val("X");
      $("#a1").prop("disabled", true);
      flag -= 1;
      checking();
    } else {
      $("#a1").text("O");
      $("#a1").val("O");
      $("#a1").prop("disabled", true);
      flag += 1;
      checking();
    }
  });
  $("#a2").click(function () {
    if (flag == 1) {
      $("#a2").text("X");
      $("#a2").val("X");
      $("#a2").prop("disabled", true);
      flag -= 1;
      checking();
    } else {
      $("#a2").text("O");
      $("#a2").val("O");
      $("#a2").prop("disabled", true);
      flag += 1;
      checking();
    }
  });
  $("#a3").click(function () {
    if (flag == 1) {
      $("#a3").text("X");
      $("#a3").val("X");
      $("#a3").prop("disabled", true);
      flag -= 1;
      checking();
    } else {
      $("#a3").text("O");
      $("#a3").val("O");
      $("#a3").prop("disabled", true);
      flag += 1;
      checking();
    }
  });
  $("#a4").click(function () {
    if (flag == 1) {
      $("#a4").text("X");
      $("#a4").val("X");
      $("#a4").prop("disabled", true);
      flag -= 1;
      checking();
    } else {
      $("#a4").text("O");
      $("#a4").val("O");
      $("#a4").prop("disabled", true);
      flag += 1;
      checking();
    }
  });
  $("#a5").click(function () {
    if (flag == 1) {
      $("#a5").text("X");
      $("#a5").val("X");
      $("#a5").prop("disabled", true);
      flag -= 1;
      checking();
    } else {
      $("#a5").text("O");
      $("#a5").val("O");
      $("#a5").prop("disabled", true);
      flag += 1;
      checking();
    }
  });
  $("#a6").click(function () {
    if (flag == 1) {
      $("#a6").text("X");
      $("#a6").val("X");
      $("#a6").prop("disabled", true);
      flag -= 1;
      checking();
    } else {
      $("#a6").text("O");
      $("#a6").val("O");
      $("#a6").prop("disabled", true);
      flag += 1;
      checking();
    }
  });
  $("#a7").click(function () {
    if (flag == 1) {
      $("#a7").text("X");
      $("#a7").val("X");
      $("#a7").prop("disabled", true);
      flag -= 1;
      checking();
    } else {
      $("#a7").text("O");
      $("#a7").val("O");
      $("#a7").prop("disabled", true);
      flag += 1;
      checking();
    }
  });
  $("#a8").click(function () {
    if (flag == 1) {
      $("#a8").text("X");
      $("#a8").val("X");
      $("#a8").prop("disabled", true);
      flag -= 1;
      checking();
    } else {
      $("#a8").text("O");
      $("#a8").val("O");
      $("#a8").prop("disabled", true);
      flag += 1;
      checking();
    }
  });
  $("#a9").click(function () {
    if (flag == 1) {
      $("#a9").text("X");
      $("#a9").val("X");
      $("#a9").prop("disabled", true);
      flag -= 1;
      checking();
    } else {
      $("#a9").text("O");
      $("#a9").val("O");
      $("#a9").prop("disabled", true);
      flag += 1;
      checking();
    }
  });

  $("#button").click(function () {
    location.reload();
    $("#a1").val("");
    $("#a2").val("");
    $("#a3").val("");
    $("#a4").val("");
    $("#a5").val("");
    $("#a6").val("");
    $("#a7").val("");
    $("#a8").val("");
    $("#a9").val("");
  });
  function checking() {
    if (
      $("#a1").val() == "X" &&
      $("#a2").val() == "X" &&
      $("#a3").val() == "X"
    ) {
      $("#result").text("Player X won");
      $("#a4").prop("disabled", true);
      $("#a5").prop("disabled", true);
      $("#a6").prop("disabled", true);
      $("#a7").prop("disabled", true);
      $("#a8").prop("disabled", true);
      $("#a9").prop("disabled", true);
      alert("GAME OVER!!  ***Player X won***");
    } else if (
      $("#a4").val() == "X" &&
      $("#a5").val() == "X" &&
      $("#a6").val() == "X"
    ) {
      $("#result").text("Player X won");
      $("#a1").prop("disabled", true);
      $("#a2").prop("disabled", true);
      $("#a3").prop("disabled", true);
      $("#a7").prop("disabled", true);
      $("#a8").prop("disabled", true);
      $("#a9").prop("disabled", true);
      alert("GAME OVER!!  ***Player X won***");
    } else if (
      $("#a7").val() == "X" &&
      $("#a8").val() == "X" &&
      $("#a9").val() == "X"
    ) {
      $("#result").text("Player X won");
      $("#a1").prop("disabled", true);
      $("#a2").prop("disabled", true);
      $("#a3").prop("disabled", true);
      $("#a4").prop("disabled", true);
      $("#a5").prop("disabled", true);
      $("#a6").prop("disabled", true);
      alert("GAME OVER!!  ***Player X won***");
    } else if (
      $("#a1").val() == "X" &&
      $("#a4").val() == "X" &&
      $("#a7").val() == "X"
    ) {
      $("#result").text("Player X won");
      $("#a2").prop("disabled", true);
      $("#a3").prop("disabled", true);
      $("#a5").prop("disabled", true);
      $("#a6").prop("disabled", true);
      $("#a8").prop("disabled", true);
      $("#a9").prop("disabled", true);
      alert("GAME OVER!!  ***Player X won***");
    } else if (
      $("#a2").val() == "X" &&
      $("#a5").val() == "X" &&
      $("#a8").val() == "X"
    ) {
      $("#result").text("Player X won");
      $("#a1").prop("disabled", true);
      $("#a3").prop("disabled", true);
      $("#a4").prop("disabled", true);
      $("#a6").prop("disabled", true);
      $("#a7").prop("disabled", true);
      $("#a9").prop("disabled", true);
      alert("GAME OVER!!  ***Player X won***");
    } else if (
      $("#a3").val() == "X" &&
      $("#a6").val() == "X" &&
      $("#a9").val() == "X"
    ) {
      $("#result").text("Player X won");
      $("#a1").prop("disabled", true);
      $("#a2").prop("disabled", true);
      $("#a4").prop("disabled", true);
      $("#a5").prop("disabled", true);
      $("#a7").prop("disabled", true);
      $("#a8").prop("disabled", true);
      alert("GAME OVER!!  ***Player X won***");
    } else if (
      $("#a3").val() == "X" &&
      $("#a5").val() == "X" &&
      $("#a7").val() == "X"
    ) {
      $("#result").text("Player X won");
      $("#a1").prop("disabled", true);
      $("#a2").prop("disabled", true);
      $("#a4").prop("disabled", true);
      $("#a6").prop("disabled", true);
      $("#a8").prop("disabled", true);
      $("#a9").prop("disabled", true);
      alert("GAME OVER!!  ***Player X won***");
    } else if (
      $("#a1").val() == "X" &&
      $("#a5").val() == "X" &&
      $("#a9").val() == "X"
    ) {
      $("#result").text("Player X won");
      $("#a2").prop("disabled", true);
      $("#a3").prop("disabled", true);
      $("#a4").prop("disabled", true);
      $("#a6").prop("disabled", true);
      $("#a7").prop("disabled", true);
      $("#a8").prop("disabled", true);
      alert("GAME OVER!!  ***Player X won***");
    } else if (
      $("#a1").val() == "O" &&
      $("#a2").val() == "O" &&
      $("#a3").val() == "O"
    ) {
      $("#result").text("Player O won");
      $("#a4").prop("disabled", true);
      $("#a5").prop("disabled", true);
      $("#a6").prop("disabled", true);
      $("#a7").prop("disabled", true);
      $("#a8").prop("disabled", true);
      $("#a9").prop("disabled", true);
      alert("GAME OVER!!  ***Player O won***");
    } else if (
      $("#a4").val() == "O" &&
      $("#a5").val() == "O" &&
      $("#a6").val() == "O"
    ) {
      $("#result").text("Player O won");
      $("#a1").prop("disabled", true);
      $("#a2").prop("disabled", true);
      $("#a3").prop("disabled", true);
      $("#a7").prop("disabled", true);
      $("#a8").prop("disabled", true);
      $("#a9").prop("disabled", true);
      alert("GAME OVER!!  ***Player O won***");
    } else if (
      $("#a7").val() == "O" &&
      $("#a8").val() == "O" &&
      $("#a9").val() == "O"
    ) {
      $("#result").text("Player O won");
      $("#a1").prop("disabled", true);
      $("#a2").prop("disabled", true);
      $("#a3").prop("disabled", true);
      $("#a4").prop("disabled", true);
      $("#a5").prop("disabled", true);
      $("#a6").prop("disabled", true);
      alert("GAME OVER!!  ***Player O won***");
    } else if (
      $("#a1").val() == "O" &&
      $("#a4").val() == "O" &&
      $("#a7").val() == "O"
    ) {
      $("#result").text("Player O won");
      $("#a2").prop("disabled", true);
      $("#a3").prop("disabled", true);
      $("#a5").prop("disabled", true);
      $("#a6").prop("disabled", true);
      $("#a8").prop("disabled", true);
      $("#a9").prop("disabled", true);
      alert("GAME OVER!!  ***Player O won***");
    } else if (
      $("#a2").val() == "O" &&
      $("#a5").val() == "O" &&
      $("#a8").val() == "O"
    ) {
      $("#result").text("Player O won");
      $("#a1").prop("disabled", true);
      $("#a3").prop("disabled", true);
      $("#a4").prop("disabled", true);
      $("#a6").prop("disabled", true);
      $("#a7").prop("disabled", true);
      $("#a9").prop("disabled", true);
      alert("GAME OVER!!  ***Player O won***");
    } else if (
      $("#a3").val() == "O" &&
      $("#a6").val() == "O" &&
      $("#a9").val() == "O"
    ) {
      $("#result").text("Player O won");
      $("#a1").prop("disabled", true);
      $("#a2").prop("disabled", true);
      $("#a4").prop("disabled", true);
      $("#a5").prop("disabled", true);
      $("#a7").prop("disabled", true);
      $("#a8").prop("disabled", true);
      alert("GAME OVER!!  ***Player O won***");
    } else if (
      $("#a3").val() == "O" &&
      $("#a5").val() == "O" &&
      $("#a7").val() == "O"
    ) {
      $("#result").text("Player O won");
      $("#a1").prop("disabled", true);
      $("#a2").prop("disabled", true);
      $("#a4").prop("disabled", true);
      $("#a6").prop("disabled", true);
      $("#a8").prop("disabled", true);
      $("#a9").prop("disabled", true);
      alert("GAME OVER!!  ***Player O won***");
    } else if (
      $("#a1").val() == "O" &&
      $("#a5").val() == "O" &&
      $("#a9").val() == "O"
    ) {
      $("#result").text = "Player O won";
      $("#a2").prop("disabled", true);
      $("#a3").prop("disabled", true);
      $("#a4").prop("disabled", true);
      $("#a6").prop("disabled", true);
      $("#a7").prop("disabled", true);
      $("#a8").prop("disabled", true);
      alert("GAME OVER!!  ***Player O won***");
    } else if (
      ($("#a1").val() == "X" || $("#a1").val() == "O") &&
      ($("#a2").val() == "X" || $("#a2").val() == "O") &&
      ($("#a3").val() == "X" || $("#a3").val() == "O") &&
      ($("#a4").val() == "X" || $("#a4").val() == "O") &&
      ($("#a5").val() == "X" || $("#a5").val() == "O") &&
      ($("#a6").val() == "X" || $("#a6").val() == "O") &&
      ($("#a7").val() == "X" || $("#a7").val() == "O") &&
      ($("#a8").val() == "X" || $("#a8").val() == "O") &&
      ($("#a9").val() == "X" || $("#a9").val() == "O")
    ) {
      $("#result").text("Match Tie");
      alert("GAME OVER!!  ***Match Tie*** Let's Play TieBreaker");
    } else {
      if (flag == 1) {
        $("#result").text("Player X Turn");
      } else {
        $("#result").text("Player O Turn");
      }
    }
  }
});
