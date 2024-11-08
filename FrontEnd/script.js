document.querySelectorAll('.category-item > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the corresponding sub-menu
        const subMenu = this.parentElement.querySelector('.sub-menu');

        // If subMenu exists, show it in the modal
        if (subMenu) {
            // Clone the sub-menu HTML to avoid altering the original
            const subMenuClone = subMenu.cloneNode(true);
            document.getElementById('modal-body').innerHTML = subMenuClone.innerHTML; // Show the sub-menu in the modal
            document.getElementById('modal').style.display = 'block'; // Open the modal

            // Add click event listeners to the nested list items for dropdown functionality
            addDropdownFunctionality(document.getElementById('modal-body'));
        }
    });
});

// Close the modal when the close button is clicked
document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Close the modal when clicking anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Function to handle dropdown functionality for nested lists
function addDropdownFunctionality(container) {
    container.querySelectorAll('li > a').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const nestedSubMenu = this.nextElementSibling; // Get the next sibling (sub-menu)

            // Check if the next sibling is a sub-menu and toggle its display
            if (nestedSubMenu && nestedSubMenu.classList.contains('sub-menu')) {
                nestedSubMenu.style.display = nestedSubMenu.style.display === 'none' || nestedSubMenu.style.display === '' ? 'block' : 'none';
            }
        });
    });
}
