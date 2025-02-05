

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
      templeName: "Jordan River Temple",
      location: "South Jordan, Utah",
      dedicated: "1981, November, 16",
      area: "148236",
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/87cb982259d1103385e7d2a0e07f41a0954eb4f8/full/800%2C/0/default"

  },
  {
      templeName: "Helena Montana Temple",
      location: "Helena, Montana",
      dedicated: "2023, June, 18",
      area: "9794",
      imageUrl:
      "https://www.churchofjesuschrist.org/imgs/12b539bbeb6e11eda7c9eeeeac1eac0a8ada7139/full/800%2C/0/default"
  },
  {
      templeName:"Portland Oregon Temple",
      location: "Lake Oswego, Oregon",
      dedicated: "1989, August, 19",
      area: "80500",
      imageUrl:
      "https://churchofjesuschrist.org/imgs/91ee64d1750b013886f11c27f2c87c5535f5cbad/full/800%2C/0/default" 
  }

];

function temple() {
  let content = ""; // Initialize a string to hold the content
  for (let i = 0; i < temples.length; i++) {
    content += `
      <div class="temple-card">
        <h2>${temples[i].templeName}</h2>
        <p>Location: ${temples[i].location}</p>
        <p>Dedicated: ${temples[i].dedicated}</p>
        <p>Area: ${temples[i].area} sq ft</p>
        <img src="${temples[i].imageUrl}" alt="${temples[i].templeName}" width="300">
      </div>
    `;
  }
  selection=document.getElementById("active");
  document.getElementById("active").innerText = `home`
  document.getElementById("temples").innerHTML = content; // Update the content dynamically
}

function small()
{
  let content = ""; // Initialize a string to hold the content
  for (let i = 0; i < temples.length; i++) {
    if (temples[i].area < 10000){
    content += `
      <div class="temple-card">
        <h2>${temples[i].templeName}</h2>
        <p>Location: ${temples[i].location}</p>
        <p>Dedicated: ${temples[i].dedicated}</p>
        <p>Area: ${temples[i].area} sq ft</p>
        <img src="${temples[i].imageUrl}" alt="${temples[i].templeName}" width="300">
      </div>
    `;
  }}
  selection=document.getElementById("active");
  document.getElementById("active").innerText = `small`
  document.getElementById("temples").innerHTML = content; // Update the content dynamically  
}

function large()
{
  let content = ""; // Initialize a string to hold the content
  for (let i = 0; i < temples.length; i++) {
    if (temples[i].area > 20000){
    content += `
      <div class="temple-card">
        <h2>${temples[i].templeName}</h2>
        <p>Location: ${temples[i].location}</p>
        <p>Dedicated: ${temples[i].dedicated}</p>
        <p>Area: ${temples[i].area} sq ft</p>
        <img src="${temples[i].imageUrl}" alt="${temples[i].templeName}" width="300">
      </div>
    `;
  }}
  selection=document.getElementById("active");
  document.getElementById("active").innerText = `large`
  document.getElementById("temples").innerHTML = content; // Update the content dynamically  
}

function noo()
{
  let content = ""; // Initialize a string to hold the content
  for (let i = 0; i < temples.length; i++) {
    const dedicatedYear = parseInt(temples[i].dedicated);
    if (dedicatedYear > 2000)
    {
    content += `
      <div class="temple-card">
        <h2>${temples[i].templeName}</h2>
        <p>Location: ${temples[i].location}</p>
        <p>Dedicated: ${temples[i].dedicated}</p>
        <p>Area: ${temples[i].area} sq ft</p>
        <img src="${temples[i].imageUrl}" alt="${temples[i].templeName}" width="300">
      </div>
    `;
  }}
  selection=document.getElementById("active");
  document.getElementById("active").innerText = `new`
  document.getElementById("temples").innerHTML = content; // Update the content dynamically  
}

function old()
{
  let content = ""; // Initialize a string to hold the content
  for (let i = 0; i < temples.length; i++) {
    const dedicatedYear = parseInt(temples[i].dedicated);
    if (dedicatedYear < 1990)
    {
    content += `
      <div class="temple-card">
        <h2>${temples[i].templeName}</h2>
        <p>Location: ${temples[i].location}</p>
        <p>Dedicated: ${temples[i].dedicated}</p>
        <p>Area: ${temples[i].area} sq ft</p>
        <img src="${temples[i].imageUrl}" alt="${temples[i].templeName}" width="300">
      </div>
    `;

  
  }}
  selection=document.getElementById("active");
  document.getElementById("active").innerText = `old`
  document.getElementById("temples").innerHTML = content; // Update the content dynamically  
}

document.getElementById("old").addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default link behavior (navigation)
  old(); // Calls the `old` function
});

document.getElementById("home").addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default link behavior (navigation)
  temple(); // Calls the `home` function
});

document.getElementById("new").addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default link behavior (navigation)
  noo(); // Calls the `noo` function
});

document.getElementById("large").addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default link behavior (navigation)
  large(); // Calls the `large` function
});

document.getElementById("small").addEventListener("click", (event) => {
  event.preventDefault(); // Prevents the default link behavior (navigation)
  small(); // Calls the `small` function
});

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
temple();

