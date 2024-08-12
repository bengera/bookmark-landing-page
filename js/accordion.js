const accordionItemHeaders = document.querySelectorAll(".accordion__item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px"; //returns height of element in px, including hidden height
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});