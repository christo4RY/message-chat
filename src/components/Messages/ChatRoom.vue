<template>
  <div class="chat-room" ref="msgbox">
    <div v-for="message in messages" :key="message.id">
      <div v-if="message.userId == user.uid">
        <div class="messages" style="float: right">
          <!-- <p class="mb-2">{{ message.created_at }}</p> -->
          <p>
            <span class="message text-secondary">{{ message.message }}</span>
          </p>
        </div>
      </div>
      <div v-else>
        <div class="messages">
          <!-- <p class="mb-2">{{ message.created_at }}</p> -->
          <p>
            <b>{{ message.name }} : </b
            ><span class="message text-secondary">{{ message.message }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { ref } from "@vue/reactivity";
import { onUpdated } from "vue";
import getUser from "@/composables/Auth/getUser";

export default {
  setup() {
    let { user } = getUser();
    let msgbox = ref("");
    let messages = ref([]);
    db.collection("messages")
      .orderBy("created_at")
      .onSnapshot((snap) => {
        let result = [];
        snap.docs.forEach((doc) => {
          let documents = { ...doc.data(), id: doc.id };
          if (doc.data().created_at) {
            result.push(documents);
          }
        });
        messages.value = result;
      });

    onUpdated(() => {
      msgbox.value.scrollTop = msgbox.value.scrollHeight;
    });
    return { messages, msgbox, user };
  },
};
</script>

<style>
</style>
