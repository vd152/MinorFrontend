export const setAuthToken = (token) => {
    localStorage.setItem("token", token);
  };
  export const getAuthToken = () => {
    return localStorage.getItem("token") || null;
  };
  export const removeAuthToken = () => {
    return localStorage.removeItem("token");
  };
  export const setUser = (user) => {
    localStorage.setItem("user", user);
  };
  export const getUser = () => {
    return localStorage.getItem("user") || null;
  };
  export const removeUser = () => {
    return localStorage.removeItem("user");
  };
  
  