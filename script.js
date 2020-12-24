const formText = document.querySelector(".form-text");
const formButtonAdd = document.querySelector(".form-button-add");
const formButtonDel = document.querySelector(".form-button-del");
const ol = document.querySelector(".output");
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

/* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(val) {
  if (val < 10) val = "0" + val;
  return val;
}

/* функция получения текущей даты и времени */
function realTime() {
  var current_datetime = new Date();
  var day = zero_first_format(current_datetime.getDate());
  var month = zero_first_format(current_datetime.getMonth() + 1);
  var year = current_datetime.getFullYear();
  var hours = zero_first_format(current_datetime.getHours());
  var minutes = zero_first_format(current_datetime.getMinutes());
  var seconds = zero_first_format(current_datetime.getSeconds());

  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
}

// Обновление каждую сек.
setInterval(function () {
  document.querySelector(".current-date").innerHTML = realTime();
}, 0);

//Добавление таски в список
const taskAdd = (task) => {
  // if (formText.value.length < 1) {
  //   return;
  // }; Почему-то из-за проверки не фиксится ol при перезагрузке
  const li = document.createElement("li");
  li.textContent = task;
  li.setAttribute("class", "output-item");
  ol.appendChild(li);
};

// Добавление таски по клику на btn
formButtonAdd.addEventListener("click", () => {
  itemsArray.push(formText.value);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  taskAdd(formText.value);
  formText.value = ""; //Чтобы не удалять таску из поля ввода каждый раз
});

// Добавление таски по нажатию enter
formText.addEventListener("keypress", function (e) {
  if (13 == e.keyCode) {
    itemsArray.push(formText.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    taskAdd(formText.value);
    formText.value = "";
  }
});

data.forEach(item => {
  taskAdd(item);
});

// Del button
formButtonDel.addEventListener("click", function () {
  localStorage.clear();
  while (ol.firstChild) {
    ol.removeChild(ol.firstChild);
  }
  itemsArray = [];
});