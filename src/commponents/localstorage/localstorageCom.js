const setSignUpUser = (arr) => {
  localStorage.setItem("SignUpUser", JSON.stringify(arr));
};
const setSignInUser = (obj) => {
  localStorage.setItem("SignInUser", JSON.stringify(obj));
};

const getSignUpUser = () => {
  return JSON.parse(localStorage.getItem("SignUpUser") || "[]");
};

const getSignInUser = () => {
  return JSON.parse(localStorage.getItem("SignInUser") || "{}");
};

export { setSignInUser, setSignUpUser, getSignInUser, getSignUpUser };
