const formText = document.querySelector(".form-text");
const formButtonAdd = document.querySelector(".form-button-add");
const formButtonDel = document.querySelector(".form-button-del");
const ul = document.querySelector(".task-list-output");
let itemsArray = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

localStorage.setItem("items", JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem("items"));

//Добавление таски в список
const taskAdd = (task) => {
  if (task.length < 1) {
    return;
  };

  const li = document.createElement("li");
  li.textContent = task;
  li.setAttribute("class", "output-item");
  ul.appendChild(li);
};

// Добавление таски по клику на btn
formButtonAdd.addEventListener("click", () => {
  if (formText.value) {
    itemsArray.push(formText.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
  }
  taskAdd(formText.value);
  formText.value = ""; //Чтобы не удалять таску из поля ввода каждый раз
});

// Добавление таски по нажатию enter
formText.addEventListener("keypress", function (e) {
  if (13 == e.keyCode && formText.value) {
    itemsArray.push(formText.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    taskAdd(formText.value);
    formText.value = "";
  }
});

// Показываем, что есть в Local storage
data.forEach(item => {
  taskAdd(item);
});

// Удаление списка и очистка Local storage
formButtonDel.addEventListener("click", function () {
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArray = [];
});