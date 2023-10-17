
import { createContext, useState } from "react";
import {
  getAuth,
  
} from "firebase/auth";
import app from "../Firebase/firebase.init";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  

  

  const authInfo = {
    user,
    
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
