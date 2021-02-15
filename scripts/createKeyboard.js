export { createKeyboard };
import { keys } from './keysObj.js';
import { createSpecialChar } from './createSpecialChars.js';
import { clickEffect } from './click.js';

function createKeyboard(){
    const keyWords = "1234567890!*qwertyuiop!*!asdfghjklç*!zxcvbnm,.?!"; 
    // * = new line, ! = special char
    const keyboardLines = Array.from(document.querySelector("#keyboard").children);
    var currentLine = keyboardLines[0];
    var specialCharIndex = 0; // special chars are CapsLock, enter, space and shift
    for (let i = 0; i < keyWords.length; i++){
        if (keyWords[i] == "*") {
            keyboardLines.shift(); // change to the next line when finished
            currentLine = keyboardLines[0];
        } else {
            const button = document.createElement("button");
            button.className = "key";
            button.addEventListener("click", clickEffect);
            currentLine.appendChild(button);
            if (keyWords[i] == "!") {
                createSpecialChar(button, specialCharIndex);
                specialCharIndex++;
            } else {
                button.textContent = keyWords[i]; // add content of the key to the virtual keyboard button
                keys[button.textContent] = button;
            }
        }
    };
};