import {apiGet} from '../utils/APIService';

const Index = ({todos = []}) => {
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  )
};

Index.getInitialProps = async function () {
  const response = await apiGet('/api/todos');
  const todos = await response.json();
console.log(todos)
  return {
    todos,
  };
};

export default Index;
