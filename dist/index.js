console.log("JavaScript file loaded index");
const indexForm = document.getElementById("form1");
indexForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateForm()) {
    showToast();
  } else {
    indexForm.value = "";
  }
});
function showToast() {
  console.log("Showing toast");
  const toast = document.getElementById("toast-2");
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}



document.getElementById("fname").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    let fullname = document.getElementById("fname");
    if (!checkFullname()) {
      event.preventDefault();
      fullname.value = "";
    }
  }
});
document.getElementById("fname").addEventListener("input", function () {
  document.getElementById("nameError").textContent = "";
  this.classList.remove("error");
});
function checkFullname() {
  let name = document.getElementById("fname");
  let nameErr = document.getElementById("nameError");

  name.classList.remove("error");
  nameErr.textContent = "";

  const nameRegex = /^[A-Za-z\s]+$/;
  try {
    let fullname = name.value.trim();
    if (!fullname) throw new Error("Empty-name");
    if (fullname.length < 10) throw new Error("short");
    if (!nameRegex.test(fullname)) throw new Error("invalidName");
    return true;
  } catch (error) {
    passwordInput.classList.add("Error");

    if (error.message === "Empty-name") {
      nameError.textContent =
        "name field is empty. Please enter your fullname.";
      nameError.className = "text-error";
    } else if (error.message === "short") {
      nameError.textContent =
        "name is too short. Must be at least 10 characters.";
      nameError.className = "text-error";
    } else if (error.message === "invalidName") {
      nameError.textContent = "name denied. Must be only letters";
      nameError.className = "text-error";
    }

    return false;
  }
}



document
  .getElementById("passwordInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let fullname = document.getElementById("passwordInput");
      if (!checkPassword()) {
        event.preventDefault();
        fullname.value = "";
      }
    }
  });
document.getElementById("passwordInput").addEventListener("input", function () {
  document.getElementById("passwordError").textContent = "";
  this.classList.remove("error");
});
function checkPassword() {
  let passwordInput = document.getElementById("passwordInput");
  let passwordError = document.getElementById("passwordError");

  passwordInput.classList.remove("error");
  passwordError.textContent = "";

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  try {
    let password = passwordInput.value.trim();
    if (!password) throw new Error("emptyPassword");
    if (password.length < 8) throw new Error("tooShort");
    if (!passwordRegex.test(password)) throw new Error("weak");

    return true;
  } catch (error) {
    passwordInput.classList.add("error");

    if (error.message === "emptyPassword") {
      passwordError.textContent =
        "Password field is empty. Please enter a password.";
      passwordError.className = "empty-password";
    } else if (error.message === "tooShort") {
      passwordError.textContent =
        "Password is too short. Enter at least 8 characters.";
      passwordError.className = "empty-password";
    } else if (error.message === "weak") {
      passwordError.textContent = "Password is too weak. Try again";
      passwordError.className = "empty-password";
    }

    return false;
  }
}


    
document
  .getElementById("confirm-password")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let validPassword = document.getElementById("confirm-password");
      if (!confirmPassword()) {
        event.preventDefault();
        fullname.value = "";
      }
    }
  });
document
  .getElementById("confirm-password")
  .addEventListener("input", function () {
    document.getElementById("confirmPasswordError").textContent = "";
    this.classList.remove("error");
  });
function confirmPassword() {
  let passwordInput = document.getElementById("passwordInput");
  let confirmPasswordInput = document.getElementById("confirm-password");
  let confirmPasswordError = document.getElementById("confirmPasswordError");

  confirmPasswordInput.classList.remove("error");
  confirmPasswordError.textContent = "";

  try {
    let password = passwordInput.value.trim();
    let confirmPassword = confirmPasswordInput.value.trim();
    if (!confirmPassword) throw new Error("Please confirm your password.");
    if (password !== confirmPassword)
      throw new Error("Passwords do not match. Please re-enter.");

    console.log("Password is valid and matches the confirmation password.");
    return true;
  } catch (error) {
    confirmPasswordInput.classList.add("error");
    confirmPasswordError.textContent = error.message;
    confirmPasswordError.classname = "invalid";
    return false;
  }
}

function validateForm() {
  let isPasswordValid = checkPassword();
  let isConfirmPasswordValid = confirmPassword();
  let isName = checkFullname();
  return isName && isPasswordValid && isConfirmPasswordValid;
}
