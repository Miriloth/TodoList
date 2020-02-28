import {apiGet} from '../utils/APIService';
import Link from 'next/Link'

const Index = ({todos = []}) => {
  return (
    <div>
      {todos.map(todo => (
        <Link
          key={todo.id}
          href="/todos/[id]"
          as={`/todos/${todo.id}`}
        >
          <div>{todo.title}</div>
        </Link>
      ))}
    </div>
  )
};

Index.getInitialProps = async function () {
  const response = await apiGet('/api/todos');
  const todos = await response.json();

  return {
    todos,
  };
};

export default Index;
