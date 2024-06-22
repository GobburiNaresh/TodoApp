import { useRouter } from 'next/router';
import { Fragment } from 'react';
import TodoComponent from '../../components/Todo/Todo';
import { MongoClient } from 'mongodb';

const TodoPage = (props) => {
  const router = useRouter();
  const { initialTodos } = props;

  async function addTodoHandler(todoData) {
    const response = await fetch('/api/addTodo', {
      method: 'POST',
      body: JSON.stringify(todoData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();

    router.push('/todo');
  }

  return (
    <Fragment>
      <TodoComponent onAddTodo={addTodoHandler} initialTodos={initialTodos} />
    </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  const todoListCollection = db.collection('TodoList');

  const todoList = await todoListCollection.find().toArray();
  client.close();

  return {
    props: {
      initialTodos: todoList.map(todoItem => ({
        id: todoItem._id.toString(),
        description: todoItem.todos.description,
        status: todoItem.todos.status,
        reminder: todoItem.todos.reminder || null,
      })),
    },
    revalidate: 1,
  };
}

export default TodoPage;
