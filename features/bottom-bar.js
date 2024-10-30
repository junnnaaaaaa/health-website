        document.addEventListener("DOMContentLoaded", function() {
            fetch('../features/bottom-bar.html')
                .then(response => response.text())
                .then(data => {
                    document.getElementById('bottom-bar').innerHTML = data;
                })
                .catch(error => console.error('Error loading the HTML file:', error));
        });

