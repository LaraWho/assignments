var square = document.getElementById("square");
var darude = document.getElementById("rave");

square.addEventListener('mouseenter', () => {
  //blue
  square.style.backgroundColor = 'rgb(28, 32, 236)';
  darude.currentTime = '30';
  darude.play(); 
})

square.addEventListener('mousedown', () => {
  //red
  square.style.backgroundColor = 'rgb(236, 42, 28)';
  
})

square.addEventListener('mouseup', () => {
  //yellow
  square.style.backgroundColor = 'rgb(236, 216, 28)';
})

square.addEventListener('dblclick', () => {
  //green
  square.style.backgroundColor = 'rgb(28, 236, 90)';
})

window.addEventListener('wheel', (e) => {
    //orange
  if(e.deltaY > 0) {
    square.style.backgroundColor = 'rgb(236, 122, 28)';
  } else if(e.deltaX > 0) {
    //turquoise
    square.style.backgroundColor = '#7d1cec';
  }
})

square.addEventListener('pointerleave', () => {
  //hawt pink
  square.style.backgroundColor = 'rgb(236, 28, 152)';
  darude.pause(); 
})


// playAudio = () => { 
  // darude.currentTime = '30';
  // darude.play(); 
// } 
// pauseAudio = () => { 
//   darude.pause(); 
// } 