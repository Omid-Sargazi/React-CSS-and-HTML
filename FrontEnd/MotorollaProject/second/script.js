document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("#menu-secondary > .menu-item");
    const nestedDisplay = document.getElementById("nested-display");
    const nestedList = document.getElementById("nested-list");
    const backButton = document.getElementById("back-button");

    menuItems.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default behavior

            // Find the nested sub-menu within the clicked item
            const subMenu = item.querySelector(".sub-menu");

            if (subMenu) {
                // Clear and populate the nested display with the sub-menu's content
                nestedList.innerHTML = "";
                const clonedMenu = subMenu.cloneNode(true);
                nestedList.appendChild(clonedMenu);

                // Show the nested display container
                nestedDisplay.style.display = "block";
            }
        });
    });

    // Back button to return to the main menu
    backButton.addEventListener("click", () => {
        nestedDisplay.style.display = "none"; // Hide the nested display
    });
});
