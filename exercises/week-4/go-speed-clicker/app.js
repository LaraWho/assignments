// Make a site that tracks how many times the user has clicked anywhere on the page (or a specific button if you prefer) and displays that click count to the user. Then, using localStorage or sessionStorage, make it so the number of clicks will remain on the screen even after the site is refreshed.

// Extra credit: Put a countdown timer (10-30 seconds) on the page that stops the user's clicks from counting towards the total after the timer ends.

//container for content
let container = document.createElement("div")

//click button
let btn = document.createElement("button")
btn.textContent = "click me!"

//to display current clicks instantly
let display = document.createElement("h1")
display.style.color = "rgb(133, 15, 15)" 
display.id = "text"

//element to display localStorage info
let savedClicks = document.createElement("h1")
savedClicks.id = "savedClicks"
savedClicks.style.color = "rgb(209, 104, 104)"

//to refresh page
let btn2 = document.createElement("button")
btn2.textContent = "refresh page!"

//function to count clicks, add it to local storage, and display it
let count = 0;
countClick = (e) => {
  e.preventDefault()
  localStorage.clickCounter = count
  return document.getElementById("text").textContent = `Just keep clicking! ${count++}!`
}

//Create countdown clock
let countdown = document.createElement("h1")
countdown.id = "countdown"
countdown.style.color = "rgb(263, 10, 8)"

let timeleft = 20;
let timer = setInterval(() => {
  document.getElementById("countdown").textContent = `${timeleft} seconds left to click!`;
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(timer);
    document.getElementById("countdown").textContent = "YOU ARE DONE WITH YOUR CLICKING SPREE!"
    btn.removeEventListener("click", countClick)
  }
}, 1000)

//function to refresh the page
refreshPage = () => {
  window.location.reload()
}

//displaying the local storage
savedClicks.textContent = `You previously clicked ${localStorage.clickCounter} times. Calm down, mate!`

//adding event listeners to the buttons
btn.addEventListener("click", countClick)
btn2.addEventListener("click", refreshPage)

//adding the elements to the DOM
document.body.appendChild(container)
container.appendChild(btn)
container.appendChild(display)
container.appendChild(savedClicks)
container.appendChild(countdown)
container.appendChild(btn2)
