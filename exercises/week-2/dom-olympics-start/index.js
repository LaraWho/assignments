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
    e.style.backgroundColor = 'red'
    })
    messages2.forEach((e) => {
    e.style.color = '#fff';
    e.style.backgroundColor = 'black'
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
var form = document.form;

function addMsg(e) {
  e.preventDefault()
  var msg = form.newMsg.value
  document.querySelectorAll("div.messages").innerHTML += msg
  console.log(form.newMsg.value)
  form.newMsg.value = ''

  
}

form.addEventListener('submit', addMsg);

