// Set the date we're counting down to
var countDownDate = new Date("Feb 22, 2022 10:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="days"
  document.getElementById("days").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // Removing the elemnts when the paticular variable is 0
  if (days == 0) {
    document.getElementById("days").innerHTML =
      hours + "h " + minutes + "m " + seconds + "s ";
  }

  if (hours == 0) {
    document.getElementById("days").innerHTML = minutes + "m " + seconds + "s ";
  }

  if (minutes == 0 && hours == 0) {
    document.getElementById("days").innerHTML = seconds + "s ";
  }

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML =
      "IT'S OUT ALREADY GO AND PLAY IT!!!!!";
  }
}, 1000);
