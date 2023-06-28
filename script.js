window.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tabs input[type='radio']");
  
  tabs.forEach(tab => {
    tab.addEventListener("change", function() {
      const tabContentId = this.nextElementSibling.getAttribute("id");
      const tabContents = document.querySelectorAll(".tab-content");
      
      tabContents.forEach(content => {
        if (content.getAttribute("id") === tabContentId) {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });
    });
  });
});
