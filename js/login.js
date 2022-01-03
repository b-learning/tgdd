import { listAccount } from './data.js'

let buttonTag = document.getElementById("login-button");

buttonTag.addEventListener("click", (e) => {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let account = listAccount.filter(function (account) {
    return account.username == username && account.password == password;
  });

  // [0]
  // []
  if (account.length == 0) {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    Swal.fire({
      icon: "error",
      title: "Thông báo",
      text: "Tài khoản không tồn tại!",
    });
  } else {
    let accountJson = JSON.stringify(account[0]);
    sessionStorage.setItem("ACCOUNT", accountJson);
    window.location.href = "./admin.html";
  }
});
