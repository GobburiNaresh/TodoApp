import React, { useRef, useState } from 'react';
import Card from '../UI/Card/Card';
import classes from './AddTodo.module.css';

const AddTodo = (props) => {
  const taskNameRef = useRef('');
  const [reminderDate, setReminderDate] = useState('');

  const onCancelHandler = () => {
    props.onClose();
  };

  const onAddTaskHandler = () => {
    const taskName = taskNameRef.current.value;
    if (taskName.trim().length > 0) {
      props.onAddTodo({
        description: taskName,
        reminder: reminderDate,
      });
      props.onClose();
    }
  };

  return (
     <div className={classes.card}>
      <div className={classes.addTodo}>
        <label>Task name</label>
        <input
          type="text"
          placeholder="Description"
          ref={taskNameRef}
        />
        <label>Reminder</label>
        <input
          type="datetime-local"
          value={reminderDate}
          onChange={(e) => setReminderDate(e.target.value)}
        />
        <div className={classes.buttonContainer}>
          <button className={classes.cancel} onClick={onCancelHandler}>Cancel</button>
          <button className={classes.addtask} onClick={onAddTaskHandler}>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
