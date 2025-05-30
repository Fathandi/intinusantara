// Mailbox
function sendEmail(event) {
  event.preventDefault(); // Mencegah form dari pengiriman default

  // Mengambil nilai dari input
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Membuat URL mailto
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  );
  const mailtoLink = `mailto:fathihapriandi@inti-nusantara.com?subject=Hello, I am interested in your services. &body=${body}`;

  // Membuka link mailto
  window.location.href = mailtoLink;
}

// Short Mail
document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const message = document.getElementById("shortMessage").value;
  const mailto = "fathihapriandi@inti-nusantara.com";
  const subject = "Hello, I am interested in your services.";
  const mailtoLink = `mailto:${mailto}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(message)}`;

  window.location.href = mailtoLink;
});

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
document.querySelectorAll(".clickable-thumb").forEach(function (element) {
  element.addEventListener("click", function () {
    document.querySelector("#video").scrollIntoView({ behavior: "smooth" });
  });
});
