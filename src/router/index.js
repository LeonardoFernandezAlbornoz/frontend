import HomeView from "@/views/HomeView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/productos/categoria/:nomCategoria",
      name: "categoria",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CategoriaView.vue"),
    },
    {
      path: "/productos/buscar/:busqueda/:nomCategoria?/",
      name: "busqueda",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BusquedaView.vue"),
    },

    {
      path: "/producto/:nomCategoria/:nomProducto",
      name: "producto",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/ProductoView.vue"),
    },

    {
      path: "/perfil",
      name: "perfil",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PerfilView.vue"),
    },

    {
      path: "/pedido/:idPedido",
      name: "pedido",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PedidoView.vue"),
    },
    {
      path: "/carrito",
      name: "carrito",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CarritoView.vue"),
    },

    {
      path: "/pasarela-pago",
      name: "pasarela",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PasarelaView.vue"),
    },
    {
      path: "/panel-gestion",
      name: "panelGestion",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PanelGestionView.vue"),
    },

    {
      path: "/panel-gestion/gestion-inventario",
      name: "gestionInventario",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/InventarioView.vue"),
    },

    {
      path: "/panel-gestion/gestion-usuarios",
      name: "gestionUsuarios",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/UsuariosView.vue"),
    },
    {
      path: "/panel-gestion/gestion-pedidos",
      name: "gestionPedidos",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/GestionPedidos.vue"),
    },
  ],
});

export default router;
