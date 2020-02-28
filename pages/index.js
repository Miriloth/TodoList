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
  const response = await apiGet('/todos');

  return {
    todos: response.data,
  };
};

export default Index;
