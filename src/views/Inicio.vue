<template>
  <div class="container mb-5">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="h2 text-primary mt-4">Sobre mi</h1>
        <p>Líder y desarrollador de software, e trabajado grandes proyectos a cortos plazos en equipo grandes y pequeños, me gusta aprender e investigar acerca de la protección de datos y buenas practicas de programación en los lenguajes que me encuentre trabajando, realizando trabajos profesionales, seguros y fáciles de usar, tanto en el ámbito privado como en el público (gobiernos), e desarrollado, migrado y desplegado decenas de proyectos de toda índole, e asesorado a empresas para la adquisición y adopción de equipos y tecnologías de acuerdo a la necesidad.</p>
        <p>Mi pasión es el código, las motos, los autos y la naturaleza en mi tiempo libre, puedes echarle un vistazo a mi <a href="https://www.youtube.com/@reptalrider/videos" target="_blank">motovlog</a>.</p>
        <p>Te invito a que le des un vistazo a algunos de los proyectos que te puedo mostrar.</p>
        <router-link to="/portafolio" class="btn btn-primary">
          <i class="bi bi-briefcase"></i> Portafolio
        </router-link>
      </div>

      <div class="col-12 text-center">
        <h3 class="text-primary my-5">Lenguajes de programación</h3>
        <div class="row justify-content-center">
          <div class="col-6 col-md-4 d-flex justify-content-center">
            <img src="@/assets/images/logos/lenguajes/php.png" class="img-fluid rounded shadow mb-4"/>
          </div>
          <div class="col-6 col-md-4 d-flex justify-content-center">
            <img src="@/assets/images/logos/lenguajes/javascript.png" class="img-fluid rounded shadow mb-4"/>
          </div>
          <div class="col-6 col-md-4 d-flex justify-content-center">
            <img src="@/assets/images/logos/lenguajes/python.png" class="img-fluid rounded shadow mb-4"/>
          </div>
        </div>

        <h3 class="text-primary my-5">Bases de datos</h3>
        <div class="row justify-content-center">
          <div class="col-6 col-md-2 d-flex justify-content-center">
            <img src="@/assets/images/logos/dbs/mariadb.png" class="img-fluid rounded shadow mb-4"/>
          </div>
          <div class="col-6 col-md-2 d-flex justify-content-center">
            <img src="@/assets/images/logos/dbs/mongodb.png" class="img-fluid rounded shadow mb-4"/>
          </div>
          <div class="col-6 col-md-2 d-flex justify-content-center">
            <img src="@/assets/images/logos/dbs/mysql.png" class="img-fluid rounded shadow mb-4"/>
          </div>
          <div class="col-6 col-md-2 d-flex justify-content-center">
            <img src="@/assets/images/logos/dbs/postgresql.png" class="img-fluid rounded shadow mb-4"/>
          </div>
          <div class="col-6 col-md-2 d-flex justify-content-center">
            <img src="@/assets/images/logos/dbs/sqlserver.png" class="img-fluid rounded shadow mb-4"/>
          </div>
        </div>

        <h3 class="text-primary my-5">Frameworks</h3>
        <div class="row justify-content-center">
          <div class="col-6 col-md-2 d-flex justify-content-center rounded shadow p-3 mb-4">
            <img src="@/assets/images/logos/frameworks/laravel.png" class="img-fluid"/>
          </div>
          <div class="col-6 col-md-2 d-flex justify-content-center rounded shadow p-3 mb-4">
            <img src="@/assets/images/logos/frameworks/vue.png" class="img-fluid"/>
          </div>
          <div class="col-6 col-md-2 d-flex justify-content-center rounded shadow p-3 mb-4">
            <img src="@/assets/images/logos/frameworks/adonis.png" class="img-fluid"/>
          </div>
          <div class="col-6 col-md-2 d-flex justify-content-center rounded shadow p-3 mb-4">
            <img src="@/assets/images/logos/frameworks/ionic.png" class="img-fluid"/>
          </div>
          <div class="col-6 col-md-2 d-flex justify-content-center rounded shadow p-3 mb-4">
            <img src="@/assets/images/logos/frameworks/express.png" class="img-fluid"/>
          </div>
        </div>

        <h3 class="text-primary my-5">Complementos</h3>
        <div class="row">
          <div class="col-6 col-md-3 d-flex justify-content-center">
            <img src="@/assets/images/logos/plugins/docker.png" class="img-fluid rounded shadow mb-4"/>
          </div>
          <div class="col-6 col-md-3 d-flex justify-content-center">
            <img src="@/assets/images/logos/plugins/git.png" class="img-fluid rounded shadow mb-4"/>
          </div>
          <div class="col-6 col-md-3 d-flex justify-content-center">
            <img src="@/assets/images/logos/plugins/node.png" class="img-fluid rounded shadow mb-4"/>
          </div>
          <div class="col-6 col-md-3 d-flex justify-content-center">
            <img src="@/assets/images/logos/plugins/openlayers.png" class="img-fluid rounded shadow mb-4"/>
          </div>
        </div>

        <h3 class="text-primary my-5">Deploy</h3>
        <div class="row">
          <div class="col-6 d-flex justify-content-center">
            <img src="@/assets/images/logos/deploy/aws.png" class="img-fluid rounded shadow p-2 mb-4"/>
          </div>
          <div class="col-6 d-flex justify-content-center">
            <img src="@/assets/images/logos/deploy/hostinger.png" class="img-fluid rounded shadow p-2 mb-4"/>
          </div>
        </div>

        <h3 class="text-primary my-5">Certificaciones digitales</h3>
        <div class="row">
          <div class="col-6 d-flex justify-content-center">
            <img src="@/assets/images/cursos/certification_introduction-to-cybersecurity.png" class="img-fluid rounded shadow p-2 mb-4"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.img-fluid {
  max-width: 100px;
  max-height: auto;
}
</style>