import { user } from "./JSONs/user.json";
import "./sass/_logInStyle.scss";

const app = document.querySelector("#app");
const form = document.createElement("form");
const emailInput = document.createElement("input");
const passwordInput = document.createElement("input");
const submitButton = document.createElement("a");
const formHeader = document.createElement("h2");
const backgroundImg = document.createElement("img");
formHeader.classList.add("login__form-header");
passwordInput.type = "password";
emailInput.type = "email";
formHeader.textContent = "WELCOME!";
passwordInput.placeholder = "Enter Password...";
emailInput.placeholder = "Enter Email...";
backgroundImg.src = "";
form.classList.add("login__form");
emailInput.classList.add("login__email");
passwordInput.classList.add("login__password");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailInput.value === user.email) {
    console.log("user.email :>> ", user.email);
    if (passwordInput.value === user.password) {
      window.location.href = "webpage.html";
    }
  }
});
submitButton.classList.add("login__button");
submitButton.textContent = "Submit";
form.appendChild(formHeader);
form.appendChild(emailInput);
form.appendChild(passwordInput);

form.appendChild(submitButton);
app?.appendChild(form);
