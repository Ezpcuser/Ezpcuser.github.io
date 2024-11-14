// Modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  
    // Guardar la preferencia en localStorage para mantener el modo activo al recargar la página
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
  }
  
  // Verificar el modo preferido del usuario al cargar la página
  window.onload = function() {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
      document.body.classList.add("dark-mode");
    }
  };
// Cambiar color al pasar el mouse
document.querySelectorAll('a').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = 'orange';
    });
    item.addEventListener('mouseout', () => {
        item.style.color = '';
    });
});

function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    const mainContent = document.getElementById('mainContent');

    menuContent.classList.toggle('show');
    mainContent.classList.toggle('shifted');
}

// Popup
document.addEventListener("DOMContentLoaded", function () {
    // Mostrar el popup solo si no se ha aceptado la política antes
    if (!localStorage.getItem("privacyAccepted")) {
        document.getElementById("privacyPopup").style.display = "flex";
    }
});

function acceptPrivacy() {
    // Guardar en localStorage que el usuario ha aceptado la política
    localStorage.setItem("privacyAccepted", "true");
    // Ocultar el popup
    document.getElementById("privacyPopup").style.display = "none";
}

