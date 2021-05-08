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
//  log.style.width="80%";
 log.style.marginTop ="5%"
//  log.style.height="100%";
//  log.style.borderRadius ="70px"


//section images flex box advance flex-direction row
let images = document.querySelectorAll(".img-content");
images.forEach(image=>{
   
    image.addEventListener("mouseover", ()=>{
        image.style.opacity = 0.5;
        
    })
})
//text content div first
let textContentDiv = document.querySelectorAll(".text-content");
textContentDiv.forEach(x=>{
    x.addEventListener("select", ()=>{
textContentDiv.forEach(item=>{
item.style.width="50%";
item.style.height="20%";
item.style.backgroundColor="white"
item.style.padding="40px";
item.style.marginLeft="20%"
item.style.border="4px solid black"
item.style.opacity = 0.7;
}) 
    })
})

//div class content destination p 
let contentDestination = document.querySelectorAll(".content-destination p");
contentDestination[0].classList.add("welcomePar")
//welcome paragraph 
let welcomeP = document.querySelector("p");
console.log(welcomeP)
welcomeP.classList.add("welcomePar")

let contentSection = document.querySelector(".content-section");
contentSection.style.display="flex"
console.log(contentSection,"name")
contentSection.style.flex.direction ="column"




//Fun in the sum paragraph and section content-pict formating
let contentPick = document.querySelectorAll(".content-section");
// contentPick[0].style.alignItems ="center"
contentPick[0].children[0].style.backgroundColor ="gray";
// contentPick[0].children[0].classList.add("funSun");

//Sign ME up button added
 
let footer = document.querySelector("footer")
footer.style.backgroundColor ="black";
footer.style.color="white";
footer.style.opacity = .6;
footer.style.fontSize="48px";

footer.style.width="100%";
console.log(footer)
// window.addEventListener("load", function(){
let navContainer = document.querySelectorAll(".nav-link");
navContainer.forEach(x=>{
    x.addEventListener("mouseover", ()=>{
       x.style.backgroundColor="red";
       x.style.padding ="20px";
       x.style.borderRadius = "5px"
       x.style.margin="5px";
       if(`${x.style.color}`=="blue"){
           x.style.color= "white"
       }else{
           x.style.color ="blue"
       }
    })
    
})

  document.addEventListener("keydown", event=>{
    event.preventDefault;
    let divOne = document.createElement("h4");
    divOne.textContent = `${event.key}`
   alert("You Press " + JSON.stringify(event.key))
 
})
document.body.addEventListener("mouseover", (event)=>{
    document.body.style.backgroundColor="wheat";
      event.defaultPrevented;
    if(event.target.style.backgroundColor=="wheat"){
        document.body.style.backgroundColor ="white"
    }
})
function changeImage(event){
   console.log(event.target);
   event.target.src ="img/barkon.jpeg"
}
let imagebus = document.querySelector("img");
   imagebus.addEventListener("dblclick", changeImage)
// })
//dblclick on on the car image
let keyPush = document.querySelector('body')
keyPush.addEventListener('keydown', function(event) {
    event.target.style.color = 'pink'
    setTimeout(function() {
        event.target.style.color = "";
    }, 500);
}, false);