const formText = document.querySelector('.form-text');
const formButtonAdd = document.querySelector('.form-button-add');
const output = document.querySelector('.output');
const formButtonDel = document.querySelector('.form-button-del');
const ul = document.querySelector('.output');



/* (если число меньше десяти, перед числом добавляем ноль) */
function zero_first_format(val) {
  if (val < 10) val = '0' + val;
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
  document.querySelector('.current-date').innerHTML = realTime();
}, 0);

// Add button
formButtonAdd.addEventListener("click", () => {
  var val = formText.value;
  let ul = document.querySelector('.output');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode(val));
  li.setAttribute('class', 'output-item');
  ul.appendChild(li);
  localStorage.setItem("task", output.innerHTML);
});

// Del button
formButtonDel.addEventListener("click", () => {
  output.innerHTML = "";
  localStorage.removeItem('todo', output.innerHTML);
});

// function createTodo() {
//   const li = document.createElement("li");
//   const newTodo = formText.value;
//   ul.append(newTodo, li);
// }