var length;
var special_char;

let password_length = document.getElementById("length");
let password_label = document.getElementById("passwordLabel");

password_length.addEventListener("input", function () {
  length = Number(password_length.value);
  if (!Number.isInteger(length)) {
    validateLengthType();
  }
});

let checkbox = document.getElementById("special_char");

checkbox.addEventListener("change", function () {
  let bool_value = checkbox.value;
  if (bool_value === "on") {
    special_char = true;
  }
});

function submit() {
  generatePassword(length, special_char);
}

function generatePassword(length, special_char) {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()_+{}[]<>?";

  let charset = uppercaseChars + lowercaseChars + numbers;
  if (special_char === true) {
    charset += specialChars;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  updateGeneratedPassword(password);
}

function updateGeneratedPassword(password) {
  let password_field = document.getElementsByClassName("generatedPasswordField");
  password_field[0].value = password;
  password_field[0].style.background = "#34eb49"
  password_field[0].style.color = "#fff";
  password_field[0].style.fontSize = "24px";
  password_field[0].style.border = "none";
}

function validateLengthType() {
  let error = document.createElement("div");
  error.classList.add("error");
  error.innerHTML = '<span class="text-danger">Length can be integer</span>';
  password_label.appendChild(error);
  password_length.disabled = true;
}
