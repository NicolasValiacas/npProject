import React, { createContext, useContext } from 'react';
import * as Google from "expo-google-app-auth";

const AuthContext = createContext({});

const config = {
  //Clé Android
  androidClientId: '53183103605-idavululjloi9jdlmf6iher2m12l8rtg.apps.googleusercontent.com',
  //Clé IOS
  iosClientId: '53183103605-3b089vmgrhbasjus5rjmmjpcl1vupf9o.apps.googleusercontent.com',
  //GOOGLE AUTH
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    Google.logInAsync(config).then(async (logInResult) => {
      if (logInResult.type === "success") {
        //Login...
      }
    });
  };

return (
  <AuthContext.Provider
    value={{
      user: null,
      signInWithGoogle,
    }}
  >
    {children}
  </AuthContext.Provider>
);
};

export default function useAuth() {
  return useContext(AuthContext);
}