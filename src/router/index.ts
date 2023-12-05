import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "Error",
      component: () => import("@/views/Error.vue"),
      meta: {
        title: "Error",
        transition: "fade",
      },
    },
    {
      path: "/",
      name: "Inicio",
      component: () => import("@/views/Inicio.vue"),
      meta: {
        title: "Inicio",
        transition: "fade",
      },
    },
    {
      path: "/portafolio",
      name: "Portafolio",
      component: () => import("@/views/Portafolio.vue"),
      meta: {
        title: "Portafolio",
        transition: "fade",
      },
    },
  ]
});

/**
 * @author Jared Dmz
 * Cambia el titulo por lo obtenido en la propiedad to.meta.title
 */
router.afterEach((to, from) => {
  let title: any =
    typeof to.meta.title !== "undefined" ? to.meta.title + " | Portafolio de proyectos" : "Portafolio de proyectos";
  document.querySelector("title")!.innerText = title;
});


export default router;
