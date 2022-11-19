<template>
  <div class="nav">
    <div>
      <p class="mb-3">
        Username: <span class="text-secondary">{{ user.displayName }}</span>
      </p>
      <p class="mb-3">
        Email:
        <span class="text-secondary">{{ user.email }}</span>
      </p>
    </div>
    <div class="logout">logout</div>
  </div>
</template>

<script>
import getUser from "@/composables/Auth/getUser";
export default {
  setup() {
    let { user } = getUser();

    return { user };
  },
};
</script>

<style>
</style>
