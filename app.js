let tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

let notifybutton = document.getElementById("open_button");

notifybutton.addEventListener("click", () =>{
    tg.sendData("PONG");
    tg.HapticFeedback.impactOccurred('light');
});