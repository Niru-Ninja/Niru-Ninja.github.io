let counter = 1;
const numberOfImages = 5;
setInterval(function(){
  document.getElementById('s' + counter).checked = true;
  counter++;
  if(counter > numberOfImages){
    counter = 1;
  }
}, 4000);