import { keysImg, keys } from './keysObj.js';
export { createSpecialChar };


function createSpecialChar(button, specialCharIndex) {
    let specialChar = Object.keys(keysImg)[specialCharIndex];
    if (specialChar == "Shift") {
        button.textContent = "Shift";
        button.id = specialChar;
    } else {
        const img = document.createElement("img");
        if (specialChar != ' ') {
            img.src = `images/${keysImg[specialChar]}`;
        }
        img.className = specialChar;
        button.appendChild(img);
        button.style.backgroundRepeat = "no-repeat";
        button.id = specialChar;
        if (specialChar == "Backspace" || specialChar == "Enter" || specialChar == "CapsLock") {
            if (specialChar == "CapsLock") {
                button.classList.add("caps");
                const capsLight = document.createElement("div");
                capsLight.id = "caps-light";
                button.appendChild(capsLight);
            }
        } else if (specialChar == " ") {
            button.id = "space-bar";
        }
    }
    keys[specialChar] = button;
}    