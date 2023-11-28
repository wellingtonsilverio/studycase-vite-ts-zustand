import Button from "../../components/Button";
import { useTodoState } from "../../hooks/store/todo";

import './Todo.css';

function getInputById(id: string) {
  return document.getElementById(id) as HTMLInputElement;
}
function clearInput(input: HTMLInputElement) {
  input.value = "";
}

const Todo: React.FC = () => {
  const todos = useTodoState(state => state.todos);
  const addTodo = useTodoState(state => state.addTodo);
  const removeTodo = useTodoState(state => state.removeTodo);

  const handleAddTodo = () => {
    const inputTitle = getInputById('title');
    
    addTodo(inputTitle?.value || "");

    clearInput(inputTitle);
  }

  const handleRemoveTodo = (key: number) => {
    removeTodo(key);
  }

  return (
    <div className="Todo">
      <h1>Lista de afazeres</h1>
      <div className="Input">
        <input id="title" /><Button onClick={handleAddTodo}>Adicionar</Button>
      </div>
      <ul>
        {todos?.map(todo => (
          <li key={todo.key}>{todo.label} <a onClick={() => handleRemoveTodo(todo.key)}>X</a></li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
