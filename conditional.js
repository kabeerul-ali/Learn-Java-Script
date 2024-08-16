let hour = new Date().getHours();
console.log(hour)

if (hour < 12) {
  document.getElementById("greeting").innerHTML = "Good morning!";
} else if (hour < 18) {
  document.getElementById("greeting").innerHTML = "Good afternoon!";
} else {
  document.getElementById("greeting").innerHTML = "Good evening!";
}