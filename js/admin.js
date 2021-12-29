document.getElementById("welcome").textContent =
  "Hello " + accountObject.fullname;

const logOut = () => {
  sessionStorage.removeItem("ACCOUNT");
  window.location.href = "../Page/login.html";
};

const test = function newFunc() {
  console.log(123);
};

newFunc();
console.log(typeof test);
console.log(typeof logOut);
