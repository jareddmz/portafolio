<template>
  <div class="d-flex align-items-center min-vh-100">
    <div class="container-fluid text-center">
      <h1 class="text-primary">Error 404</h1>
      <h3>Página no encontrada</h3>
      <button href="#" class="btn btn-outline-primary">
        <router-link class="nav-link" active-class="active" :to="'/'">
          Regresar al inicio
        </router-link>
      </button>
    </div>
  </div>
</template>
