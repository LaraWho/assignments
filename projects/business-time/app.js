var form = document.getElementById("contactForm");
var username = document.getElementById("username");
var btn = document.getElementById("button");

function submitForm(e) {
  e.preventDefault()
  swal({
    title: `Thank you ${username.value}!`,
    text: `I hope your plant doesn't die anytime soon!`,
    timer: 800,
    buttons: false
  })

}

btn.addEventListener('click', submitForm);
