// Select all elements with the class 'collapsible'
const collapsibleHeaders = document.querySelectorAll('.collapsible');

collapsibleHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Toggle 'active' class on the header to change arrow direction
        header.classList.toggle('active');

        // Select the next sibling element (the .content div) and toggle its display
        const content = header.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});
