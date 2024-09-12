import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const TodosPage = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default TodosPage;
