//add header
document.getElementById("header").innerHTML = `<h1 class="header">JavaScript Made This!!</h1> 
<h2 class="header"> <div> <span class="name">Lara </span> wrote the JavaScript</h2> </div>`;

//change message content
let leftMsg0 = document.getElementsByClassName("message left")[0];
let leftMsg1 = document.getElementsByClassName("message left")[1];
let rightMsg0 = document.getElementsByClassName("message right")[0];
let rightMsg1 = document.getElementsByClassName("message right")[1];

leftMsg0.innerHTML = `<div>You're the best!</div>`
leftMsg1.innerHTML = `<div>No, you're the best!</div>`
rightMsg0.innerHTML = `<div>No, you're the best!</div>`
rightMsg1.innerHTML = `<div>NO, YOU ARE THE BEST!</div>`


//clear messages
let messages = document.querySelectorAll("div.message");
function clearMsgs() {
  messages.forEach((e) => {
    e.remove()
  })
}
document.getElementById("clear-button").addEventListener("click", clearMsgs);

//changing theme colour
let messages1 = document.querySelectorAll("div.message.left");
let messages2 = document.querySelectorAll("div.message.right");
function changeTheme1(e) {
  if(e.target.value === 'theme-two') {
    messages1.forEach((e) => {
        e.style.color = '#fff';
        e.style.backgroundColor = '#da2323'
    })
    messages2.forEach((e) => {
        e.style.color = '#fff';
        e.style.backgroundColor = '#333'
    })
  } else if (e.target.value === 'theme-three') {
    messages1.forEach((e) => {
        e.style.color = '#FF0000';
        e.style.backgroundColor = '#E8DE0C'
      })
    messages2.forEach((e) => {
        e.style.color = '#E8DE0C';
        e.style.backgroundColor = '#0D1AE8'
    })
  } else {
      messages1.forEach((e) => {
        e.style.color = '#333';
        e.style.backgroundColor = '#f0dfaa'
      })
      messages2.forEach((e) => {
        e.style.color = '#333';
        e.style.backgroundColor = 'lightblue'
    })
  }

}
document.getElementById("theme-drop-down").addEventListener('change', changeTheme1)

//add message
var form = document.getElementById("add-message");

function addMsg(e) {
  e.preventDefault()
  var newMessage = document.createElement("div")
  var messageBox = document.getElementsByClassName("messages")[0];
  newMessage.classList = "message right"
  var inputBox = document.getElementById("message-input").value

  //newMessage.appendChild does the same as newMessage.textContent
  // newMessage.appendChild(document.createTextNode(document.getElementById("message-input").value))
  newMessage.textContent = inputBox

  newMessage.style.marginTop = "10px";
  newMessage.style.marginBottom = "10px";
  messageBox.insertBefore(newMessage, messageBox.childNodes[0])
  // document.getElementsByClassName("messages")[0].appendChild(newMessage)
  

}

form.addEventListener('click', addMsg);

// function newMessage(){
//   // create new div
//   var newMessage = document.createElement("div");
//   // give it classes
//   newMessage.classList = "message right";
//   // give it text
//   newMessage.textContent = document.getElementById("messageInput").value
//   // append it to DOM (div.messages)
//   document.getElementsByClassName("messages")[0].insertBefore(newMessage)
// }