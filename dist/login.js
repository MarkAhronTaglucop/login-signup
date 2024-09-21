console.log("JavaScript file loaded");
const loginForm = document.getElementById("loginForm");

// loginForm.addEventListener("submit", function (event) {
//   if (!validLogin()) {
//     event.preventDefault();
//     //loginForm.reset();
//   }
// });

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
        if (validLogin()) {
      showToast();
    } else {
      loginForm.value = '';
    }
  });

document
  .getElementById("password")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let x = document.getElementById("password");
      if (!submitLogin()) {
        event.preventDefault();
        x.value = '';
      }
    }
  });
  document.getElementById("password").addEventListener("input", function () {
    document.getElementById("passwordError2").textContent = "";
    this.classList.remove("error");
  });

function submitLogin() {
  let passwordInput = document.getElementById("password");
  let passwordError = document.getElementById("passwordError2");

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  try {
    let password = passwordInput.value.trim();
    if (!password) throw new Error("Empty-pass");
    if (password.length < 8) throw new Error("short");
    if (!passwordRegex.test(password)) throw new Error("weak");

    return true;
  } catch (error) {
    passwordInput.classList.add("Error2");

    if (error.message === "Empty-pass") {
      passwordError.textContent =
        "Password field is empty. Please enter a password.";
      passwordError.className = "text-err";
    } else if (error.message === "short") {
      passwordError.textContent =
        "Password is too short. Must be at least 8 characters.";
      passwordError.className = "text-err";
    }else if (error.message === "weak") {
            passwordError.textContent = "Password doesnt match. it's too weak";
            passwordError.className = "text-err";
        }

    return false;
  }
}


function showToast() {
    console.log("Showing toast");
    const toast = document.getElementById('toast');
    toast.classList.remove('hidden');
    setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
}


function validLogin() {
  let isPasswordValid = submitLogin();
  return isPasswordValid;
}



