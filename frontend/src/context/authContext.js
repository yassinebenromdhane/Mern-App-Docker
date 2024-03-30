import React, { createContext, useState, useCallback, useMemo } from "react";

const initialState = {
  selectedRole: null,
};
const AuthContext = createContext(initialState);

function AuthProvider({ children }) {
  const [selectedRole, setSelectedRole] = useState();

  const selectRole = useCallback((role) => {
    setSelectedRole(role);
  }, []);

  const clearAuthContext = useCallback(() => {
    setSelectedRole(null);
  }, []);

  const providerValues = useMemo(
    () => ({ selectedRole, selectRole, clearAuthContext }),
    [selectedRole, selectRole, clearAuthContext]
  );
  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
