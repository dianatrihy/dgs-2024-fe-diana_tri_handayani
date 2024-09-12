import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, deleteTodo } from '../redux/todos/todoActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          {todo.title}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
