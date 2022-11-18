import { auth } from "@/firebase/config";
import { ref } from "vue";
let error = ref("");
let user = async (email, password, displayName) => {
  try {
    let user = await auth.createUserWithEmailAndPassword(email, password);
    if (!user) {
      throw new Error("not create account!");
    } else {
      user.user.updateProfile({ displayName });
      return user;
    }
  } catch (err) {
    error.value = err.message;
  }
};
let createUser = () => {
  return { error, user };
};

export default createUser;
