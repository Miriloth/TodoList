import {apiGet} from "../../utils/APIService";

export default function Todo({todo = {}}) {
  return (
    <div className="todoWrapper">
      {todo.id}
      {todo.title}
      {todo.duedate}
      {todo.done}
      <style jsx>{`
        .todoWrapper {
          background: 'red'
        }
      `}</style>
    </div>
  );
}

Todo.getInitialProps = async function (context) {
  const {id} = context.query;
  const response = await apiGet(`/api/todos/${id}`);
  const todo = await response.json();

  return {
    todo,
  };
};
