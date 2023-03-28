const setSignInUser = (arr) => {
  localStorage.setItem("signInUser", JSON.stringify(arr));
};
const setSignUpUser = (pre) => {
  localStorage.setItem("signUpUser", JSON.stringify(pre));
};

const getSignInUser = () => {
  return JSON.parse(localStorage.getItem("signInUser") || "[]");
};

const getSignUpUser = () => {
  return JSON.parse(localStorage.getItem("signUpUser") || "{}");
};

export { setSignInUser, setSignUpUser, getSignInUser, getSignUpUser };
