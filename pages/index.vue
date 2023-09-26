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
                      <a href="mailto:dfernandez19@alumnos.utalca.cl">
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
                    <a href="www.linkedin.com/in/dfernandez" target="_blank">Linkedin</a>
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
                    <a href="www.github.com/Prodiegus" target="_blank">Github</a>
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
                <li><a href="www.linkedin.com/in/dfernandez" target="_blank">Linkedin</a></li>
                <li><a href="www.github.com/Prodiegus" target="_blank">Github</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <article class="container separar-del-menu">
      <div id="sobre-mi" class="row">
        <div class="col-1">

        </div>
        <div class="col">
          <h3>SOBRE MI</h3>
          <p>
            Estudiante bilingüe de Ingeniería Civil en Computación con experiencia en liderar equipos y organizar proyectos, responsable, innovador y carismático. Con destacada pasión, dedicación e interés por mi carrera. Busco oportunidades para crecer profesionalmente en un entorno tecnológico dinámico.
          </p>
        </div>
        <div class="col-1">

        </div>
      </div>
      <div id="educacion" class="row">
        <div class="col-1">

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
        <div class="col-1">

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
        <div class="col-1">

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
        <div class="col-1">

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
