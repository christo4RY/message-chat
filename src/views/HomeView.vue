<template>
  <div class="home">
    <div class="auth-container">
      <div v-if="toggle">
        <Login @switch_sign="switch_sign"></Login>
      </div>
      <div v-else>
        <SignUp @switch_sign="switch_sign"></SignUp>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
// @ is an alias to /src
import { db } from "@/firebase/config";
import { ref } from "@vue/reactivity";
export default {
  components: {
    Login,
    SignUp,
  },
  name: "HomeView",
  setup() {
    let toggle = ref(false);
    let switch_sign = () => {
      toggle.value = !toggle.value;
      console.log(toggle.value);
    };
    return { switch_sign, toggle };
  },
};
</script>
