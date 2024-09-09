/* eslint-disable no-console */
import "bootstrap";
import "./style.css";

window.onload = function() {
  function phrase() {
    let who = ["the dog", "my leg", "uncle", "The Traffic"];
    let what = ["slowed", "jammed up", "got shakey", "did not pick up"];
    let when = [
      "even though I was late",
      "right in time",
      "when I need it the most",
      "during my down time",
      "while I was so far"
    ];

    let part = Math.floor(Math.random() * who.length);

    return who[part] + " " + what[part] + " " + when[part];
  }

  // Ensure there is an element with the id 'message' in your HTML
  const messageElement = document.getElementById("message");
  if (messageElement) {
    messageElement.innerHTML = "<h1>Sorry I'm late but, " + phrase() + "</h1>";
  } else {
    console.log('Element with id "message" not found.');
  }
};
