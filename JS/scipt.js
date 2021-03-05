
$(document).ready(function () {
  $(".designClick").click(function () {
    $(".designVisible").toggle();
    $(".designHidden").toggle();
  });
});

$(document).ready(function () {
  $(".developmentClick").click(function () {
    $(".developmentVisible").toggle();
    $(".developmentHidden").toggle();
  });
});

$(document).ready(function () {
  $(".productManagementClick").click(function () {
    $(".productManagementVisible").toggle();
    $(".productManagementHidden").toggle();
  });
});
$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    let name = $("input#name").val();
    Swal.fire({
      icon: "success",
      text: `Hey ${name}, We will respond to your message as soon as possible. Thank you`,
    });
    $("#contactForm").each(function () {
      this.reset();
    });
  });
});