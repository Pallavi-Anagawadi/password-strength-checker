function togglePassword() {
  let pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

function checkStrength() {
  let pwd = document.getElementById("password").value;
  let bar = document.getElementById("progress-bar");
  let text = document.getElementById("strength-text");

  let strength = 0;

  // Rules
  let length = pwd.length >= 8;
  let upper = /[A-Z]/.test(pwd);
  let lower = /[a-z]/.test(pwd);
  let number = /[0-9]/.test(pwd);
  let special = /[^A-Za-z0-9]/.test(pwd);

  updateRule("length", length);
  updateRule("upper", upper);
  updateRule("lower", lower);
  updateRule("number", number);
  updateRule("special", special);

  strength = [length, upper, lower, number, special].filter(Boolean).length;

  bar.style.width = (strength * 20) + "%";

  if (strength <= 2) {
    bar.style.background = "red";
    text.innerText = "Weak Password";
  } else if (strength <= 4) {
    bar.style.background = "orange";
    text.innerText = "Medium Password";
  } else {
    bar.style.background = "green";
    text.innerText = "Strong Password";
  }
}

function updateRule(id, condition) {
  let rule = document.getElementById(id);
  rule.innerText = condition ? "✅ " + rule.innerText.slice(2) : "❌ " + rule.innerText.slice(2);
}
