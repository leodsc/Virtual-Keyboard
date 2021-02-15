export {keys, keysImg};

const keys = {
    isCapsOn: false, // caps status (on = true, off = false)
    isLetter: function(key){
        return key.match(/[a-zA-Z]/g) != null && key.length == 1 ? true : false; // verify if the digit is a letter
    },
    changeCapsStatus: function() {
        this.isCapsOn = !this.isCapsOn; // when called, change the caps status
        this.capsLightEffect(this.isCapsOn); // turn on/off the caps light
        for (const key in this){
            if (this[key].textContent != undefined && Object.keys(keysImg).indexOf(this[key].id) == -1){
                // verify if the clicked key exists in the virtual keyboard and if it is not a special char
                if (this.isCapsOn){ // changes each key to uppercase/lowercase
                    this[key].textContent = this[key].textContent.toUpperCase();
                } else {
                    this[key].textContent = this[key].textContent.toLowerCase();
                }
            }
        }
    },
    changeBg: function(evt, color, opacity) { // change key background color
        if (Object.keys(keysImg).indexOf(evt.key) !== -1){
            this[evt.key].style.background = color;
            this[evt.key].style.opacity = opacity;
        } else if (Object.keys(this).indexOf(evt.key.toLowerCase()) !== -1){
            this[evt.key.toLowerCase()].style.background = color;
            this[evt.key.toLowerCase()].style.opacity = opacity;
        }
    },
    capsLightEffect: function(on){ // turn on/off caps light
        const capsLight = document.querySelector("#caps-light");
        on ? capsLight.className = "caps-light-on" : 
        capsLight.className = "caps-light-off";
    },
    verifyCaps: function(key){ // each time a key is pressed, it is verified if it is in uppercase or not
        if (key == "CapsLock" || // capslock clicked
        (key == key.toUpperCase() && !this.isCapsOn && this.isLetter(key)) || // capslock on
        (key == key.toLowerCase() && this.isCapsOn && this.isLetter(key)) &&
        key != "Shift") { // capslock off
            this.changeCapsStatus();
        }
    }
};

const keysImg = {
    "Backspace": "backspace_img.png",
    "Enter": "enter_img.png",
    "CapsLock": "capslock_img.png",
    "Shift": "shift_img.png",
    " ": '',
}