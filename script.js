//HOME PAGE IMAGE CODE

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100, //mouse sensitivity
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -150); //bounds of image track
 
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`}, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${115 + nextPercentage}% center`}, //doesnt solve track length issue
      { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

// Officer Slider
function setupOfficerSlider() {
  document.getElementById('officer-next').onclick = function officerFoward(){
    let lists = document.querySelectorAll('.officer-slide');
    document.getElementById('slide-one').appendChild(lists[0]);
  }
  
  document.getElementById('officer-prev').onclick = function officerBackward(){
    let lists = document.querySelectorAll('.officer-slide');
    document.getElementById('slide-one').prepend(lists[lists.length - 1]);
  }
}

// Event Slider
function setupEventSlider() {
  var slide = document.querySelectorAll('.slide'); //need to search up later
  var current = 0; //starting slide
  
  function cls(){
    for(let i = 0; i < slide.length; i++){
      slide[i].style.display = 'none';
    }
  }
  
  function next(){
    cls();
    if(current === slide.length-1) current = -1;
    current++;
  
    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.6;
  }
  
  function prev(){
    cls();
    if(current === 0) current = slide.length;
    current--;
  
    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.6;
  }
  
  function start(){
    cls();
    slide[current].style.display = 'block';
  }
  
  start();
}

// Call the setup functions
setupOfficerSlider();
setupEventSlider();