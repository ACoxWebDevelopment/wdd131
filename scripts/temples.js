/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
      } 
      else {
        x.style.display = "block";
      }

    }

let h2Element ="home";
let message= document.getElementById("menuChoice");
message.textContent=h2Element;

const small= document.getElementById("small");
small.addEventListener("click", function(Event){
  Event.preventDefault();
  h2Element="small temples";
  message.textContent = h2Element;
});

const large= document.getElementById("large");
large.addEventListener("click", function(Event){
  Event.preventDefault();
  h2Element="large temples";
  message.textContent = h2Element;
});

const neww= document.getElementById("new");
neww.addEventListener("click", function(Event){
  Event.preventDefault();
  h2Element="new temples";
  message.textContent = h2Element;
});

const old= document.getElementById("old");
old.addEventListener("click", function(Event){
  Event.preventDefault();
  h2Element="old temples";
  message.textContent = h2Element;
});

const home= document.getElementById("home");
home.addEventListener("click", function(Event){
  Event.preventDefault();
  h2Element="home";
  message.textContent = h2Element;
});

function currentyear()
{
    let year=new Date().getFullYear();
    document.getElementById("currentyear").innerText = year;
}

function lastModified() {
    let modified= document.lastModified;
    document.getElementById("lastModified").innerText = `Last Modified: ${modified}`;
}

function handleResize() {
  var x = document.getElementById("myLinks");
  if (window.innerWidth >= 600) {
      x.style.display = ""; // Reset inline style to allow CSS to take over
  }
}

window.addEventListener("resize", handleResize);

currentyear();
lastModified();