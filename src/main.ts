import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/**
 * @author JaredDmz
 * Framework CSS (Bootstrap, variables y clases de edición global)
 */
import "@/assets/styles/root.scss";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.scss";

/**
 * @author JaredDmz
 * Se agrega el timezone globalmente, constante en el .env
 */
import momenttz from "moment-timezone";
momenttz.tz.setDefault(<string>import.meta.env.VITE_TIMEZONE);

/**
 * @author JaredDmz
 * Definir las reglas de validación de forma global
 */
import { defineRule } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

/**
 * @author JaredDmz
 * Instanciar los idiomas que estarán disponibles en la app para vee-validate (formularios)
 */
import { configure } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import es from '@vee-validate/i18n/dist/locale/es.json';
configure({
  generateMessage: localize({
    es
  })
});
/**
 * @author JaredDmz
 * Instanciar de forma global el idioma español por default para la bolsa de errores de formulario
 */
import { setLocale } from '@vee-validate/i18n';
setLocale('es');

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
