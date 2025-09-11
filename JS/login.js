function validateAll(event) {
  event.preventDefault();
  console.log("Submit");

  const form = document.getElementById("CreateAccount");
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone-number");
  const password = document.getElementById("password");
  const confirmPass = document.getElementById("confirm-password");
  const formErrors = document.getElementById("form-errors");
  const checkBox = document.getElementById("checkbox");

  let isValid = true;

  formErrors.innerHTML = "";
  document.getElementById("username-error").innerHTML = "";
  document.getElementById("email-error").innerHTML = "";
  document.getElementById("phone-error").innerHTML = "";
  document.getElementById("password-error").innerHTML = "";
  document.getElementById("confirm-password-error").innerHTML = "";
  document.getElementById("checkbox-error").innerHTML = "";

  if (
    username.value.trim() === "" ||
    email.value.trim() === "" ||
    phone.value.trim() === "" ||
    password.value.trim() === "" ||
    confirmPass.value.trim() === ""
  ) {
    formErrors.innerHTML = "All fields must be filled!";
    isValid = false;
  } else {
    if (username.value.trim() === "") {
      document.getElementById("username-error").innerHTML =
        "Username is required!";
      isValid = false;
    }

    if (email.value.trim() === "") {
      document.getElementById("email-error").innerHTML = "Email is required";
      isValid = false;
    } else if (!email.value.endsWith("@gmail.com")) {
      document.getElementById("email-error").innerHTML =
        "Email must end with @gmail.com!";
      isValid = false;
    }

    if (phone.value.trim() === "") {
      document.getElementById("phone-error").innerHTML =
        "Phone number is required!";
      isValid = false;
    } else if (!phone.value.startsWith("0")) {
      document.getElementById("phone-error").innerHTML =
        "Phone number must start with 0!";
      isValid = false;
    }

    if (password.value.trim() === "") {
      document.getElementById("password-error").innerHTML =
        "Password is required!";
      isValid = false;
    } else if (password.value.length < 8) {
      document.getElementById("password-error").innerHTML =
        "Password must be more than 8 characters!";
      isValid = false;
    }

    if (confirmPass.value.trim() === "") {
      document.getElementById("confirm-password-error").innerHTML =
        "Confirm Password is required";
      isValid = false;
    } else if (password.value !== confirmPass.value) {
      document.getElementById("confirm-password-error!").innerHTML =
        "Passwords do not match";
      isValid = false;
    }

    if (!checkBox.checked) {
      document.getElementById("checkbox-error").innerHTML =
        "You must agree to the terms and conditions!";
      isValid = false;
    }

    if (isValid) {
      form.submit();
      window.location.href = "./home.html";
    }
  }
}

document
  .getElementById("CreateAccount")
  .addEventListener("submit", validateAll);
