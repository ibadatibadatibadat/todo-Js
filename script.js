let todos = [];
let addtodoform = document.querySelector("#todo-form");
let listgroup = document.querySelector(".list-group");
let storedtodos = localStorage.getItem("todos");
// let rendertodos = (todos) => {
//   todos.foreach((todo) => {
//     let li = document.createElement("li");
//     li.setAttribute("class", "list-group-item");
//     li.innerHTML = todo.value;
//     listgroup.appendChild(li);
//   });
// };
// rendertodos(todos);
//check if todos exists in localstorage
//if exists
if (storedtodos) {
  let parsestoredtodos = JSON.parse(storedtodos);
  todos = parsestoredtodos;
  console.log(parsestoredtodos);
}
//JSON.parse todo
//loop over array,Create li Element and append to the DOM
addtodoform.addEventListener("submit", (event) => {
  event.preventDefault();
  let addtodovalue = addtodoform.Todo.value;
  //Accessing Input tag value
  //   console.log(addtodoform.Todo.value);
  //Push Todo Array
  todos.push({
    value: addtodovalue,
    completed: true,
  });
  addtodoform.Todo.value = "";
  //local storage data saving
  localStorage.setItem("todos", JSON.stringify(todos));
  let li = document.createElement("li");
  li.setAttribute("class", "list-group-item");
  li.innerHTML = addtodovalue;
  listgroup.appendChild(li);
  //creating an li
  //set innerHTML value
  //set list-group class
  //appending
});
