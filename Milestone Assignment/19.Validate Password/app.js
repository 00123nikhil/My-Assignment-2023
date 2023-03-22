var form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  // check the email is valid or not
  if (!emailInput.checkValidity()) {
    document.getElementById("message").innerHTML = "Invalid password";
    document.getElementById("message").style.color = "red";
    return;
  }

  //check password is valid or not
  if (passwordInput.value.length < 8) {
    // alert("Password must be at least 8 characters");
    document.getElementById("message").innerHTML =
      "Password must be at least 8 characters";
    document.getElementById("message").style.color = "red";
    return;
  }

  // If all input is valid, submit the form
  document.getElementById("message").innerHTML = "Login Successful!";
  document.getElementById("message").style.color = "Green";
  // form.submit();
});
