var txt = 'Full Stack dev'; /* The text */
var i = txt.length;
var speed = 100; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("type").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }else{
    
      document.getElementById("type").innerHTML = '';
      i=0;
      setTimeout(typeWriter, speed);
      
    }
  }
typeWriter();