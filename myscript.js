const sendButton = document.getElementsByClassName(
  "tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq"
);
const timeOut = setTimeout(() => {
  sendButton[0].click();
}, 10000);
console.log("This is send Button" + sendButton);

// chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {

// });
alert("Extension working!");
