<template>
  <nav class="navbar bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style="cursor: pointer;">
        <img src="@/assets/images/logo.png" class="img-fluid rounded-circle"/>
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="offcanvas offcanvas-end w-auto" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header pb-0">
          <router-link to="/">
            <img src="@/assets/images/logo.png" class="img-fluid rounded-circle"/>
          </router-link>
          <h5 class="offcanvas-title mx-5" id="offcanvasNavbarLabel">Menú</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <hr>

        <div class="offcanvas-body pt-0">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <router-link to="/" exact-active-class="active" class="nav-link">
                <i class="bi bi-house"></i> Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/portafolio" exact-active-class="active" class="nav-link">
                <i class="bi bi-briefcase"></i> Portafolio
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.img-fluid {
  max-width: 40px;
}
</style>