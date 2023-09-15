<template>
  <div>
    <header class="table-div">
      <table>
        <tr>
          <td>
            <img class="img" src="../static/img/diego.jpg" alt="Logo">
          </td>
          <td>
            <h1>
              DIEGO DAVID ABRAHAM<br>
              <b>FERNÁNDEZ VELÁSQUEZ</b>
            </h1>
            <h6 style="text-align: left">Estudiante de Ingenieria Civil en Computación</h6>
          </td>
          <td class="personal-data">
            <table>
              <tr>
                <td>20.509.736-8</td>
                <td>
                  <img src="../static/img/id.png" alt="Logo">
                </td>
              </tr>
              <tr>
                <td>Curico, Maule, Chile</td>
                <td>
                  <img src="../static/img/lugar.png" alt="Logo">
                </td>
              </tr>
              <tr>
                <td>+56 9 4189 3895</td>
                <td>
                  <img src="../static/img/numero.png" alt="Logo">
                </td>
              </tr>
              <tr>
                <td>dfernandez19@alumnos.utalca.cl</td>
                <td>
                  <img src="../static/img/email.png" alt="Logo">
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.linkedin.com/in/diego-fern%C3%A1ndez-0b853b261?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVt1BZ0cKRXWDbAIU2EtN%2BQ%3D%3D" target="_blank">LinkedIn</a>
                </td>
                <td>
                  <img src="../static/img/linkedin.png" alt="Logo">
                </td>
              </tr>
              <tr>
                <td>
                  <a href="github.com/prodiegus" target="_blank">GitHub</a>
                </td>
                <td>
                  <img src="../static/img/github.png" alt="Logo">
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </header>
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
  template {
    font-family: "Times New Roman", Times, serif;
  }
  header a {
    color: aliceblue;
    text-decoration: underline;
  }
</style>
