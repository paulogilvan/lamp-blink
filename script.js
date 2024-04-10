let lamp = document.querySelector("#lamp");

const on = () => {
  lamp.src = "images/on.png";
}

const off = () => {
  lamp.src = "images/off.png";
}

function blink() {
  let interval = 0;
  let count = 0;
  while(count < 10) {
    interval += 300;
    setTimeout('lamp.src = "images/on.png";', interval);
    interval += 300;
    setTimeout('lamp.src = "images/off.png";', interval);
    count++;
  }
}