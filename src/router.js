import VueRouter from "vue-router";
import Index from "./pages/Index.vue";
import Detail from "./pages/Detail.vue";
import Upload from "./pages/Upload.vue";
const routes = [
  { path: "/", name: "index", component: Index },
  { path: "/detail/:name", name: "detail", component: Detail },
  { path: "/upload", name: "upload", component: Upload },
];
export default new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});
