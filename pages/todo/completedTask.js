import { Fragment } from 'react';
import CompleteTask from '../../components/Todo/completeTask';
import { MongoClient } from 'mongodb';

const CompletedTask = (props) => {
  const {initialTodos} = props;

  return (
    <Fragment>
        <CompleteTask initialTodos={initialTodos}/>
      </Fragment>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();

  const todoListCollection = db.collection("TodoList");

  
  const todoList = await todoListCollection.find().toArray();
  client.close();

  return {
    props: {
      initialTodos: todoList.map(todoItem =>({
        id: todoItem._id.toString(),
        description: todoItem.todos.description,
        reminder: todoItem.todos.reminder || null,
        status: todoItem.todos.status

      }))
    },
    revalidate: 1,
  };
}

export default CompletedTask;
