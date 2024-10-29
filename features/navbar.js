fetch('../features/navbar.html')
    .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
    })
    .then(data => {
        document.getElementById('navbar').innerHTML = data;

        // Get the current URL path
        const currentPath = window.location.pathname.split('/').pop();
        
        // Add the active class to the corresponding link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(currentPath)) {
                link.classList.add('active');
            }
        });
    })
    .catch(error => console.error('Error loading navbar:', error));

