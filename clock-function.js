const secondHand = document.querySelector(".sec");
const minHand = document.querySelector(".min");
const hourHand = document.querySelector(".hour");

function clock(){
    const now = new Date();

    const getSeconds = now.getSeconds();
    const setSeconds = ((getSeconds / 60) * 360) + 90;
    if(setSeconds == 360) secondHand.style.transition = "0s";
    secondHand.style.transform = `rotate(${setSeconds}deg)`;

    const getMinutes = now.getMinutes();
    const setMinutes = ((getMinutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${setMinutes}deg)`;

    const getHours = now.getHours();
    const setHours = ((getHours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${setHours}deg)`;
}

setInterval(clock, 1000);