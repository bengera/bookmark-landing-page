const n=document.querySelector(".hamburger-menu"),i=document.querySelector(".nav__drop-down"),u=document.querySelector(".logo"),g=document.querySelector(".overlay");n.addEventListener("click",()=>{console.log("toggle-menu"),n.classList.toggle("active"),i.classList.toggle("show"),g.classList.toggle("show"),u.classList.toggle("white")});const r=document.querySelectorAll(".features__button"),e=document.getElementById("features-img"),t=document.getElementById("features-heading"),o=document.getElementById("features-text");document.getElementById("features-button");const a=document.getElementById("shape");r.forEach(s=>{s.addEventListener("click",l=>{switch(console.log("tab clicked"),r.forEach(c=>{c.classList.remove("active")}),s.classList.add("active"),l.target.innerText){case"Simple Bookmarking":t.innerText="Bookmark in one click",o.innerText="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",e.src="./images/illustration-features-tab-1.svg",a.style.height="200px";break;case"Speedy Searching":t.innerText="Intelligent search",o.innerText="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",e.src="./images/illustration-features-tab-2.svg",a.style.height="240px";break;case"Easy Sharing":t.innerText="Share your bookmarks",o.innerText="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",e.src="./images/illustration-features-tab-3.svg",a.style.height="250px";break;default:console.log("No match found")}})});
