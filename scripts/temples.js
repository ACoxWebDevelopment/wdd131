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