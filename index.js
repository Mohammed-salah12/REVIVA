function toggleSidebar() {
  const sidebar = document.getElementById("mySidebar");
  if (sidebar.classList.contains("sidebar-open")) {
    sidebar.classList.remove("sidebar-open");
  } else {
    sidebar.classList.add("sidebar-open");
  }
}

// Close sidebar when clicking outside of it
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("mySidebar");
  const toggleBtn = document.querySelector(".sidebar-btn");
  if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
    sidebar.classList.remove("sidebar-open");
  }
});
function toggleSidebar() {
  document.getElementById("mySidebar").classList.toggle("sidebar-open");
}

document.addEventListener("DOMContentLoaded", function () {
  const languageDropdown = document.getElementById("languageDropdown");
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const body = document.body;

  // Set initial direction based on the default language (Arabic)
  body.setAttribute("dir", "rtl");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedLang = this.getAttribute("data-lang");

      if (selectedLang === "en") {
        body.setAttribute("dir", "ltr");
        languageDropdown.innerText = "EN";
      } else if (selectedLang === "ar") {
        body.setAttribute("dir", "rtl");
        languageDropdown.innerText = "ع";
      }
    });
  });
});

function toggleSidebar() {
  document.getElementById("mySidebar").classList.toggle("sidebar-open");
}
