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
  event.preventDefault();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var storedData = JSON.parse(localStorage.getItem("userData"));
  console.log(storedData);
  if (
    storedData &&
    storedData.email === email &&
    storedData.pass === password
  ) {
    success();
  } else {
    error();
  }
});
function error() {
  swal({
    title: "Tài khoản không tồn tại",
    text: "Mời bạn đăng nhập lại",
    icon: "error",
    button: "Đồng ý",
  });
}
function success() {
  swal({
    title: "Good job!",
    text: "Signup Success",
    icon: "success",
    button: "Continue",
  }).then(() => {
    window.location.href = "main.html";
  });
}
