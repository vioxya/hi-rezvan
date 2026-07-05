const dialog = document.getElementById("dialog");

const messages = [

"🍋 HII!!",

"🍋 HAPPY BIRTHDAY REZVANN!!",

"🔴 Happy Birthday Lgend, lets make today unforgettable.",

"🔴 Eat well, Laugh louder, keep smiling",

"🔵 Walk you own path. Never lose yourself.",

"🔵 birthdays are ordinary. But today deserves recongnition.",

"🍋 Made just for you. to know your worth!",

"🍋 IM HAPPY YOUR MY FRIEND!!❤️",

"🎉 HAPPY BIRTHDAY! ❤️",

];

let current = 0;

function showMessage(){

    dialog.style.opacity = 0;

    setTimeout(()=>{

        dialog.textContent = messages[current];

        dialog.style.opacity = 1;

        current++;

        if(current >= messages.length){

            current = 0;

        }

    },300);

}

showMessage();

setInterval(showMessage,3000);