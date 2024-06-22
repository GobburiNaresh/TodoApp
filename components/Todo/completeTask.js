import React from "react";
import classes from "./completeTask.module.css";
import Delete from './deleteTodo';

const CompletedTaskComponent = ({ initialTodos }) => {
  const completedTodos = initialTodos.filter(
    (todoItem) => todoItem.status === "Complete"
  );

  return (
    <div className={classes.card}>
      <div className={classes.complete}>
        <h1>Completed Tasks</h1>
        <ol>
          {completedTodos.map((todoItem) => (
            <li key={todoItem.id}>
              <p>{todoItem.description}</p>
              <Delete todoId={todoItem.id} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CompletedTaskComponent;
