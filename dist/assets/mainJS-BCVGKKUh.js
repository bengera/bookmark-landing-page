const i="/assets/illustration-features-tab-1-C4yEIqlu.svg",u="/assets/illustration-features-tab-2-D6TWLMkl.svg",g="/assets/illustration-features-tab-3-Dw4MMxR1.svg",n=document.querySelector(".hamburger-menu"),d=document.querySelector(".nav__drop-down"),h=document.querySelector(".logo"),m=document.querySelector(".overlay");n.addEventListener("click",()=>{console.log("toggle-menu"),n.classList.toggle("active"),d.classList.toggle("show"),m.classList.toggle("show"),h.classList.toggle("white")});const r=document.querySelectorAll(".features__button"),e=document.getElementById("features-img"),t=document.getElementById("features-heading"),o=document.getElementById("features-text"),s=document.getElementById("shape");r.forEach(a=>{a.addEventListener("click",l=>{switch(console.log("tab clicked"),r.forEach(c=>{c.classList.remove("active")}),a.classList.add("active"),l.target.innerText){case"Simple Bookmarking":t.innerText="Bookmark in one click",o.innerText="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",e.src=i,s.style.height="200px";break;case"Speedy Searching":t.innerText="Intelligent search",o.innerText="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",e.src=u,s.style.height="240px";break;case"Easy Sharing":t.innerText="Share your bookmarks",o.innerText="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",e.src=g,s.style.height="250px";break;default:console.log("No match found")}})});
