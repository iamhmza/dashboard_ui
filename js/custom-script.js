/*================================================================================
	Item Name: Materialize - Material Design Admin Template
	Version: 3.0
	Author: GeeksLabs
	Author URL: http://www.themeforest.net/user/geekslabs
================================================================================

NOTE:
------
PLACE HERE YOUR OWN JS CODES AND IF NEEDED.
WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR CUSTOM SCRIPT IT'S BETTER LIKE THIS. */

const mn_btn = document.querySelector("#nav-menu"),
  menu = document.querySelector("#collapsed_menu");

mn_btn.addEventListener("click", function() {
  const isCollapsed = menu.classList.contains("collapsed");
  if (isCollapsed) {
    menu.classList.remove("collapsed");
  } else {
    menu.classList.add("collapsed");
  }
});
