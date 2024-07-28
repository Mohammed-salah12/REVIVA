function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.classList.contains("sidebar-open")) {
    sidebar.classList.remove("sidebar-open");
  } else {
    sidebar.classList.add("sidebar-open");
  }
}
function toggleSidebar() {
  document.getElementById("mySidebar").classList.toggle("sidebar-open");
}
