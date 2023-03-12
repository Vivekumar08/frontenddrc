import { createContext, useState } from "react";

const AuthContext = createContext({});
// function hasJWT() {
//   let auth = false;

//   //check user has JWT token
//   localStorage.getItem("token") ? auth=true : auth=false
 
//   return auth
// }

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
