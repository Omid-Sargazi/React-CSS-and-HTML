let modalOpen = false; // Track the modal state

document.querySelectorAll('.category-item > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        const subMenu = this.parentElement.querySelector('.sub-menu');

        // Only open the modal if there is a sub-menu
        if (subMenu) {
            const modal = document.getElementById('modal');

            if (modalOpen) {
                // If modal is already open, close it first
                closeModal(() => {
                    // After closing, open the modal with the new content
                    openModal(subMenu);
                });
            } else {
                // If modal is not open, open it directly
                openModal(subMenu);
            }
        }
    });
});

// Function to open the modal with the corresponding sub-menu
function openModal(subMenu) {
    const subMenuClone = subMenu.cloneNode(true);
    document.getElementById('modal-body').innerHTML = subMenuClone.innerHTML; // Show the sub-menu in the modal

    const modal = document.getElementById('modal');
    modal.style.display = 'block'; // Set display to block
    setTimeout(() => {
        modal.style.right = '0'; // Animate to the right
    }, 10); // Slight delay to allow for transition effect

    modalOpen = true; // Set modal state to open

    // Add click event listeners for dropdown functionality
    addDropdownFunctionality(document.getElementById('modal-body'));
}

// Function to close the modal
function closeModal(callback) {
    const modal = document.getElementById('modal');
    modal.style.right = '-100%'; // Slide out to the right
    setTimeout(() => {
        modal.style.display = 'none'; // Hide after animation completes
        modalOpen = false; // Set modal state to closed
        if (callback) callback(); // Execute callback if provided
    }, 2000); // Match this with the transition duration
}

// Close the modal when the close button is clicked
document.querySelector('.close-button').addEventListener('click', () => {
    closeModal();
});

// Close the modal when clicking anywhere outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    const modalContent = document.querySelector('.modal-content');
    // Check if the click target is the modal background or outside the modal content
    if (event.target === modal || !modalContent.contains(event.target)) {
        closeModal(); // Call the close function
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
