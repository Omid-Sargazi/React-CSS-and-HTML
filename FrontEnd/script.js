document.querySelectorAll('.category-item > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Get the corresponding sub-menu
        const subMenu = this.parentElement.querySelector('.sub-menu');
        
        // If subMenu exists, show it in the modal
        if (subMenu) {
            document.getElementById('modal-body').innerHTML = subMenu.innerHTML;
            document.getElementById('modal').style.display = 'block';
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
