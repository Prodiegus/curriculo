// Obtén el elemento del header y el desplazamiento actual de la página
let header = document.getElementById("header");
let initialHeader = document.querySelector("header");
// La posición donde deseas cambiar el contenido del header
let scrollThreshold = 100;

// Función para cambiar el contenido del header al hacer scroll
function changeHeaderContent(let header, let initialHeader, let scrollThreshold) {
  if (window.pageYOffset >= scrollThreshold) {
    // Cambia el contenido del header al hacer scroll
    header.innerHTML = "<div>Nombre de la Empresa</div>";
    header.classList.add("table-div");
    initialHeader.style.display = "none"; // Oculta el contenido original del header
  } else {
    // Vuelve al contenido original del header
    header.innerHTML = `
     <div class="row">
        <div class="col-2">
          <img class="img" src="../img/diego.jpg" alt="yo">
        </div>
        <div class="col-4 vertical">
          <h1>Diego David Abraham<br>
          <b>Fernández Velásquez</b></h1>
        </div>
        <div class="col">
          <lu class="personal-data text-right">
            <li>
              <div class="container">
                <div class="row">
                  <div class="col">
                    20.509.736-8
                  </div>
                  <div class="col-1">
                    <img src="../img/id.png" alt="RUT">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="container">
                <div class="row">
                  <div class="col">
                    Cúrico, Maule, Chile
                  </div>
                  <div class="col-1">
                    <img src="../img/lugar.png" alt="ubicacion">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="container">
                <div class="row">
                  <div class="col">
                    +56 9 4189 3895
                  </div>
                  <div class="col-1">
                    <img src="../img/numero.png" alt="telefono">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="container">
                <div class="row">
                  <div class="col">
                    dfernandez19@alumnos.utalca.cl
                  </div>
                  <div class="col-1">
                    <img src="../img/email.png" alt="email">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <a href="www.linkedin.com/in/dfernandez" target="_blank">Linkedin</a>
                  </div>
                  <div class="col-1">
                    <img src="../img/linkedin.png" alt="linkedin">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <a href="www.github.com/Prodiegus" target="_blank">Github</a>
                  </div>
                  <div class="col-1">
                    <img src="../img/github.png" alt="github">
                  </div>
                </div>
              </div>
            </li>
          </lu>
        </div>
      </div>`;
    header.classList.remove("table-div");
    initialHeader.classList.add("table-div");
    initialHeader.classList.add("container-fluid");
    initialHeader.style.display = "block"; // Muestra el contenido original del header
  }
}

// Agrega un evento de desplazamiento para llamar a la función
//window.addEventListener("scroll", changeHeaderContent);



