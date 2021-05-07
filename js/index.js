//Change the body color when it is loaded;
let bodyColor = document.querySelector("body");
let logoHeader = document.querySelector(".logo-heading");
window.addEventListener("load", ()=>{
   bodyColor.style.backgroundColor="wheat"
   logoHeader.style.color ="red";
   logoHeader.style.fontSize ="40px";
   logoHeader.style.letterSpacing ="1.4rem";
   bodyColor.style.textAlign ="center"
})
//nav bar background color , aligncenter and font


let navbarParent = document.querySelector("nav");
navbarParent.style.marginBottom = "20px"
navbarParent.classList.add(".parent")
navbarParent.children[0].classList.add("childrenDiv")
navbarParent.children[1].classList.add("childrenDiv")
navbarParent.children[2].classList.add("childrenDiv")
navbarParent.children[3].classList.add("childrenDiv")

navbarParent.children[0].addEventListener("mouseover",()=>{
navbarParent.children[0].style.backgroundColor="red"
})
//header of the body cetnered
let headerH2 = document.querySelectorAll("h2");
console.log(headerH2)
headerH2.forEach(x=>{
    x.style.color="red";
    x.style.letterSpacing ="1.2rem";
    x.style.textAlign="center"
    
})
//logo image header image border-radius;
let log = document.querySelector("header img");
 log.style.width="80%";
 log.style.height="100%";
 log.style.borderRadius ="70px"
log.style.top= 0;
log.style.right="100px";
log.style.display= "relative";
//section images flex box advance flex-direction row
let images = document.querySelectorAll("section img");
images.forEach(image=>{
    
    image.style.display="inline"
    image.style.margin= "10px"
    image.addEventListener("mouseover", ()=>{
        image.style.opacity = 0.5;
        
    })
})
//text content div first
let textContentDiv = document.querySelectorAll(".text-content");
textContentDiv.forEach(item=>{
item.style.width="60%";
item.style.height="20%";
item.style.backgroundColor="white"
item.style.padding="40px";
item.style.marginLeft="20%"
item.style.border="4px solid black"
item.style.opacity = 0.7;
})
//div class content destination p 
let contentDestination = document.querySelectorAll(".content-destination p");
contentDestination[0].classList.add("welcomePar")
//welcome paragraph 
let welcomeP = document.querySelector("p");
console.log(welcomeP)
welcomeP.classList.add("welcomePar")

let contentSection = document.querySelector(".content-section");
console.log(contentSection.display="flex")
contentSection.display="flex";
contentSection.style.flex.direction ="row"




//Fun in the sum paragraph and section content-pict formating
let contentPick = document.querySelectorAll(".content-pick");
contentPick[0].style.alignItems ="center"
contentPick[0].children[0].style.backgroundColor ="gray";
contentPick[0].children[0].style.float="left";
contentPick[0].children[0].classList.add("funSun");
contentPick[0].children[1].style.float="left";
contentPick[0].children[1].classList.add("funSun");
contentPick[0].children[2].style.float="left";
contentPick[0].children[2].classList.add("funSun");
// contentPick.addEventListener("click", ()=>{

// })
//Sign ME up button added
let signup = document.querySelectorAll(".btn");
console.log(signup)
let buttonCreate = document.createElement("button");

buttonCreate.textContent = signup[0].textContent;
signup[0].appendChild(buttonCreate)
 
buttonCreate.textContent = signup[1].textContent;
signup[1].appendChild(buttonCreate)
//targeting footer 
let footer = document.querySelectorAll("footer")
footer[0].style.backgroundColor ="black";
footer[0].style.color="white";
footer[0].style.opacity = .6
footer[0].style.fontSize="28px";
footer[0].style.float="left";
footer[0].style.width="100%";
console.log(footer)