// Handling the click event for main category items (li)
document.querySelectorAll('.category-item > a').forEach(item => {
  item.addEventListener('click', function(e) {
    const subMenu = this.nextElementSibling; // Get the corresponding sub-menu

    if (subMenu && subMenu.classList.contains('sub-menu')) {
      // If the sub-menu is already open, close it, else open it
      const isOpen = subMenu.classList.contains('open');
      
      // Close any other open sub-menus
      document.querySelectorAll('.sub-menu').forEach(menu => {
        menu.classList.remove('open');
      });

      if (!isOpen) {
        subMenu.classList.add('open'); // Open the current sub-menu
      }
      e.preventDefault(); // Prevent default action (e.g., link redirection)
    }
  });
});

// Handling the click event for nested sub-menu items (li) to open dropdown
document.querySelectorAll('.sub-menu .category-item > a').forEach(item => {
  item.addEventListener('click', function(e) {
    const subSubMenu = this.nextElementSibling; // Get the corresponding sub-sub-menu

    if (subSubMenu && subSubMenu.classList.contains('sub-sub-menu')) {
      // If the sub-sub-menu is already open, close it, else open it
      const isOpen = subSubMenu.classList.contains('open');
      
      // Close any other open sub-sub-menus
      document.querySelectorAll('.sub-sub-menu').forEach(menu => {
        menu.classList.remove('open');
      });

      if (!isOpen) {
        subSubMenu.classList.add('open'); // Open the current sub-sub-menu
      }
      e.preventDefault(); // Prevent default action (e.g., link redirection)
    }
  });
});
