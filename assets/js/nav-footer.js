document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes('/sub-page/')) {  
      fetch('../sub-page/footer.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
    }
  });
  
