window.onload = function () {
  console.log("Conectado!");

  // Busca el botón que activa el estilo de alto contraste
  let botonAltoContraste = document.querySelector("#botonAltoContraste");

  let formulario = document.querySelector("form");
  
  // Añade un evento de click al botón de alto contraste
  botonAltoContraste.addEventListener("click", function () {
    // Busca el elemento link que contiene la hoja de estilos de alto contraste
    let altoContrasteCSS = document.querySelector("#altoContraste");
    
    // Verifica si el link de alto contraste existe en el DOM
    if (altoContrasteCSS) {
      // Elimina el link de la hoja de estilos de alto contraste
      altoContrasteCSS.parentNode.removeChild(altoContrasteCSS);
      this.textContent = "Estilo de Alto Contraste";
    } else {
      // Crea un nuevo link de hoja de estilos de alto contraste
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "./css/contraste.css";
      link.id = "altoContraste";
      document.head.appendChild(link);
      this.textContent = "Estilo Predeterminado"; // Cambia el texto del botón
    }
  });

  formulario.addEventListener("submit", function(e){
    e.preventDefault();
    alert("Formulario enviado con éxito!");
    this.reset();
  })
};
