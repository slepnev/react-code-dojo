const isAuthenticated = false;

export default function auth(state = isAuthenticated, action) {
  switch (action.type){
    case "LOGIN":
      return true;
    case "LOGOUT":
      return false;
    default:
      return state;
  }
}