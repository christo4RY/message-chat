<template>
  <div class="nav">
    <div class="group">
      <i class="fa-solid fa-people-group"></i>
      <div class="brand">
        <h4>Chat Group</h4>
        <!-- <p class="mb-3">
          Username: <span class="text-secondary">{{ user.displayName }}</span>
        </p>
        <p class="mb-3">
          Email:
          <span class="text-secondary">{{ user.email }}</span>
        </p> -->
      </div>
    </div>

    <div class="logout" @click="logout">
      <i class="fa-solid fa-right-from-bracket"></i>
    </div>
  </div>
</template>

<script>
import getUser from "@/composables/Auth/getUser";
import { auth } from "@/firebase/config";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
export default {
  setup() {
    let { user } = getUser();
    let router = useRouter();
    let logout = async () => {
      await auth.signOut();
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
        title: "Login successfully",
      });
      router.push("/");
    };

    return { user, logout };
  },
};
</script>

<style>
</style>
