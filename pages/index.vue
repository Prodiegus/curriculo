<template>
  <div class="font-type">
    <header id="header" class="container-fluid table-div">
      <div class="row">
        <div class="col-2 center">
          <img class="img" src="../static/img/diego.jpg" alt="yo">
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
                    <img src="../static/img/id.png" alt="RUT">
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
                    <img src="../static/img/lugar.png" alt="ubicacion">
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
                    <img src="../static/img/numero.png" alt="telefono">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="container">
                <div class="row">
                  <div class="col">
                      <a href="mailto:dfernandez19@alumnos.utalca.cl" title="hablemos por correo">
                        dfernandez19@alumnos.utalca.cl
                      </a>
                  </div>
                  <div class="col-1">
                    <img src="../static/img/email.png" alt="email">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <a href="https://www.linkedin.com/in/dfernandez" target="_blank" title="Este es un enlace a mi linkedin">
                      Linkedin
                    </a>
                  </div>
                  <div class="col-1">
                    <img src="../static/img/linkedin.png" alt="linkedin">
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <a href="https://www.github.com/Prodiegus" target="_blank" title="Este es un enlace a mi github">
                      Github
                    </a>
                  </div>
                  <div class="col-1">
                    <img src="../static/img/github.png" alt="github">
                  </div>
                </div>
              </div>
            </li>
          </lu>
        </div>
      </div>
    </header>
    <header v-show="stickyHeader" class="container-fluid table-div-sticky" :style="{opacity: stickyHeaderOpacity}">
      <div class="row">
        <div class="col" style="padding-left: 10px">
          <h1>Diego <b>Fernández</b></h1>
        </div>
        <div class="col-2">

        </div>
        <div class="col">
          <ul class="menu-list">
            <li class="submenu"><a href="#">Inicio</a></li>
            <li class="submenu">
              <a href="#">Acerca de</a>
              <ul class="submenu-list">
                <li><a href="#sobre-mi">Sobre mi</a></li>
                <li><a href="#educacion">Educación</a></li>
                <li><a href="#experiencia">Experiencia</a></li>
                <li><a href="#programacion">Programación</a></li>
                <li><a href="#idiomas">Idiomas</a></li>
              </ul>
            </li>
            <li class="submenu">
              <a href="#">Contactame</a>
              <ul class="submenu-list">
                <li><a href="mailto:dfernandez19@alumnos.utalca.cl">Email</a></li>
                <li><a href="https://www.linkedin.com/in/dfernandez" target="_blank">Linkedin</a></li>
                <li><a href="https://www.github.com/Prodiegus" target="_blank">Github</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <article class="container separar-del-menu">
      <div id="sobre-mi" class="row">
        <div class="col-1 float-right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M22 1.75v14.5a.75.75 0 0 1-.399.662c-.384.204-.783-.035-1.139-.248l-.003-.002c-.09-.054-.177-.107-.261-.15a15.53 15.53 0 0 0-2-.849c-1.738-.607-4.321-1.223-7.703-1.251a.833.833 0 0 1 .005.088c0 2.279.494 4.279.906 5.547.368 1.131-.438 2.453-1.732 2.453H7.661c-.696 0-1.36-.42-1.6-1.129C5.684 20.255 5 17.811 5 14.75v-.457A5.5 5.5 0 0 1 6.5 3.5h3.75c3.505 0 6.175-.61 7.955-1.21a15.88 15.88 0 0 0 2.002-.82 9.21 9.21 0 0 0 .49-.262c.048-.028.095-.055.142-.085A.751.751 0 0 1 22 1.75ZM10.5 12.912c3.564.029 6.313.678 8.193 1.335.737.258 1.34.517 1.807.74V2.993c-.467.216-1.073.467-1.815.718-1.878.634-4.624 1.26-8.185 1.288ZM6.5 5a4 4 0 0 0 0 8H9V5Zm0 9.75c0 2.847.638 5.123.982 6.141.018.051.074.109.179.109h2.013c.087 0 .179-.043.249-.147a.396.396 0 0 0 .057-.343C9.537 19.148 9 16.986 9 14.5H6.5Z"></path></svg>
        </div>
        <div class="col">
          <h3>
            SOBRE MI
          </h3>
          <p>
            Estudiante bilingüe de Ingeniería Civil en Computación con experiencia en liderar equipos y organizar proyectos, responsable, innovador y carismático. Con destacada pasión, dedicación e interés por mi carrera. Busco oportunidades para crecer profesionalmente en un entorno tecnológico dinámico.
          </p>
        </div>
        <div class="col-1">

        </div>
      </div>
      <div id="educacion" class="row">
        <div class="col-1 float-right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.292 2.06v-.001l11.25 4.75a.749.749 0 0 1 0 1.382L19 10.108V15a.75.75 0 0 1-.11.391h-.001a2.84 2.84 0 0 1-.392.482c-.249.256-.625.58-1.163.896-1.08.638-2.776 1.23-5.334 1.23-.673 0-1.286-.041-1.846-.113a.75.75 0 0 1 .192-1.487c.492.063 1.042.1 1.654.1 2.317 0 3.746-.533 4.572-1.021.31-.178.596-.397.849-.65l.079-.085V10.74l-5.208 2.2a.75.75 0 0 1-.584 0L5.75 10.424v3.17c.502.129.96.391 1.327.758.579.578.923 1.41.923 2.428v4.5a.761.761 0 0 1-.345.634 2.157 2.157 0 0 1-.21.117 3.923 3.923 0 0 1-.52.213A6.121 6.121 0 0 1 5 22.532a6.092 6.092 0 0 1-1.925-.288 4.065 4.065 0 0 1-.52-.213 1.816 1.816 0 0 1-.22-.124.757.757 0 0 1-.335-.624v-4.5c0-1.02.344-1.85.923-2.43a2.904 2.904 0 0 1 1.327-.757V9.793L.458 8.19a.75.75 0 0 1 0-1.38l11.25-4.75a.75.75 0 0 1 .584 0ZM12 11.436 21.322 7.5 12 3.564 2.678 7.5ZM5 15c-.377 0-.745.141-1.017.413-.265.265-.483.7-.483 1.368v4.022c.299.105.797.228 1.5.228s1.201-.123 1.5-.228V16.78c0-.669-.218-1.103-.483-1.368A1.433 1.433 0 0 0 5 15Z"></path></svg>
        </div>
        <div class="col">
          <h3>EDUCACIÓN</h3>
          <lu style="list-style-type: none">
            <li>
              <h5>
                <b class="letra-morada">Ingeniería Civil en Computación</b>
                | Universidad de Talca
              </h5>
              <p>
                2019 - ACTUALIDAD
              </p>
              <p>
                Ayudante de profesor en Algoritmos y Estructuras de Datos
              </p>
              <p>
                Ayudante de profesor en Pensamiento Computacional
              </p>
              <p>
                Ayudante de profesor en Lenguajes y Paradigmas de la Programación
              </p>
              <p>
                Intercambio de Estudios a Universidad de Monterrey, México OT'22
              </p>
            </li>
            <li>
              <h5>
                <b class="letra-morada">Enseñanza Media</b>
                | Instituto Chacabuco de Colina
              </h5>
              <p>
                2015 - 2018
              </p>
              <p>
                Curso de inglés por municipalidad de Colina
              </p>
              <p>
                Pasantia a Nueva York, para perfecionar el idioma inglés
              </p>
              <p>
                Partisipación en programa yo C+ de la Universidad Federico Santa María para aprendizaje de programación competitiva en C++
              </p>
            </li>
            <li>
              <h5>
                <b class="letra-morada">Enseñanza Básica</b>
                | Colegio Abersan
              </h5>
              <p>
                2009 - 2014
              </p>
              <p>
                Participación en taller de folclore
              </p>
            </li>
            <li>
              <h5>
                <b class="letra-morada">Certificación PET B1</b>
                | Cambridge University
              </h5>
              <p>
                OCTUBRE DEL 2018
              </p>
            </li>
          </lu>
        </div>
        <div class="col-1">

        </div>
      </div>
      <div id="experiencia" class="row">
        <div class="col-1 float-right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path></svg>
        </div>
        <div class="col">
          <h3>EXPERIENCIA</h3>
          <lu style="list-style-type: none">
            <li>
              <h5>
                <b class="letra-morada">Administrador de Venta en Bodega</b>
                | Vital Uniformes
              </h5>
              <p>
                VERANO 2017
              </p>
              <p>
                Encargado de la venta de uniformes de colegios, atención al cliente, manejo de caja y inventario.
              </p>
            </li>
            <li>
              <h5>
                <b class="letra-morada">Operario de Paking</b>
                | Copefrut
              </h5>
              <p>
                TEMPORADA CEREZAS 2021
              </p>
              <p>
                Seguimiento de procesos industriales
              </p>
              <p>
                Trabajo en equipo
              </p>
            </li>
            <li>
              <h5>
                <b class="letra-morada">Asesor de Ventas</b>
                | Ripley
              </h5>
              <p>
                VERANO 2022
              </p>
              <p>
                Atención al cliente
              </p>
              <p>
                Manejo de caja
              </p>
              <p>
                Organización de productos
              </p>
              <p>
                Trabajo en equipo
              </p>
            </li>
          </lu>
        </div>
        <div class="col-1">

        </div>
      </div>
      <div id="programacion" class="row">
        <div class="col-1 float-right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 3a2 2 0 0 1 2-2h9.982a2 2 0 0 1 1.414.586l4.018 4.018A2 2 0 0 1 21 7.018V21a2 2 0 0 1-2 2H4.75a.75.75 0 0 1 0-1.5H19a.5.5 0 0 0 .5-.5V8.5h-4a2 2 0 0 1-2-2v-4H5a.5.5 0 0 0-.5.5v6.25a.75.75 0 0 1-1.5 0Zm12-.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0-.146-.336l-4.018-4.018A.5.5 0 0 0 15 2.5Z"></path><path d="M4.53 12.24a.75.75 0 0 1-.039 1.06l-2.639 2.45 2.64 2.45a.75.75 0 1 1-1.022 1.1l-3.23-3a.75.75 0 0 1 0-1.1l3.23-3a.75.75 0 0 1 1.06.04Zm3.979 1.06a.75.75 0 1 1 1.02-1.1l3.231 3a.75.75 0 0 1 0 1.1l-3.23 3a.75.75 0 1 1-1.021-1.1l2.639-2.45-2.64-2.45Z"></path></svg>
        </div>
        <div class="col">
          <h3>Programación</h3>
          <table class="programacion">
            <thead style="color: #291941">
              <tr>
                <th>Lenguajes</th>
                <th>Base de Datos</th>
                <th>Desarrollo Web</th>
                <th>Metodologías</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <lu>
                    <li>Java</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>C</li>
                  </lu>
                </td>
                <td>
                  <lu>
                    <li>postrgresSQL</li>
                    <li>MySQL</li>
                    <li>Azure</li>
                    <li>NoSQL</li>
                  </lu>
                </td>
                <td>
                  <lu>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                  </lu>
                </td>
                <td>
                  <lu>
                    <li>SCRUM</li>
                    <li>Manifiesto Ágil</li>
                    <li>Tradicionales</li>
                    <li>Tableros KANBAN</li>
                  </lu>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-1">

        </div>
      </div>
      <div id="idiomas" class="row">
        <div class="col-1 float-right">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M6.71 10H2.332l-.874 2.498a.75.75 0 0 1-1.415-.496l3.39-9.688a1.217 1.217 0 0 1 2.302.018l3.227 9.681a.75.75 0 0 1-1.423.474Zm3.13-4.358C10.53 4.374 11.87 4 13 4c1.5 0 3 .939 3 2.601v5.649a.75.75 0 0 1-1.448.275C13.995 12.82 13.3 13 12.5 13c-.77 0-1.514-.231-2.078-.709-.577-.488-.922-1.199-.922-2.041 0-.694.265-1.411.887-1.944C11 7.78 11.88 7.5 13 7.5h1.5v-.899c0-.54-.5-1.101-1.5-1.101-.869 0-1.528.282-1.84.858a.75.75 0 1 1-1.32-.716ZM6.21 8.5 4.574 3.594 2.857 8.5Zm8.29.5H13c-.881 0-1.375.22-1.637.444-.253.217-.363.5-.363.806 0 .408.155.697.39.896.249.21.63.354 1.11.354.732 0 1.26-.209 1.588-.449.35-.257.412-.495.412-.551Z"></path></svg>
        </div>
        <div class="col">
          <h3>Idiomas</h3>
          <lu style="list-style-type: none">
            <li>Español Nativo</li>
            <li>Inglés Intermedio-Avanzado</li>
            <li>Alemán Básico</li>
          </lu>
        </div>
        <div class="col-1">

        </div>
      </div>
    </article>
    <footer class="fondo-morado">
      <div class="container-fluid">
        <div class="row">
          <div class="col-1">

          </div>
          <div class="col">
            <p class="text-white" style="font-size: large">
              © 2021 Diego Fernández. Todos los derechos reservados.
            </p>
          </div>
          <div class="col-1">

          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  // Path: pages/index.vue
  export default {
    // Opciones de componentes de Nuxt.js
    head() {
      return {
        title: 'Diego Fernandez', // Cambia el título de la página
        meta: [
          {
            hid: 'Curriculo',
            name: 'curriculo',
            content: 'En esta página encontrarás mi currículo',
          },
        ],

      };
    },
    data() {
      return {
        stickyHeaderOpacity: 0,
        stickyHeader: false,
      };
    },
    mounted() {
      // Agregar un evento de desplazamiento para detectar cuando se activa el header sticky
      window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
      // Limpiar el evento de desplazamiento cuando se destruye el componente
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      // Métodos personalizados del componente
      handleScroll() {
        const scrollThreshold = 218;

        // Agregar un retraso antes de cambiar el estado
        clearTimeout(this.scrollTimer);
        this.scrollTimer = setTimeout(() => {
          // Verificar si se ha superado el umbral de desplazamiento
          this.stickyHeader = window.scrollY >= scrollThreshold;
          if (window.scrollY >= scrollThreshold) {
            this.stickyHeaderOpacity = 1; // Mostrar el header sticky con opacidad completa
          } else {
            this.stickyHeaderOpacity = 0; // Ocultar el header sticky
          }
        }, 0  ); // Ajusta el tiempo de retraso según tus necesidades
      },
    },
  };

</script>

<style scoped>
  /* Estilos específicos para esta página */
  @import "@/static/css/index.css"; /* Ruta al archivo CSS */
  header a {
    color: aliceblue;
    text-decoration: underline;
  }
</style>
