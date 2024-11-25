const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

echo "# Animated-Navgation" >> README.md
git init
git add .
git commit -m "feat: complete"
git remote add origin git@github.com:ChrisRoland/Animated-Navgation.git
git push