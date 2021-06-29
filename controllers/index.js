document.querySelector(".footerEmail").onfocus = function () {
   var x = document.querySelector(".footerEmail");
   x.style.border = "1px solid white";
};

document.querySelector(".footerEmail").onblur = function () {
   var x = document.querySelector(".footerEmail");
   x.style.border = null;
};

window.onscroll = function () {
   scrollFunction();
};

function scrollFunction() {
   var header = document.querySelector(".header");
   var navbarContainer = document.querySelector("#navbarContainer");
   var x = document.body.scrollTop;
   var y = document.documentElement.scrollTop;
   if ((x >= 30 && x <= 100) || (y >= 30 && y <= 100)) {
      document.querySelector("#navbarContainer").style.height = "0%";
      console.log("123");
   }
   if (x > 200 || y > 200) {
      header.style.position = "fixed";
      header.style.zIndex = "999";
      header.style.backgroundColor = "white";
      document.querySelector("#navbarLogo").style.visibility = "hidden";
      navbarContainer.style.height = "100%";
   } else {
      header.style.position = null;

      header.style.backgroundColor = "transparent";
      document.querySelector("#navbarLogo").style.visibility = "visible";
      navbarContainer.style.height = "100%";
   }
}


function openNav() {
   document.getElementById("navMain").style.width = "320px";
   document.getElementById("main").style.marginLeft = "320px";
   var closebtn =document.querySelector(".closebtn");
  closebtn.style.visibility="visible";
 }
 
 function closeNav() {
   document.getElementById("navMain").style.width = "0";
   document.getElementById("main").style.marginLeft= "0";
   var closebtn =document.querySelector(".closebtn");
   closebtn.style.visibility="hidden";
 }

document.querySelector("#btnMenuBar").onclick=function() {
   document.querySelector(".navbarContent").style.display="block";
}