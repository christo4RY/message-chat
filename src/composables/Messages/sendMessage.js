import { db } from "@/firebase/config";
import { ref } from "vue";

let error = ref("");
let messageSend = async (message) => {
  try {
    let messages = await db.collection("messages").add(message);
    if (!messages) {
      throw new Error("Couldn't send message!");
    } else {
      return messages;
    }
  } catch (err) {
    error.value = err.message;
  }
  console.log(messages);
};
let sendMessage = () => {
  return { messageSend };
};
export default sendMessage;
