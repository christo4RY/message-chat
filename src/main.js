import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/css/style.css";
import "sweetalert2";

createApp(App).use(router).mount("#app");
