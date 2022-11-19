<template>
  <h1 class="text-primary text-center">Login</h1>
  <form @submit.prevent="loginAcc">
    <div v-if="error">
      <p class="text-danger mb-3">{{ error }}</p>
    </div>
    <div class="form-group">
      <label for="email">Email: </label>
      <input type="email" class="form-control" v-model="email" />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" class="form-control" v-model="password" />
    </div>
    <button class="btn btn-primary">Login</button>
    <br />
    <div class="text-center switch-sign mb-3" @click="$emit('switch_sign')">
      Are you create account?
    </div>
    <h3 class="text-center text-secondary">&copy;2022 Ar Kar Lin</h3>
  </form>
</template>

  <script>
import loginUser from "@/composables/loginUser";
import { ref } from "@vue/reactivity";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
export default {
  setup() {
    let router = useRouter();
    let email = ref("");
    let password = ref("");
    let { error, user } = loginUser();

    let loginAcc = async () => {
      let login = await user(email.value, password.value);
      email.value = "";
      password.value = "";
      if (login.user) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Signed in successfully",
        });

        router.push({ name: "message.room" });
      }
    };

    return { email, password, error, loginAcc };
  },
};
</script>

  <style>
</style>
