const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});


//  Form Validation :
document.querySelector("form").addEventListener("submit", function(e) {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  if (name === "" || email === "") {
    alert("Please fill all fields!");
    e.preventDefault();
  } else {
    alert("Form submitted successfully ");
  }
});


//  Image Zoom :
const img = document.querySelector("img");
img.addEventListener("click", () => {
    img.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
});

