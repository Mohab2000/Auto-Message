const phone = prompt("Enter phone");
const message = prompt("Enter your message");
const web = `https://web.whatsapp.com/send/?phone=${phone}&text=${message}&source&data&app_absent`;
window.open(web);

// const sendButton = document.getElementsByClassName(
//   "tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq"
// );
//  localStorage.setItem("tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq", sendButton);
// const openedWindow = window.open(web);
// console.log(openedWindow);
// openedWindow.addEventListener(
//   "onload",
//   (e) => {
//     const sendButton = document.getElementsByClassName(
//       "tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq"
//     );
//     console.log("asdfg");
//     sendButton[0].click();
//   },
//   false
// );

// newWin = window.open(web);
// if (newWin) {
//   newWin.sendButton = sendButton;
// }
