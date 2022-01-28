import { keys } from './keysObj.js';
import { createSpecialChar } from './createSpecialChars.js';
import { clickEffect } from './click.js';

export function createKeyboard() {
    const keyWords = "1234567890!qwertyuiop!!asdfghjklç!zxcvbnm,.?!";
    // special char == !
    const keyboard = document.querySelector(".keyboard");
    var specialCharIndex = 0; // special chars are CapsLock, enter, space and shift

    for (let i = 0; i < keyWords.length; i++) {
        const button = document.createElement("button");
        button.className = "key";
        button.addEventListener("click", clickEffect);
        if (keyWords[i] == "!") {
            createSpecialChar(button, specialCharIndex);
            specialCharIndex++;
        } else {
            button.textContent = keyWords[i]; // add content of the key to the virtual keyboard button
            keys[button.textContent] = button; // adding button to the keys obj
        }
        keyboard.appendChild(button);
    };
};