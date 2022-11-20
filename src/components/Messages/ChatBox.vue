<template>
  <div class="chatbox">
    <input
      type="text"
      class="form-control"
      v-model="message"
      placeholder="Type message..."
    />
    <div class="send-icon" @click="sendMessages">
      <i class="fa-sharp fa-solid fa-paper-plane"></i>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import sendMessage from "@/composables/Messages/sendMessage";
import getUser from "@/composables/Auth/getUser";
import { timestamp } from "@/firebase/config";
export default {
  setup() {
    let message = ref("");
    let { user } = getUser();

    let { messageSend } = sendMessage();
    let sendMessages = async () => {
      let messages = {
        name: user.value.displayName,
        userId: user.value.uid,
        message: message.value,
        created_at: timestamp(),
      };
      if (message.value) {
        await messageSend(messages);
        message.value = "";
      }
    };

    return { message, sendMessages };
  },
};
</script>

<style>
</style>
