<template>
  <div class="error-container">
    <div class="error-card glass-effect-dark">
      <div class="error-icon mb-4">
        <div class="glitch-container">
          <i class="bi bi-bug-fill error-bug floating-element"></i>
        </div>
      </div>
      
      <div class="error-number glitch-effect gradient-text" data-text="404">404</div>
      
      <h2 class="error-message mb-3">Página no encontrada</h2>
      
      <p class="error-description mb-4">
        Houston, tenemos un problema. La página que buscas parece haber sido 
        <strong>eliminada</strong>, <strong>movida</strong> o nunca existió en nuestro servidor.
      </p>

      <div class="tech-suggestions mb-4">
        <div class="suggestion-item">
          <i class="bi bi-search me-2"></i>
          <span>Verifica la URL ingresada</span>
        </div>
        <div class="suggestion-item">
          <i class="bi bi-arrow-left me-2"></i>
          <span>Regresa a la página anterior</span>
        </div>
        <div class="suggestion-item">
          <i class="bi bi-house me-2"></i>
          <span>Visita nuestra página principal</span>
        </div>
      </div>

      <div class="error-actions">
        <router-link to="/" class="btn-gradient me-3">
          <i class="bi bi-house me-2"></i>Ir al Inicio
        </router-link>
        <router-link to="/portafolio" class="btn-outline-light">
          <i class="bi bi-briefcase me-2"></i>Ver Portafolio
        </router-link>
      </div>

      <div class="error-code mt-4">
        <small class="text-muted">
          Error Code: <span class="gradient-text">HTTP_404_NOT_FOUND</span>
        </small>
      </div>
    </div>

    <!-- Floating tech elements -->
    <div class="floating-tech-elements">
      <div class="float-tech-item" style="top: 15%; left: 10%;">
        <i class="bi bi-terminal"></i>
      </div>
      <div class="float-tech-item" style="top: 25%; right: 15%;">
        <i class="bi bi-code-slash"></i>
      </div>
      <div class="float-tech-item" style="bottom: 25%; left: 20%;">
        <i class="bi bi-cpu"></i>
      </div>
      <div class="float-tech-item" style="bottom: 15%; right: 10%;">
        <i class="bi bi-server"></i>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Estilos específicos para la página de error
.error-bug {
  font-size: 4rem;
  color: #ff6b6b;
  filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.5));
}

.tech-suggestions {
  text-align: left;
  max-width: 300px;
  margin: 0 auto;
  
  .suggestion-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    
    i {
      color: #667eea;
    }
  }
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.floating-tech-elements {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  
  .float-tech-item {
    position: absolute;
    width: 60px;
    height: 60px;
    background: rgba(102, 126, 234, 0.05);
    border: 1px solid rgba(102, 126, 234, 0.1);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(102, 126, 234, 0.3);
    font-size: 1.5rem;
    animation: float 8s ease-in-out infinite alternate;
    backdrop-filter: blur(10px);
    
    &:nth-child(2) { animation-delay: -2s; }
    &:nth-child(3) { animation-delay: -4s; }
    &:nth-child(4) { animation-delay: -6s; }
  }
}

@media (max-width: 768px) {
  .error-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .floating-tech-elements .float-tech-item {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
}
</style>
