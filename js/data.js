let listAccount = [];
let listPhone = [];

class Account {
  constructor(username, password, fullname, role) {
    this.username = username;
    this.password = password;
    this.fullname = fullname;
    this.role = role;
  }
}
class Phone {
  constructor(id, name, image, price, quantity, description, year, brand, condition, chip, ram) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
    this.year = year;
    this.brand = brand;
    this.condition = condition;
    this.chip = chip;
    this.ram = ram;
  }
}

let newPhone = new Phone('P1', 'Iphone 13');
let newPhone2 = new Phone('P2', 'Iphone 11');

listPhone.push(newPhone);
listPhone.push(newPhone2);

// console.log(listPhone);

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

// xuat ra : export

export { listPhone, listAccount }