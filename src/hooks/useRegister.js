import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
function useRegister() {
  const registerWithEmailAndPassword = async (userData) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const userCredential = result.user;
      console.log(userCredential);
    } catch {}
  };
  return { registerWithEmailAndPassword };
}

export { useRegister };
