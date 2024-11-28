function currentyear()
{
    let year=new Date().getFullYear();
    document.getElementById("currentyear").innerText = year;
}

function lastModified() {
    let modified= document.lastModified;
    document.getElementById("lastModified").innerText = `Last Modified: ${modified}`;
}

function calculateWindChill(temperature, windspeed)
{
    if (temperature<=50 && windspeed> 3)
    {
        let windchill= (35.74 + 0.6215*temperature-35.75*(windspeed**0.16)+0.4275*temperature*(windspeed**0.16)).toFixed(1);
        document.getElementById("calculateWindChill").innerText = `Wind Chill: ${windchill}`;
    }
    else document.getElementById("calculateWindChill").innerText = `Wind Chill: N/A`;
}
currentyear();
lastModified();
calculateWindChill(37,3);