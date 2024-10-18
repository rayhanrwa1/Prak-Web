// Ambil elemen-elemen penting
const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', () => {
  const todoText = todoInput.value.trim();
  if (todoText) {
    tambahTodo(todoText);
    todoInput.value = ''; 
  }
});

function tambahTodo(text) {
  const todoItem = document.createElement('div');
  todoItem.className = 'todo-item';

  const todoContent = document.createElement('span');
  todoContent.textContent = text;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Ubah';
  editBtn.addEventListener('click', () => {
    todoInput.value = text; 
    todoItem.remove(); 
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Hapus';
  deleteBtn.addEventListener('click', () => {
    todoItem.remove(); 
  });

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  todoItem.appendChild(todoContent);
  todoItem.appendChild(actions);

  todoList.appendChild(todoItem);
}
