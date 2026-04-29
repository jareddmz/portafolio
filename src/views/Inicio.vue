<template>
  <div class="tech-container">
    <!-- Hero Section / Portada -->
    <section class="hero-tech-section">
      <div class="container">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6 col-md-12 text-center text-lg-start">
            <div class="hero-content fade-in-up">
              <div class="tech-badge mb-4">
                <i class="bi bi-code-slash me-2"></i>
                <span>Full Stack Developer</span>
              </div>
              <h1 class="display-3 fw-bold mb-4">
                <span class="gradient-text">Transformando ideas</span><br>
                <span class="text-white">a través de código</span>
              </h1>
              <p class="lead text-white-50 mb-4">
                Líder en desarrollo de software con experiencia en proyectos de gran escala. 
                Especializado en arquitecturas seguras, buenas prácticas y tecnologías emergentes.
              </p>
              <div class="hero-stats d-flex gap-4 mb-4">
                <div class="stat-item">
                  <div class="stat-number gradient-text">50+</div>
                  <div class="stat-label">Proyectos</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number gradient-text">7+</div>
                  <div class="stat-label">Años</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number gradient-text">15+</div>
                  <div class="stat-label">Tecnologías</div>
                </div>
              </div>
              <div class="hero-actions">
                <router-link to="/portafolio" class="btn btn-gradient me-3">
                  <i class="bi bi-briefcase me-2"></i>Ver Portafolio
                </router-link>
                <a href="#about" class="btn btn-outline-light">
                  <i class="bi bi-person me-2"></i>Conoce más
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 text-center">
            <div class="hero-image-container">
              <div class="floating-elements">
                <div class="float-element" style="top: 10%; left: 20%;">
                  <i class="bi bi-braces"></i>
                </div>
                <div class="float-element" style="top: 30%; right: 10%;">
                  <i class="bi bi-database"></i>
                </div>
                <div class="float-element" style="bottom: 30%; left: 10%;">
                  <i class="bi bi-cloud"></i>
                </div>
                <div class="float-element" style="bottom: 10%; right: 30%;">
                  <i class="bi bi-shield-check"></i>
                </div>
              </div>
              <img src="@/assets/images/logo.png" class="profile-tech-image floating-element" alt="Profile"/>
              <div class="tech-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="about-tech-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section-title-tech gradient-text">Sobre mi experiencia</h2>
            <p class="section-subtitle">Pasión por el desarrollo y la innovación tecnológica</p>
          </div>
          <div class="col-lg-8 offset-lg-2">
            <div class="about-content">
              <div class="about-card glass-effect-dark p-4 mb-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="about-icon me-3">
                    <i class="bi bi-laptop"></i>
                  </div>
                  <h5 class="mb-0 text-white">Desarrollo Full Stack</h5>
                </div>
                <p class="text-white-50 mb-0">
                  He desarrollado, migrado y desplegado decenas de proyectos de toda índole, 
                  trabajando tanto en equipos grandes como pequeños, siempre enfocado en 
                  entregar soluciones profesionales, seguras y fáciles de usar.
                </p>
              </div>
              
              <!-- Security Block -->
              <div class="security-block mb-4">
                <div class="security-block-header glass-effect-dark p-4">
                  <div class="d-flex align-items-center mb-2">
                    <div class="about-icon me-3">
                      <i class="bi bi-shield-check"></i>
                    </div>
                    <div>
                      <h5 class="mb-0 text-white">Seguridad &amp; Desarrollo de Calidad</h5>
                      <small class="text-white-50">Código seguro desde el primer commit hasta producción</small>
                    </div>
                  </div>
                </div>

                <!-- CIA Triangle -->
                <div class="cia-triangle glass-effect-dark p-4 mt-2">
                  <p class="text-white-50 text-center mb-3" style="font-size:0.85rem; letter-spacing:0.05em; text-transform:uppercase;">
                    Triángulo de la Seguridad
                  </p>
                  <div class="cia-pillars">
                    <div class="cia-pillar">
                      <div class="cia-icon">
                        <i class="bi bi-lock-fill"></i>
                      </div>
                      <span class="cia-label">Confidencialidad</span>
                      <span class="cia-desc">Acceso solo a quien corresponde</span>
                    </div>
                    <div class="cia-pillar cia-pillar--center">
                      <div class="cia-icon cia-icon--accent">
                        <i class="bi bi-patch-check-fill"></i>
                      </div>
                      <span class="cia-label">Integridad</span>
                      <span class="cia-desc">Datos íntegros y no alterados</span>
                    </div>
                    <div class="cia-pillar">
                      <div class="cia-icon">
                        <i class="bi bi-activity"></i>
                      </div>
                      <span class="cia-label">Disponibilidad</span>
                      <span class="cia-desc">Sistemas siempre operativos</span>
                    </div>
                  </div>
                </div>

                <!-- Two columns: Dev practices + Standards -->
                <div class="security-columns mt-2">
                  <div class="security-col glass-effect-dark p-4">
                    <h6 class="security-col-title mb-3">
                      <i class="bi bi-code-square me-2"></i>Buenas Prácticas de Desarrollo
                    </h6>
                    <div class="security-item">
                      <div class="security-item-icon"><i class="bi bi-diagram-3"></i></div>
                      <div>
                        <strong class="text-white">SOLID / DRY</strong>
                        <p class="text-white-50 mb-0">Código limpio, mantenible y desacoplado</p>
                      </div>
                    </div>
                    <div class="security-item">
                      <div class="security-item-icon"><i class="bi bi-check2-all"></i></div>
                      <div>
                        <strong class="text-white">Pruebas Automatizadas</strong>
                        <p class="text-white-50 mb-0">Unit, integración y E2E en cada proyecto</p>
                      </div>
                    </div>
                    <div class="security-item">
                      <div class="security-item-icon"><i class="bi bi-robot"></i></div>
                      <div>
                        <strong class="text-white">CI/CD &amp; Quality Gates</strong>
                        <p class="text-white-50 mb-0">Validaciones automáticas antes de cada despliegue</p>
                      </div>
                    </div>
                  </div>

                  <div class="security-col glass-effect-dark p-4">
                    <h6 class="security-col-title mb-3">
                      <i class="bi bi-shield-lock me-2"></i>Estándares &amp; Cumplimiento
                    </h6>
                    <div class="security-item">
                      <div class="security-item-icon security-item-icon--red"><i class="bi bi-bug"></i></div>
                      <div>
                        <strong class="text-white">OWASP Top 10</strong>
                        <p class="text-white-50 mb-0">Mitigación de las vulnerabilidades más críticas</p>
                      </div>
                    </div>
                    <div class="security-item">
                      <div class="security-item-icon security-item-icon--red"><i class="bi bi-building-check"></i></div>
                      <div>
                        <strong class="text-white">NIST &amp; ISO/IEC 27001/27034</strong>
                        <p class="text-white-50 mb-0">Marcos de gestión de seguridad de la información</p>
                      </div>
                    </div>
                    <div class="security-item">
                      <div class="security-item-icon security-item-icon--red"><i class="bi bi-search"></i></div>
                      <div>
                        <strong class="text-white">Lynis — Auditoría de sistemas</strong>
                        <p class="text-white-50 mb-0">Escaneo de vulnerabilidades y hardening en servidores</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="about-card glass-effect-dark p-4 mb-4">
                <div class="d-flex align-items-center mb-3">
                  <div class="about-icon me-3">
                    <i class="bi bi-gear"></i>
                  </div>
                  <h5 class="mb-0 text-white">Consultoría Tecnológica</h5>
                </div>
                <p class="text-white-50 mb-3">
                  Asesoro a empresas en la adquisición y adopción de tecnologías, 
                  ayudándoles a tomar decisiones informadas según sus necesidades específicas.
                </p>
                <div class="personal-touch">
                  <p class="text-white-50 mb-2">
                    <i class="bi bi-heart me-2 text-danger"></i>
                    Mi pasión: <strong class="text-white">código, motos, autos y naturaleza</strong>
                  </p>
                  <p class="text-white-50 mb-0">
                    <i class="bi bi-camera-video me-2 text-primary"></i>
                    Sígueme en mi <a href="https://www.youtube.com/@reptalrider/videos" target="_blank" class="gradient-text text-decoration-none fw-bold">motovlog</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="tech-stack-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section-title-tech gradient-text">Stack Tecnológico</h2>
            <p class="section-subtitle">Tecnologías que domino y utilizo en mis proyectos</p>
          </div>
        </div>

        <!-- Programming Languages -->
        <div class="tech-category mb-5">
          <h4 class="tech-category-title text-white mb-4">
            <i class="bi bi-code me-2"></i>Lenguajes de Programación
          </h4>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6">
              <div class="tech-card-modern glass-effect-dark">
                <div class="tech-icon-wrapper">
                  <img src="@/assets/images/logos/lenguajes/php.png" class="tech-icon" alt="PHP"/>
                </div>
                <h5 class="text-white">PHP</h5>
                <p class="text-white-50">Desarrollo backend robusto y escalable</p>
                <div class="tech-level">
                  <div class="level-bar" style="width: 95%"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="tech-card-modern glass-effect-dark">
                <div class="tech-icon-wrapper">
                  <img src="@/assets/images/logos/lenguajes/javascript.png" class="tech-icon" alt="JavaScript"/>
                </div>
                <h5 class="text-white">JavaScript</h5>
                <p class="text-white-50">Frontend dinámico y aplicaciones SPA</p>
                <div class="tech-level">
                  <div class="level-bar" style="width: 90%"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="tech-card-modern glass-effect-dark">
                <div class="tech-icon-wrapper">
                  <img src="@/assets/images/logos/lenguajes/python.png" class="tech-icon" alt="Python"/>
                </div>
                <h5 class="text-white">Python</h5>
                <p class="text-white-50">Automatización y análisis de datos</p>
                <div class="tech-level">
                  <div class="level-bar" style="width: 85%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Frameworks Grid -->
        <div class="tech-category mb-5">
          <h4 class="tech-category-title text-white mb-4">
            <i class="bi bi-layers me-2"></i>Frameworks & Librerías
          </h4>
          <div class="frameworks-grid">
            <div class="framework-item">
              <img src="@/assets/images/logos/frameworks/laravel.png" alt="Laravel"/>
              <span>Laravel</span>
            </div>
            <div class="framework-item">
              <img src="@/assets/images/logos/frameworks/vue.png" alt="Vue.js"/>
              <span>Vue.js</span>
            </div>
            <div class="framework-item">
              <img src="@/assets/images/logos/frameworks/adonis.png" alt="AdonisJS"/>
              <span>AdonisJS</span>
            </div>
            <div class="framework-item">
              <img src="@/assets/images/logos/frameworks/ionic.png" alt="Ionic"/>
              <span>Ionic</span>
            </div>
            <div class="framework-item">
              <img src="@/assets/images/logos/frameworks/express.png" alt="Express"/>
              <span>Express</span>
            </div>
            <div class="framework-item">
              <img src="@/assets/images/logos/frameworks/n8n.png" alt="N8N"/>
              <span>N8N</span>
            </div>
          </div>
        </div>

        <!-- Database & Cloud -->
        <div class="row g-4">
          <div class="col-lg-12">
            <div class="tech-category">
              <h4 class="tech-category-title text-white mb-4">
                <i class="bi bi-database me-2"></i>Bases de Datos
              </h4>
              <div class="db-grid">
                <div class="db-item">
                  <img src="@/assets/images/logos/dbs/mysql.png" alt="MySQL"/>
                  <span>MySQL</span>
                </div>
                <div class="db-item">
                  <img src="@/assets/images/logos/dbs/postgresql.png" alt="PostgreSQL"/>
                  <span>PostgreSQL</span>
                </div>
                <div class="db-item">
                  <img src="@/assets/images/logos/dbs/mongodb.png" alt="MongoDB"/>
                  <span>MongoDB</span>
                </div>
                <div class="db-item">
                  <img src="@/assets/images/logos/dbs/mariadb.png" alt="MariaDB"/>
                  <span>MariaDB</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-lg-12">
            <div class="tech-category">
              <h4 class="tech-category-title text-white mb-4">
                <i class="bi bi-cloud me-2"></i>Cloud & DevOps
              </h4>
              <div class="cloud-grid">
                <div class="cloud-item">
                  <img src="@/assets/images/logos/deploy/aws.png" alt="AWS"/>
                  <span>AWS</span>
                </div>
                <div class="cloud-item">
                  <img src="@/assets/images/logos/deploy/google-cloud.png" alt="Google Cloud"/>
                  <span>Google Cloud</span>
                </div>
                <div class="cloud-item">
                  <img src="@/assets/images/logos/plugins/docker.png" alt="Docker"/>
                  <span>Docker</span>
                </div>
                <div class="cloud-item">
                  <img src="@/assets/images/logos/plugins/git.png" alt="Git"/>
                  <span>Git</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section class="certifications-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section-title-tech gradient-text">Certificaciones</h2>
            <p class="section-subtitle">Formación continua y especialización profesional</p>
          </div>
        </div>
        
        <div class="certifications-showcase">
          <div class="cert-item featured">
            <a href="https://www.credly.com/badges/a08a681d-9457-4181-b893-70980a2211fe/public_url" target="_blank">
              <img src="@/assets/images/cursos/certification_introduction-to-cybersecurity.png" alt="Cybersecurity"/>
              <div class="cert-overlay">
                <h6>Cybersecurity</h6>
                <small>Cisco</small>
              </div>
            </a>
          </div>
          
          <div class="cert-item featured">
            <a href="https://www.credly.com/badges/00452de6-3a29-4abd-ac97-c44fe6dade47/public_url" target="_blank">
              <img src="@/assets/images/cursos/google-cloud-computing-foundations-certificate.png" alt="Google Cloud"/>
              <div class="cert-overlay">
                <h6>Cloud Computing</h6>
                <small>Google Cloud</small>
              </div>
            </a>
          </div>
          
          <div class="cert-item">
            <a href="https://www.credential.net/792ee0c4-f716-4adc-90e4-16a3941cace6" target="_blank">
              <img src="@/assets/images/cursos/badge-llama-centro.png" alt="Llama"/>
            </a>
          </div>
          
          <div class="cert-item">
            <a href="https://www.credly.com/badges/b392e8cc-adc5-41a6-8f47-df6d2af98f90/public_url" target="_blank">
              <img src="@/assets/images/cursos/endpoint-security.png" alt="Endpoint Security"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
// Estilos específicos solo para la página de Inicio
.profile-tech-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 4px solid rgba(102, 126, 234, 0.3);
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  position: relative;
  z-index: 2;
}

.hero-image-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .floating-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    
    .float-element {
      position: absolute;
      width: 60px;
      height: 60px;
      background: rgba(102, 126, 234, 0.1);
      border: 1px solid rgba(102, 126, 234, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #667eea;
      font-size: 1.5rem;
      animation: float 6s ease-in-out infinite alternate;
      backdrop-filter: blur(10px);
      
      &:nth-child(2) { animation-delay: -1s; }
      &:nth-child(3) { animation-delay: -2s; }
      &:nth-child(4) { animation-delay: -3s; }
    }
  }
}

.tech-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  animation: pulse 4s ease-in-out infinite;
}

.about-card {
  border-radius: 20px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(102, 126, 234, 0.3);
  }
}

.about-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
}

.standards-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(102, 126, 234, 0.1);
}

.standard-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.25);
  border-radius: 20px;
  padding: 0.3rem 0.8rem;
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.75);
  transition: all 0.3s ease;

  i {
    color: #667eea;
  }

  &:hover {
    background: rgba(102, 126, 234, 0.2);
    border-color: rgba(102, 126, 234, 0.5);
    color: white;
  }
}

// Security Block
.security-block {
  border-radius: 20px;
  overflow: hidden;

  .security-block-header {
    border-radius: 20px;
    border: 1px solid rgba(102, 126, 234, 0.2);
  }
}

// CIA Triangle
.cia-triangle {
  border-radius: 20px;
  border: 1px solid rgba(102, 126, 234, 0.15);
}

.cia-pillars {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  text-align: center;
}

.cia-pillar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.cia-icon {
  width: 52px;
  height: 52px;
  background: rgba(102, 126, 234, 0.12);
  border: 1px solid rgba(102, 126, 234, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  color: #667eea;
  margin-bottom: 0.3rem;
  transition: all 0.3s ease;

  &--accent {
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(118, 75, 162, 0.3));
    border-color: rgba(118, 75, 162, 0.5);
    color: #b388ff;
    transform: scale(1.15);
  }
}

.cia-pillar:hover .cia-icon {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-color: transparent;
  color: white;
  transform: scale(1.1);
}

.cia-label {
  font-size: 0.88rem;
  font-weight: 600;
  color: white;
}

.cia-desc {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.45);
  line-height: 1.3;
}

// Security two-column layout
.security-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.security-col {
  border-radius: 16px;
  border: 1px solid rgba(102, 126, 234, 0.12);
}

.security-col-title {
  font-size: 0.85rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;

  i {
    color: #667eea;
  }
}

.security-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid rgba(102, 126, 234, 0.07);

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  strong {
    font-size: 0.9rem;
    display: block;
    line-height: 1.3;
  }

  p {
    font-size: 0.78rem;
    line-height: 1.3;
  }
}

.security-item-icon {
  flex-shrink: 0;
  width: 34px;
  height: 34px;
  background: rgba(102, 126, 234, 0.12);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: #667eea;
  margin-top: 0.1rem;

  &--red {
    background: rgba(220, 53, 69, 0.1);
    color: #ff6b6b;
  }
}

.personal-touch {
  padding-top: 1rem;
  border-top: 1px solid rgba(102, 126, 234, 0.1);
}

.tech-category {
  margin-bottom: 3rem;
}

.tech-category-title {
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.tech-card-modern {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(102, 126, 234, 0.3);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }
}

.tech-icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: rgba(102, 126, 234, 0.1);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  .tech-icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }
}

.tech-card-modern:hover .tech-icon-wrapper {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scale(1.1);
}

.tech-level {
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  
  .level-bar {
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
    transition: width 2s ease;
  }
}

// Framework Grid
.frameworks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
}

.framework-item {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 15px;
  padding: 1.5rem 1rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    border-color: rgba(102, 126, 234, 0.3);
  }
  
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }
  
  span {
    color: white;
    font-size: 0.9rem;
    font-weight: 500;
  }
}

// Database & Cloud Grids
.db-grid, .cloud-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
}

.db-item, .cloud-item {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    border-color: rgba(102, 126, 234, 0.3);
  }
  
  img {
    width: 35px;
    height: 35px;
    object-fit: contain;
    margin-bottom: 0.5rem;
  }
  
  span {
    color: white;
    font-size: 0.8rem;
    font-weight: 500;
  }
}

// Certifications
.certifications-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.cert-item {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px) scale(1.05);
  }
  
  &.featured {
    grid-column: span 1;
  }
  
  a {
    display: block;
    position: relative;
  }
  
  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 15px;
  }
  
  .cert-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0,0,0,0.8));
    padding: 2rem 1rem 1rem;
    color: white;
    text-align: center;
    opacity: 0;
    transition: all 0.3s ease;
    
    h6 {
      margin: 0 0 0.25rem;
      font-weight: 600;
    }
    
    small {
      color: rgba(255, 255, 255, 0.8);
    }
  }
  
  &:hover .cert-overlay {
    opacity: 1;
  }
}

// Responsive
@media (max-width: 768px) {
  .hero-stats {
    flex-direction: column;
    gap: 2rem !important;
  }
  
  .hero-actions {
    flex-direction: column;
    gap: 1rem;
    
    .btn-gradient,
    .btn-outline-light {
      width: 100%;
      justify-content: center;
    }
  }
  
  .frameworks-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
  }
  
  .certifications-showcase {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }
}
</style>