/* Wenn ich den Button drücke: 
  -soll ein neues Element erzeugt werden (<li>)
  -soll ein neues TextNode erzeugt werden
  -sollen die Komponenten zusammengefügt und an die Liste angehangen werden*/

const log = console.log;

// Todolist, Eingabezeile und Button
const todoList = document.body.querySelector("#todoList");
const entryBar = document.body.querySelector("#entryBar");
const entryButton = document.body.querySelector("#entryButton");

function createEntry() {
  const newLi = document.createElement("li");
  const newEntry = entryBar.value;
  const newTextNode = document.createTextNode(newEntry);
  const newTodo = newLi.appendChild(newTextNode);
  todoList.appendChild(newTodo);
}

// event listener

entryButton.addEventListener("click", () => {
  createEntry();
});
