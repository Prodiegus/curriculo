<template>
  <div class="font-type">
    <header class="container-fluid table-div">
      <div class="row">
        <div class="col-2">
          <img class="img" src="../static/img/diego.jpg">
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
                    <img src="../static/img/id.png">
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
                    <img src="../static/img/lugar.png">
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
                    <img src="../static/img/numero.png">
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
                    <img src="../static/img/email.png">
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
                    <img src="../static/img/linkedin.png">
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
                    <img src="../static/img/github.png">
                  </div>
                </div>
              </div>
            </li>
          </lu>
        </div>
      </div>
    </header>
    <article class="container">
      <div class="row">
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
      <div class="row">
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
                2014 - 2018
              </p>
              <p>
                Curso de inglés por municipalidad de Colina
              </p>
              <p>
                Pasantia a Nueva Yorl, para perfecionar el idioma inglés
              </p>
              <p>
                Partisipación en programa yo C+ de la Universidad Federico Santa María para aprendizaje de programación competitiva en C++
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
    </article>
  </div>
</template>

<script>
  // Path: pages/index.vue
  import {hola} from "@/static/js/index.js";
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
    mounted() {
      hola();
    },
    methods: {
      // Métodos personalizados del componente
      holaMundo(){
        hola();
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
