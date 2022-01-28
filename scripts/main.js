import { createKeyboard } from "./createKeyboard.js";
import { keys } from "./keysObj.js";

(function initApp() { // initiate the virtual keyboard
  createKeyboard(); // call function to create the keyboard structure
  document.addEventListener("click", (evt) => { /* user just can write in the text area if it is
    selected */
    evt.target.id == "text" || evt.target.id == "key"
      // verify if the user left focus from the input
      ? (inputFocus = true)
      : (inputFocus = false);
  });
  document.addEventListener("keydown", changeKeyBgColor);
  document.addEventListener("keyup", changeKeyBgColor);

  const input = document.querySelector(".screen");
  input.focus();
  let inputFocus = true;

  function changeKeyBgColor(evt) { // change key background color
    if (evt.type == "keydown") { // just verify is caps was clicked in keydown
      keys.verifyCaps(evt.key);
      keys.changeBg(evt, "black", "50%"); // change the key color and opacity
    } else if ((evt.type == "keyup") || evt.key == "CapsLock") {
      keys.changeBg(evt, "#69c6e6", "100%");
    }
  }
})();
