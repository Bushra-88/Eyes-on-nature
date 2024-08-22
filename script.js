function changeTheme() {
  let body = document.querySelector("body");
  // body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let themButton = document.querySelector(".theme-button");
themButton.addEventListener("click", changeTheme);
