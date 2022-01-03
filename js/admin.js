// document.getElementById("welcome").textContent =
//   "Hello " + accountObject.fullname;

import { listPhone } from './data.js';

const logOut = () => {
  sessionStorage.removeItem("ACCOUNT");
  window.location.href = "../Page/login.html";
};

const changeContent = (id, tabId) => {
  let listContent = document.getElementsByClassName('body__right__content');
  let listTab = document.getElementsByClassName('body__left__item');
  for (let i = 0; i < listContent.length; i++) {
    listContent[i].classList.remove('active');
  }
  for (let i = 0; i < listTab.length; i++) {
    listTab[i].classList.remove('active');
  }
  document.getElementById(id).classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

let tabPhone = document.getElementById('tab-phone');
tabPhone.addEventListener('click', function () {
  changeContent('phone', 'tab-phone')
})

let tabUser = document.getElementById('tab-user');
tabUser.addEventListener('click', function () {
  changeContent('user', 'tab-user')
})

console.log(listPhone);

// let phoneManager = new PhoneManager(listPhone);
