let pc = null;
let channel = null;

function setupPeer() {
    pc = new RTCPeerConnection({ iceServers: []});
    channel = pc.createDataChannel("chat", {negotiated:true, id:0});
    channel.onopen = function() {
        log("Connected")
    }
}
