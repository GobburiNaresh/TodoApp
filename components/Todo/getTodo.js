import React, { Fragment } from "react";
import classes from "./getTodo.module.css";
import Delete from "./deleteTodo";
import UpdateStatus from "./updateStatus";

const GetTodoComponent = (props) => {
  const incompleteTodos = props.initialTodos.filter(
    (todo) => todo.status === "Incomplete"
  );

  return (
    <Fragment>
      <ul className={classes.getItem}>
        {incompleteTodos.map((todo) => (
          <li key={todo.id} className={classes.item}>
            <div className={classes.iconContainer}>
              <UpdateStatus todo={todo} key={todo.id} />
            </div>
            <span className={classes.description}>{todo.description}</span>
            <span className={classes.reminder}>
              {new Date(todo.reminder).toLocaleString("en-US")}
            </span>
            <Delete todoId={todo.id} />
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default GetTodoComponent;
