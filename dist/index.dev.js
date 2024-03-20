"use strict";

var adviceQuote = document.getElementById("advice-quote");
var adviceId = document.getElementById("advice-id"); //We defined the API URL that we want to call.
//const url = "https://api.adviceslip.com";

var weatherOne = "04d68c6a1f4aa34e68ac1531712939b4";
var slip_id = Math.floor(Math.random() * 199);
var url = "https://api.adviceslip.com/advice/".concat(slip_id);
fetch(url).then(function (response) {
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}).then(function (data) {
  var numberedId = data.slip.id;
  var paragraph = data.slip.advice;
  adviceId.textContent = "ADVICE #".concat(numberedId);
  adviceQuote.textContent = "\"".concat(paragraph, "\"");
})["catch"](function (error) {
  console.error("Error:", error);
}); // my url =	https://api.adviceslip.com/advice/{slip_id}