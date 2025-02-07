document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes('/sub-page/')) {
      fetch('../sub-page/navigation.html')
        .then(response => response.text())
        .then(data => {
          // Sisipkan HTML navbar ke elemen dengan id "navbar-container"
          document.getElementById("navbar-container").innerHTML = data;
  
          // Setelah navbar ter-load, tentukan halaman yang aktif
          const currentPage = window.location.pathname.split('/').pop(); // Contoh: "services.html"
          
          // Cari semua link di dalam navbar
          const navLinks = document.querySelectorAll('#navbar-container nav ul li a');
          
          navLinks.forEach(link => {
            // Dapatkan bagian akhir href (misalnya "services.html" atau "../index.html")
            let href = link.getAttribute('href');
            let hrefPage = href.split('/').pop(); // Ambil nama file saja
            
            // Jika nama file di link sama dengan halaman saat ini, tambahkan class "active"
            if (currentPage === hrefPage) {
              link.classList.add('active');
            }
          });
        })
        .catch(error => console.error("Error loading navigation:", error));
  
      // Bagian untuk load footer (sama seperti sebelumnya)
      fetch('../sub-page/footer.html')
        .then(response => response.text())
        .then(data => {
          document.getElementById("footer-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
    }
  });
  