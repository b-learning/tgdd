let accountLogin = sessionStorage.getItem("ACCOUNT");
let accountObject = JSON.parse(accountLogin);

if (accountLogin == null || accountObject.role != "admin") {
  window.location.href = "../page/login.html";
}
