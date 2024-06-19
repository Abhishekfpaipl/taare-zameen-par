import { createRouter, createWebHistory } from "vue-router";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import('@/pages/HomePage.vue'),
  // },
  {
    path: "/template-one",
    name: "TemplateOne",
    component: () => import('@/pages/TemplateOne.vue')
  },
  {
    path: "/",
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
    path: "/services/:slug",
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
  {
    path: "/gallery",
    name: "GalleryPage",
    component: () => import('@/pages/GalleryPage.vue')
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: () => import('@/pages/ContactPage.vue')
  },
  {
    path: "/career",
    name: "CareerPage",
    component: () => import('@/pages/CareerPage.vue')
  },
  {
    path: "/legal-warning",
    name: "LegalWarning",
    component: () => import('@/pages/LegalWarning.vue')
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import('@/pages/PrivacyPolicy.vue')
  },
  {
    path: "/term-of-use",
    name: "TermOfUse",
    component: () => import('@/pages/TermOfUse.vue')
  },
  {
    path: "/about",
    name: "AboutUs",
    component: () => import('@/pages/AboutUs.vue')
  },
  {
    path: "/login-page",
    name: "LoginPage",
    component: () => import('@/pages/auths/LoginPage.vue')
  },
  {
    path: "/registration-page",
    name: "RegistrationPage",
    component: () => import('@/pages/auths/RegistrationPage.vue')
  },
  {
    path: "/forgot-password-page",
    name: "ForgotPasswordPage",
    component: () => import('@/pages/auths/ForgotPasswordPage.vue')
  },
  {
    path: "/reset-password-page",
    name: "ResetPasswordPage",
    component: () => import('@/pages/auths/ResetPasswordPage.vue')
  },
  {
    path: "/email-verification-page",
    name: "EmailVerificationPage",
    component: () => import('@/pages/auths/EmailVerificationPage.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
