const toggleThemeButton = document.getElementById('toggle-theme');
        const body = document.body;
        
        toggleThemeButton.addEventListener('click', function() {
          body.classList.toggle('dark-theme');
        });

        console.log(toggleThemeButton);

