import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: "/template-one",
    name: "TemplateOne",
    component: () => import('@/pages/TemplateOne.vue')
  },
  {
    path: "/template-two",
    name: "TemplateTwo",
    component: () => import('@/pages/TemplateTwo.vue')
  },
  {
    path: "/template-three",
    name: "TemplateThree",
    component: () => import('@/pages/TemplateThree.vue')
  },
  {
    path: "/business",
    name: "BusinessPage",
    component: () => import('@/pages/BusinessPage.vue')
  },
  {
    path: "/services",
    name: "ServicePage",
    component: () => import('@/pages/ServicePage.vue')
  },
  {
    path: "/place/:place",
    name: "PlaceSentence",
    component: () => import('@/pages/PlaceSentence.vue')
  },
  {
    path: "/service/:name",
    name: "ServiceSentence",
    component: () => import('@/pages/ServiceSentence.vue')
  },
  {
    path: "/customer/:name",
    name: "CustomerSentence",
    component: () => import('@/pages/CustomerSentence.vue')
  },
  {
    path: "/category/:name",
    name: "CategorySentence",
    component: () => import('@/pages/CategorySentence.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
