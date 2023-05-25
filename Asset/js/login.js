  
/*==================== DARK LIGHT THEME ====================*/ 


document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'uil-sun';
  
    // Previously selected theme (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');
  
    // Function to enable dark mode
    const enableDarkMode = () => {
      document.body.classList.add(darkTheme);
      themeButton.classList.add(iconTheme);
      localStorage.setItem('selected-theme', 'dark');
      localStorage.setItem('selected-icon', 'uil-moon');
    };
  
    // Function to disable dark mode
    const disableDarkMode = () => {
      document.body.classList.remove(darkTheme);
      themeButton.classList.remove(iconTheme);
      localStorage.setItem('selected-theme', 'light');
      localStorage.setItem('selected-icon', 'uil-sun');
    };
  
    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
    const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
  
    // We validate if the user previously chose a theme
    if (selectedTheme) {
      // If the validation is fulfilled, we ask what the theme was to know if we activated or deactivated the dark theme
      if (selectedTheme === 'dark') {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    }
  
    // Toggle between dark and light mode
    themeButton.addEventListener('click', () => {
      if (getCurrentTheme() === 'dark') {
        disableDarkMode();
      } else {
        enableDarkMode();
      }
    });
  });
  
  
  // =================== log in ===================
  const inputs = document.querySelectorAll(".login__input");
  
  
  function addcl(){
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
  }
  
  function remcl(){
      let parent = this.parentNode.parentNode;
      if(this.value == ""){
          parent.classList.remove("focus");
      }
  }
  
  
  inputs.forEach(input => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
  });
  