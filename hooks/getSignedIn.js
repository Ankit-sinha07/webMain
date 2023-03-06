import { useEffect, useState } from "react";
import { getAuth } from "../components/Firebase/auth";


function getSignedIn() {
  const initializeAuth = () => {
    const auth = getAuth();
    if (auth == null) {
      setSignedIn([false, null]);
    } else {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setSignedIn([true, user]);
        } else {
          setSignedIn([false, null]);
        }
      });
    }
  };
  const [signedIn, setSignedIn] = useState([false, null]);

  useEffect(() => {
    initializeAuth();
  }, []);

  return signedIn;
}

export default getSignedIn;
