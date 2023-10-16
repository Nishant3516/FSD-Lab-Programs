var percentage = 0;

function updateProgressBar() {
  var password = $("#password").val();
  var length = password.length;

  // Reset the percentage and progress bar color
  percentage = 0;
  $(".progress-bar").css("background-color", "#ff9800");

  if (length < 6) {
    percentage = 0;
    $(".progress-bar").css("background-color", "#dd4b39");
  } else if (length < 8) {
    percentage = 20;
  } else if (length < 10) {
    percentage = 40;
  } else {
    percentage = 60;
  }

  // Check for character-set constraints
  if (password.match(/[a-z]/)) {
    percentage += 10;
  }
  if (password.match(/[A-Z]/)) {
    percentage += 10;
  }
  if (password.match(/\d/)) {
    percentage += 10;
  }
  if (password.match(/\W/) && password.match(/\D/)) {
    percentage += 10;
  }

  // Update the progress bar width
  $(".progress-bar").css("width", percentage + "%");
}

$(document).ready(function () {
  // Whenever the key is pressed, update the progress bar.
  $("#password").on("input", function () {
    updateProgressBar();
  });
});
