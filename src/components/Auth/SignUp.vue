<template>
  <h1 class="text-primary text-center mt-3">Sign Up</h1>
  <form @submit.prevent="createNewUser">
    <div class="form-group">
      <label for="name">Name: </label>
      <input type="text" class="form-control" v-model="name" />
    </div>
    <div class="form-group">
      <label for="email">Email: </label>
      <input type="email" class="form-control" v-model="email" />
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" class="form-control" v-model="password" />
    </div>
    <div class="form-group">
      <label for="confirm_password">Confirm Password:</label>
      <input type="password" class="form-control" v-model="confirm_password" />
    </div>
    <button class="btn btn-primary">Sign Up</button>
    <br />
    <div class="text-center switch-sign mb-3" @click="$emit('switch_sign')">
      Have you account?
    </div>
    <h3 class="text-center text-secondary">&copy;2022 Ar Kar Lin</h3>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import createUser from "@/composables/createUser.js";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
export default {
  setup() {
    let router = useRouter();
    let name = ref("");
    let email = ref("");
    let password = ref("");
    let confirm_password = ref("");

    let { error, user } = createUser();

    let createNewUser = async () => {
      let getUser = await user(email.value, password.value, name.value);
      name.value = "";
      email.value = "";
      password.value = "";
      confirm_password.value = "";
      if (getUser.user) {
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
          title: "Signed up successfully",
        });

        router.push({ name: "message.room" });
      }
    };

    return { name, email, password, confirm_password, createNewUser, error };
  },
};
</script>

<style>
</style>
