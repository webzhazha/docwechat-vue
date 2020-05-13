import Vue from "vue";
import VueRouter from "vue-router";

import docDiagnoses from "./module/docDiagnoses"

Vue.use(VueRouter);

const routes = [
  ...docDiagnoses
];

const router = new VueRouter({
  mode: "history",
  base: 'vue',
  routes
});

export default router;
