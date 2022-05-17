/* eslint-disable */
import "bootstrap";
import "./style.css";

const btn = document.querySelector("button");
btn.addEventListener("click", function hola() {
  const clases = ["♦", "♥", "♠", "♣"];

  let index = Math.floor(Math.random() * clases.length);
  let newClass = clases[index];

  var carta = document.getElementById("carta");
  if (newClass === "♦" || newClass === "♥") {
    carta.className = "rojo";
  } else {
    carta.className = "negro";
  }
  document.getElementById("uno").innerHTML = newClass;
  document.getElementById("tres").innerHTML = newClass;
  const number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let randomNumber = Math.floor(Math.random() * number.length);
  let newNumber = number[randomNumber];
  document.getElementById("dos").innerHTML = newNumber;
});
