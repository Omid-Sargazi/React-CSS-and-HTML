document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Close other opened menus
            menuItems.forEach(innerItem => {
                if (innerItem !== item) {
                    innerItem.classList.remove('clicked');
                }
            });

            // Toggle the current item
            item.classList.toggle('clicked');

            // Stop propagation to prevent the click from propagating to the parent element
            e.stopPropagation();
        });
    });

    // Close the menu if the user clicks outside
    document.addEventListener('click', () => {
        menuItems.forEach(item => {
            item.classList.remove('clicked');
        });
    });
});
