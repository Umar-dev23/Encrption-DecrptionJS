let keybin = [];
let key = "Aly";
let keybinfinal = [];
let encrptedMsg = "";
let decrptedMsg = "";

//window.onload = () => {
// encrptedMsg = localStorage.getItem("Msg: 1");
// const encrpdisplay = document.getElementById("receivedMessageDisplay");
// encrpdisplay.innerText = encrptedMsg;
//};

function decrpt() {
  keybin = makeBinary(key);
  encrptedMsg = document.getElementById("receivedMessageDisplay").innerText;
  let toBeRepeat = Math.floor(encrptedMsg.length / key.length);
  for (let i = 0; i < toBeRepeat; i++) {
    for (let b = 0; b < key.length; b++) {
      keybinfinal.push(keybin[b]);
    }
  }
  if (encrptedMsg.length % key.length != 0) {
    let reminder = encrptedMsg.length % key.length;
    for (let i = 0; i < reminder; i++) {
      keybinfinal.push(keybinfinal[i]);
    }
  }
  seeDecrpted();
}

function seeDecrpted() {
  //msgbin = makeBinary(encrptedMsg);
  decrptedMsg = applyXOR(makeBinary(fromBase64(encrptedMsg)), keybinfinal);
  const decrptdisplay = document.getElementById("decrptedMsgdisplay");
  decrptdisplay.innerText = decrptedMsg;
}

function cleared() {
  //localStorage.clear();
  document.getElementById("receivedMessageDisplay").innerText = " ";
  document.getElementById("decrptedMsgdisplay").innerText = " ";
}
