export { clickEffect };
import { keys } from './keysObj.js';

function clickEffect(evt) { // create the click effect in buttons
    const area = document.querySelector("textarea");
    const target = getButton(evt); 
    // special chars has imgs as childs, this function prevents a bug when clicking in the img and not in the button, changing
    // the entire background
    target.style.background = "black";
    target.style.opacity = "50%";
    setTimeout(() => {
        target.style.background = "#69c6e6";
        target.style.opacity = "100%";
    }, 200);
    editTextArea(target, area);
}

function getButton(evt) {
    if (evt.target.tagName == "BUTTON") {
        return evt.target;
    } else {
        return evt.target.parentElement;
    }
}

function editTextArea(target, area) { // add content to the text area depending on which button was clicked
    if (target.id != "") {
        if (target.id == "Backspace" && area.value.length != 0) {
            let textArray = Array.from(area.value);
            textArray.pop();
            area.value = textArray.join("");
        } else if (target.id == "CapsLock") {
            keys.verifyCaps(target.id);
        } else if (target.id == "Enter") {
            area.value += "\n";
        } else if (target.id == "space-bar") {
            area.value += " ";
        }
    } else {
        area.value += target.textContent;
    }
}
