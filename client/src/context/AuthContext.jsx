import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";
import { auth } from "../firebase";
import { useCart } from "./CartContext";
const AuthContext = createContext();
//AuthProvider Component to wrap the app
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const { clearCart } = useCart();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const mytoken = await currentUser.getIdToken(true);
        setToken(mytoken);
        // sync user with backend
        const result = await api.post(
          "/api/users/sync",
          {},
          {
            headers: {
              Authorization: `Bearer ${mytoken}`,
            },
          }
        );

        const { photoURL } = currentUser;
        const newUser = {
          ...result.data,
          photoURL,
        };
        setUser(newUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    //Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  // LOGOUT FUNCTION
  const logout = async () => {
    await signOut(auth);
    setUser(null);
    clearCart(); // Clear cart on logout
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout,token }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Hook to use auth state in components
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
