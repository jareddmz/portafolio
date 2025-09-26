<template>
  <nav class="navbar navbar-expand-lg fixed-top tech-navbar">
    <div class="container">
      <!-- Logo/Brand -->
      <router-link class="navbar-brand tech-brand" to="/">
        <div class="brand-container">
          <img src="@/assets/images/logo.png" class="logo-img" alt="Logo"/>
          <div class="brand-text">
            <span class="gradient-text fw-bold">Portafolio</span>
          </div>
        </div>
      </router-link>
      
      <!-- Toggler para móvil -->
      <button 
        class="navbar-toggler tech-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="toggler-icon">
          <i class="bi bi-list"></i>
        </span>
      </button>

      <!-- Collapse Menu -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link tech-nav-link" to="/" exact-active-class="active">
              <i class="bi bi-house me-2"></i>Inicio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link tech-nav-link" to="/portafolio" exact-active-class="active">
              <i class="bi bi-briefcase me-2"></i>Portafolio
            </router-link>
          </li>
        </ul>
        
        <!-- Social Links -->
        <div class="social-links-container d-flex gap-2 ms-3">
          <a href="https://www.youtube.com/@reptalrider/videos" target="_blank" class="tech-social-link" title="YouTube">
            <i class="bi bi-youtube"></i>
          </a>
          <a href="https://github.com/jareddmz" target="_blank" class="tech-social-link" title="GitHub">
            <i class="bi bi-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jareddmz/" target="_blank" class="tech-social-link" title="LinkedIn">
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

