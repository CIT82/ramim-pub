document.addEventListener("DOMContentLoaded", function () {
    const FORM = document.getElementById("form");
    const nameE1 = document.getElementById("name");
    const messageContainerE1 = document.getElementById("message-container");
    FORM.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = FORM.name.value;
      const email = FORM.email.value;
      const message = FORM.message.value;
      const nameIsValid = name.trim() !== "";
      const emailIsValid = email.trim() !== "";
      const messageIsValid = message.trim() !== "";
  
      if (nameIsValid && emailIsValid && messageIsValid) {
        messageContainerE1.innerHTML = '<div class="alert alert-success">Your message has been sent. Thank you!</div>';
        FORM.reset();
      } else {
        messageContainerE1.innerHTML = '<div class="alert alert-danger">Please fill in all required fields correctly.</div>';
      }
    });
  });