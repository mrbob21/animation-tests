//EVENT PAGE IMAGE CODE

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

    // var x = 0.6;
    // var intX = setInterval(function(){
    //     x+=0.1;
    //     slide[current].style.opacity = x;
    //     if(x >= 1) {
    //         clearInterval(intX);
    //         x = 0.6;
    //     }
    // }, 100);
}

function prev(){
    cls();
    if(current === 0) current = slide.length;
    current--;

    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.6;

    // var x = 0.6;
    // var intX = setInterval(function(){
    //     x+=0.1;
    //     slide[current].style.opacity = x;
    //     if(x >= 1) {
    //         clearInterval(intX);
    //         x = 0.6;
    //     }
    // }, 100);
}

function start(){
    cls();
    slide[current].style.display = 'block';
}
start();