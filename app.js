const paste = document.getElementById("paste");
const offerBtn = document.getElementById("offerBtn");
const logBox = document.getElementById("log");
const answerBtn = document.getElementById("answerBtn");
const acceptBtn = document.getElementById("acceptBtn");
const sendBtn = document.getElementById("sendBtn");
const msgInput = document.getElementById("msgInput");

function log(text){
    const line = document.createElement("div");
    line.textContent = text;
    logBox.appendChild(line);
}

offerBtn.addEventListener("click",function() {
    log("Offer button clicked");
})
answerBtn.addEventListener("click",function() {
    log("Create answer button clicked");
})
acceptBtn.addEventListener("click",function() {
    log("Accept answer button clicked");
})
sendBtn.addEventListener("click",function(){
    log(msgInput.value);
    msgInput.value = "";
})
