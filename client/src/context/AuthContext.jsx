import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";
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
  const syncUserWithBackend = async (currentUser) => {
    try {
      const mytoken = await currentUser.getIdToken(true);
      setToken(mytoken);

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
        photoURL: result.data.profileImage?.url || photoURL,
      };
      setUser(newUser);
    } catch (error) {
      if (error.response?.status === 403 || error.response?.status === 404) {
        await signOut(auth);
        setUser(null);
        setToken(null);
        toast.error(error.response.data.message || "Authentication failed");
        return;
      }
      console.error("Error syncing user:", error);
      // Only set partial user if unexpected error, NOT if banned/missing
      setUser(currentUser);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        await syncUserWithBackend(currentUser);
      } else {
        setUser(null);
        setToken(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const refreshUser = async () => {
    if (auth.currentUser) {
      await syncUserWithBackend(auth.currentUser);
    }
  };

  const updateProfile = async (data) => {
    const response = await api.put("/api/users/profile", data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser((prev) => ({ ...prev, ...response.data }));
    return response.data;
  };

  // LOGOUT FUNCTION
  const logout = async () => {
    await signOut(auth);
    setUser(null);
    clearCart(); // Clear cart on logout
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, logout, token, refreshUser, updateProfile }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Hook to use auth state in components
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
