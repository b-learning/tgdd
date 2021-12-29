let listAccount = [];

class Account {
  constructor(username, password, fullname, role) {
    this.username = username;
    this.password = password;
    this.fullname = fullname;
    this.role = role;
  }
}

let adminAccount = new Account(
  "trangiabao",
  "trangiabao123",
  "Tran Gia Bao",
  "admin"
);

let adminAccount2 = new Account("admin", "admin123", "Admin", "admin");
let userAccount = new Account("user", "user123", "Trần Thị User", "user");

listAccount.push(adminAccount);
listAccount.push(adminAccount2);
listAccount.push(userAccount);
