// Select the menu icon and sidebar
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');

// Function to open the sidebar
menuIcon.addEventListener('click', (event) => {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
        document.body.style.overflow = ''; // Enable scrolling
    }
    event.stopPropagation(); // Prevent click event from propagating to the document
});

// Close the sidebar when clicking anywhere else on the document
document.addEventListener('click', () => {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        document.body.style.overflow = ''; // Enable scrolling
    }
});

// Prevent clicks inside the sidebar from closing it
sidebar.addEventListener('click', (event) => {
    event.stopPropagation();
});
