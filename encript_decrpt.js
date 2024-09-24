/*let name1 = "Umar Shab";
let key = "abc";
let keybin = [];
let namebin = [];
let keybinfinal = [];
let encrptMessage = "";
let encrptMsgbin = [];
let decrptMessage = "";
*/
function makeBinary(message) {
  let outputarray = [];
  for (let i = 0; i < message.length; i++) {
    outputarray[i] = message[i].charCodeAt(0).toString(2);
  }
  return outputarray;
}

function applyXOR(array1, array2) {
  let msg = "";
  for (let i = 0; i < array1.length; i++) {
    let arraybin = [];
    let arraybinfinal = [];
    arraybin[i] = parseInt(array1[i], 2) ^ parseInt(array2[i], 2);
    arraybinfinal[i] = arraybin[i];
    msg = msg + String.fromCharCode(arraybinfinal[i]);
  }
  return msg;
}

function toBase64(input) {
  return btoa(input);
}

function fromBase64(input) {
  return atob(input);
}

/*namebin = makeBinary(name1);
keybin = makeBinary(key);
//console.log(namebin);

let toBeRepeat = Math.floor(name1.length / key.length);
for (let i = 0; i < toBeRepeat; i++) {
  for (let b = 0; b < key.length; b++) {
    keybinfinal.push(keybin[b]);
  }
}
if (name1.length % key.length != 0) {
  let reminder = name1.length % key.length;
  for (let i = 0; i < reminder; i++) {
    keybinfinal.push(keybinfinal[i]);
  }
}*/
//console.log(keybinfinal);

//console.log("Starting Msg: ", name1);
//encrptMessage = applyXOR(namebin, keybinfinal);
//encrptMsgbin = makeBinary(encrptMessage);
//decrptMessage = applyXOR(encrptMsgbin, keybinfinal);
//console.log("Encrpted Message: ", encrptMessage);
//console.log("Decrpted Message: ", decrptMessage);
