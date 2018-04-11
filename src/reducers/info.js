const initialState = {
  user: "UserName",
  email: "test@mail.ru",
  password: "12345",
  year: 2015
};

export default function userInfo(state = initialState, action) {
  switch (action.type){
    case "SET_YEAR":
      return {...state, year: action.payload};
    case "SET_USER_NAME":
      return {...state, user: action.payload};
    case "SET_USER_DATA":
      return {...state, ...action.payload};
    default:
      return state;
  }
}