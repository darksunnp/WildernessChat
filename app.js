const paste = document.getElementById("paste");
const offerBtn = document.getElementById("offerBtn");
const logBox = document.getElementById("log");

function log(text){
    const line = document.createElement("div");
    line.textContent = text;
    logBox.appendChild(line);
}

offerBtn.addEventListener("click",function() {
    log("Offer button clicked");
})
