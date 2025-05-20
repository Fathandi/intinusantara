// Mailbox
function sendEmail(event) {
  event.preventDefault(); // Mencegah form dari pengiriman default

  // Mengambil nilai dari input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Membuat URL mailto
  const subject = encodeURIComponent("Contact Form Submission");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  );
  const mailtoLink = `mailto:Marketing@inti-nusantara.com?subject=${subject}&body=${body}`;

  // Membuka link mailto
  window.location.href = mailtoLink;
  }

// Acc
$(document).on("click", ".naccs .menu div", function () {
  var numberIndex = $(this).index();

  if (!$(this).is("active")) {
    $(".naccs .menu div").removeClass("active");
    $(".naccs ul li").removeClass("active");

    $(this).addClass("active");
    $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .addClass("active");

    var listItemHeight = $(".naccs ul")
      .find("li:eq(" + numberIndex + ")")
      .innerHeight();
    $(".naccs ul").height(listItemHeight + "px");
  }
});

// Clickable Thumb
document.querySelectorAll('.clickable-thumb').forEach(function (element) {
  element.addEventListener('click', function () {
    document.querySelector('#video').scrollIntoView({ behavior: 'smooth' });
  });
});
