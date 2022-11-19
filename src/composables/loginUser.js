import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref("");
let user = async (email, password) => {
  try {
    let user = await auth.signInWithEmailAndPassword(email, password);
    if (!user.user) {
      throw new Error("couldn't login your account!");
    } else {
      return user;
    }
  } catch (err) {
    error.value = err.message;
  }
};
let loginUser = () => {
  return { error, user };
};
export default loginUser;
