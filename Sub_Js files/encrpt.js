let inputMsg = "";
let keybin = [];
let key = "Aly";
let msgbin = [];
let keybinfinal = [];
let encrptMessage = "";
let encrptMsgbin = [];
//let decrptMessage = "";

function sendMessage() {
  const input = document.getElementById("messageInput");
  inputMsg = input.value;
  showArrived();
  input.value = "";
}

function showArrived() {
  const arrivemsg = document.getElementById("arriveDisplay");
  arrivemsg.innerText = inputMsg;
}

function encrpt() {
  keybin = makeBinary(key);
  let toBeRepeat = Math.floor(inputMsg.length / key.length);
  for (let i = 0; i < toBeRepeat; i++) {
    for (let b = 0; b < key.length; b++) {
      keybinfinal.push(keybin[b]);
    }
  }
  if (inputMsg.length % key.length != 0) {
    let reminder = inputMsg.length % key.length;
    for (let i = 0; i < reminder; i++) {
      keybinfinal.push(keybinfinal[i]);
    }
  }
  seeEncrpted();
}

function seeEncrpted() {
  msgbin = makeBinary(inputMsg);
  encrptMessage = applyXOR(msgbin, keybinfinal);
  let encrptMessageBase64 = toBase64(encrptMessage);

  const encrpdisplay = document.getElementById("messageDisplay");
  encrpdisplay.innerText = encrptMessageBase64;
  localStorage.setItem("Msg: 1", encrptMessageBase64);
  parent.frames["decrpt"].document.getElementById(
    "receivedMessageDisplay"
  ).innerText = encrptMessageBase64;
}
//localStorage.clear();
//console.log(keybinfinal);
