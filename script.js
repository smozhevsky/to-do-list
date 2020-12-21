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

  return day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds;
}

/* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
setInterval(function () {
  document.querySelector('.current-date').innerHTML = realTime();
}, 1000);

// Add button
formButtonAdd.addEventListener("click", () => {
  var val = formText.value;
  output.innerHTML = val;
  if (!val) {
    return;
  }
  localStorage.setItem("todo", output.innerHTML);
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
