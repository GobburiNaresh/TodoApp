import React from 'react';
import classes from './deleteTodo.module.css';
import { MdDelete } from "react-icons/md";

const Delete = (props) => {
  const deleteTodoHandler = async () => {
    const response = await fetch('/api/deleteTodo', {
      method: 'DELETE',
      body: JSON.stringify({ id: props.todoId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <div className={classes.menuKebab} onClick={deleteTodoHandler}>
      <MdDelete  className={classes.delete}/>
    </div>
  );
};

export default Delete;
