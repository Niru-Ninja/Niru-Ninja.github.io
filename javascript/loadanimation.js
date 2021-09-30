let text = document.getElementById("loading");
const chars = ["\\","|","/", "-"];
let index = 0;

setInterval(function (){
  text.innerHTML = "Loading... " + chars[index++];
  index = chars.length === index ? 0 : index;
}, 125);