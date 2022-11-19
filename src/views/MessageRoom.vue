<template>
  <div class="home">
    <div class="message-room-container">
      <Navbar></Navbar>
      <ChatRoom></ChatRoom>
      <ChatBox></ChatBox>
    </div>
  </div>
</template>

<script>
import ChatRoom from "../components/Messages/ChatRoom";
import ChatBox from "../components/Messages/ChatBox";
import Navbar from "../components/Messages/Navbar";
export default {
  components: {
    ChatRoom,
    ChatBox,
    Navbar,
  },
};
</script>

<style>
</style>
