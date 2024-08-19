const h="/assets/illustration-features-tab-1-C4yEIqlu.svg",y="/assets/illustration-features-tab-2-D6TWLMkl.svg",v="/assets/illustration-features-tab-3-Dw4MMxR1.svg",c=document.querySelector(".hamburger-menu"),f=document.querySelector(".nav__drop-down"),k=document.querySelector(".logo"),w=document.querySelector(".overlay");c.addEventListener("click",()=>{console.log("toggle-menu"),c.classList.toggle("active"),f.classList.toggle("show"),w.classList.toggle("show"),k.classList.toggle("white")});const l=document.querySelectorAll(".features__button"),o=document.getElementById("features-img"),s=document.getElementById("features-heading"),n=document.getElementById("features-text"),a=document.getElementById("shape");l.forEach(e=>{e.addEventListener("click",t=>{switch(console.log("tab clicked"),l.forEach(g=>{g.classList.remove("active")}),e.classList.add("active"),t.target.innerText){case"Simple Bookmarking":s.innerText="Bookmark in one click",n.innerText="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",o.src=h,a.style.height="200px";break;case"Speedy Searching":s.innerText="Intelligent search",n.innerText="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",o.src=y,a.style.height="240px";break;case"Easy Sharing":s.innerText="Share your bookmarks",n.innerText="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",o.src=v,a.style.height="250px";break;default:console.log("No match found")}})});const b=document.getElementById("form"),r=document.querySelector(".email-field"),i=document.querySelector(".contact-btn"),d=document.querySelector(".i-error"),m=document.querySelector(".error-dropdown");b.addEventListener("click",e=>{e.target===i&&(e.preventDefault(),console.log("check input"),p())});function p(){const t=document.getElementById("email").value.trim();t===""?u():L(t)?(r.value="",r.classList.remove("active"),d.classList.remove("active"),m.classList.remove("active"),i.classList.remove("active")):u()}function u(){r.classList.add("active"),d.classList.add("active"),m.classList.add("active"),i.classList.add("active")}function L(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function E(){console.log("reset menu")}(function(){window.onresize=e,window.onload=e;function e(){window.innerWidth>=1e3&&c.classList.contains("active")&&E()}})();
