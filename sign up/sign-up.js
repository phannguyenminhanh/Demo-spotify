var eye = document.getElementById("eye");
var password = document.getElementById("password");
eye.addEventListener("click", () => {
  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
    eye.setAttribute("name", "eye-off-outline");
  } else {
    password.setAttribute("type", "password");
    eye.setAttribute("name", "eye-outline");
  }
});

var submit = document.getElementById("submit");

submit.addEventListener("click", (event) => {
  console.log("success")
  event.preventDefault();
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  var passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  var username = document.getElementById("username").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim(); // content
  var passwordConfirmation = document
    .getElementById("passwordConfirm")
    .value.trim();
  
  var usernameVali = username !== "";
  var emailVali = emailRegex.test(email);
  var passwordVali = passwordRegex.test(password);
  var passwordConfirmationVali = password === passwordConfirmation;
  displayErrorMessage(
    "username-error",
    usernameVali,
    "username is required"
  );
  displayErrorMessage("email-error", emailVali, "Email is not valid.");
  displayErrorMessage(
    "password-error",
    passwordVali,
    "Password must contain at least 8 characters including at least one number, one letter, and one special character."
  );
  displayErrorMessage(
    "passwordConfirm-error",
    passwordConfirmationVali,
    "Password confirmation does not match the password."
  );
  if (
    usernameVali &&
    emailVali &&
    passwordVali &&
    passwordConfirmationVali
  ) {
    saveToLocalStorage(username, email, password);
    success();
  }
});
function displayErrorMessage(id, isVali, message) {
  var errorElement = document.getElementById(id);
  if (!isVali) {
    errorElement.textContent = message;
  } else {
    errorElement.textContent = "";
  }
}
function success() {
  swal({
    title: "Good job!",
    text: "Signup Success",
    icon: "success",
    button: "Continue",
  }).then(() => {
    window.location.href = "http://127.0.0.1:5502/index2.html";
  });
}

function saveToLocalStorage(username, email, pass) {
  var userData = {
    username: username,
    email: email,
    pass: pass,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
}

