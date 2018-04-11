export function setUserNameAction(name) {
  return {
    type: "SET_USER_NAME",
    payload: name
  }
}
export function setUserDataAction(data) {
  return {
    type: "SET_USER_DATA",
    payload: data
  }
}