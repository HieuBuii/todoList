window.addEventListener("load", function () {
  const form = document.querySelector(".todo-form");
  const input = document.querySelector(".todo-input");
  const todoList = document.querySelector(".todo-list");
  let saves = JSON.parse(localStorage.getItem("todoList")) || [];

  if (Array.isArray(saves) && saves.length > 0) {
    saves.forEach((item) => {
      createTodo(item);
    });
  }

  console.log("this is change");
  const printT = (t) => {
    while (t > 100) {
      console.log(`Print ${T}`);
      t--;
    }
  };
  form.addEventListener("submit", handleSubmit);
  function handleSubmit(e) {
    e.preventDefault();
    const text = input.value;
    if (text) {
      createTodo(text);
      saves.push(text);
      localStorage && localStorage.setItem("todoList", JSON.stringify(saves));
      input.value = "";
      //alert
      if (document.querySelector(".alert")) {
        const alert = document.querySelector(".alert");
        alert.parentElement.removeChild(alert);
      }
      const template = `
        <div class="alert">
          <i class="fa-regular fa-circle-check alert-icon alert-icon--success"></i>
          <span class="alert-text">Add completed !!!</span>
        </div>`;
      document.body.insertAdjacentHTML("afterbegin", template);
      const alert = document.querySelector(".alert");
      if (alert) {
        setTimeout(function () {
          alert.parentElement.removeChild(alert);
        }, 2000);
      }
    } else {
      if (document.querySelector(".alert")) {
        const alert = document.querySelector(".alert");
        alert.parentElement.removeChild(alert);
      }
      const template = `
      <div class="alert">
        <i class="fa-regular fa-circle-check alert-icon alert-icon--fail"></i>
        <span class="alert-text">Please fill your task !!!</span>
      </div>`;
      document.body.insertAdjacentHTML("afterbegin", template);
      const alert = document.querySelector(".alert");
      if (alert) {
        setTimeout(function () {
          alert.parentElement.removeChild(alert);
        }, 2000);
      }
    }
  }

  function createTodo(text) {
    const template = `<div class="todo-item">
    <span class="todo-text">${text}</span>
    <i class="fa fa-trash remove"></i>
  </div>`;
    todoList.insertAdjacentHTML("beforeend", template);
  }

  todoList.addEventListener("click", function (e) {
    if (e.target.matches(".remove")) {
      const todoItem = e.target.parentElement;
      todoItem.parentElement.removeChild(todoItem);
      const text = e.target.previousElementSibling.textContent;
      const index = saves.findIndex((item) => item === text);
      saves.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(saves));
      //alert
      if (document.querySelector(".alert")) {
        const alert = document.querySelector(".alert");
        alert.parentElement.removeChild(alert);
      }
      const template = `
      <div class="alert">
        <i class="fa-regular fa-circle-check alert-icon alert-icon--success"></i>
        <span class="alert-text">Remove Success!!!</span>
      </div>`;
      document.body.insertAdjacentHTML("afterbegin", template);
      const alert = document.querySelector(".alert");
      if (alert) {
        setTimeout(function () {
          alert.parentElement.removeChild(alert);
        }, 2000);
      }
    }
  });
});

console.log("this is change3");
