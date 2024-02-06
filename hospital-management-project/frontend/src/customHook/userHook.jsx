import { jwtDecode } from "jwt-decode";

export const checkUser = () => {
  const getToken = localStorage.getItem("token");
  if (getToken) {
    const tokenString = getToken.split(" ");
    const decodeToken = jwtDecode(tokenString[1]);
    if (decodeToken.role === "user") {
      return true;
    }
  }

  return false;
}
export const findName = () => {
  const getToken = localStorage.getItem("token");
  if (getToken) {
    const tokenString = getToken.split(" ");
    const decodeToken = jwtDecode(tokenString[1]);
    if (decodeToken.role === "user") {
      return decodeToken.name;
    }
  }
  return "";
}