import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { toast } from "react-toastify";
import { app, initializeFirebase } from "./index";
const provider = new GoogleAuthProvider();

const signInWithGoogle = async (onSuccess) => {
  initializeFirebase();
  const auth = getAuth(app);
  const result = await signInWithPopup(auth, provider).catch((error) => {
    console.error(error.message);
  });
  if (onSuccess) {
    onSuccess();
  }
  return result.user;
};
const signInWithEmail = async (email, password, onSuccess) => {
  try {
    initializeFirebase();
    const auth = getAuth(app);
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    if (!user.emailVerified) {
      auth.signOut();
      toast.error("Please Verify Your Email");
      await sendEmailVerification(user);
      toast.success("Verification Email Sent");
      if (onSuccess) {
        onSuccess();
      }
      return null;
    }
    toast.success("Sign In Successfull");
    return user;
  } catch (e) {
    toast.error(e.message || "Something Went Wrong");
  }
};
const signUpWithEmail = async (name, email, password, onSuccess) => {
  try {
    initializeFirebase();
    const auth = getAuth(app);
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    await updateProfile(user, {
      displayName: name,
    });
    await sendEmailVerification(user);
    toast.success("Verification Email Sent");
    toast.success("Please Login after Verifying");
    if (onSuccess) {
      onSuccess();
    }
    return user;
  } catch (e) {
    toast.error(e.message || "Something Went Wrong");
  }
};
const forgotPassword = async (email, onSuccess) => {
  try {
    initializeFirebase();
    const auth = getAuth(app);
    await sendPasswordResetEmail(auth, email);
    toast.success("Password Reset Link Sent to mail");
    if (onSuccess) {
      onSuccess();
    }
  } catch (e) {
    toast.error(e.message || "Something Went Wrong");
  }
};
const signOut = async () => {
  try {
    const auth = getAuth();
    await auth.signOut();
    toast.success("Sign Out Successful");
  } catch (e) {
    toast.error(e.message || "Something Went Wrong");
  }
};

export {
  signInWithGoogle,
  getAuth,
  signOut,
  signInWithEmail,
  signUpWithEmail,
  forgotPassword,
};
