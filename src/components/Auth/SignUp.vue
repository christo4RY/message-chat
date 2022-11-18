<template>
  <h1 class="text-primary text-center mt-3">Sign Up</h1>
  <form @submit.prevent="">
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
import { db } from "@/firebase/config";
export default {
  setup() {
    let name = ref("");
    let email = ref("");
    let password = ref("");
    let confirm_password = ref("");

    return { name, email, password, confirm_password };
  },
};
</script>

<style>
</style>
