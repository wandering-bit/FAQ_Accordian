
first = false;
second = false;
third = false;
forth = false;


const firicon = document.getElementById("ficon")
const secicon = document.getElementById("sicon")
const tiricon = document.getElementById("ticon")
const foricon = document.getElementById("fricon")

const firdes = document.getElementById("fdes")
const secdes = document.getElementById("sdes")
const tirdes = document.getElementById("tdes")
const fordes = document.getElementById("frdes")

firdes.style.fontSize = "0px"; // Font sizes must be strings
secdes.style.fontSize = "0px";
tirdes.style.fontSize = "0px";
fordes.style.fontSize = "0px";

firdes.style.marginBottom = "0px"; // Font sizes must be strings
secdes.style.marginBottom = "0px";
tirdes.style.marginBottom = "0px";
fordes.style.marginBottom = "0px";

function testfunc(id) {
    switch (id) {
        case (1):
            first = !first
            second = false
            third = false
            forth = false
            console.log(1)
            break;

        case (2):
            first = false
            second = !second
            third = false
            forth = false
            console.log(2)
            break;
        case (3):
            first = false
            second = false
            third = !third
            forth = false
            console.log(3)
            break;
        case (4):
            first = false
            second = false
            third = false
            forth = !forth
            console.log(4)
            break;
    }
    firicon.src = first ? "icon-minus.svg" : "icon-plus.svg";
    secicon.src = second ? "icon-minus.svg" : "icon-plus.svg";
    tiricon.src = third ? "icon-minus.svg" : "icon-plus.svg";
    foricon.src = forth ? "icon-minus.svg" : "icon-plus.svg";

    firdes.style.fontSize = first ? "16px" : "0px"; // Font sizes must be strings
    secdes.style.fontSize = second ? "16px" : "0px";
    tirdes.style.fontSize = third ? "16px" : "0px";
    fordes.style.fontSize = forth ? "16px" : "0px";
}