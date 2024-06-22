import React, { useState } from "react";
import { toast } from "react-toastify";
import Card from "../UI/Card/Card";
import { CiCirclePlus } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import classes from "./Todo.module.css";
import AddTodo from "./AddTodo";
import GetTodoComponent from "./getTodo";
import { useRouter } from "next/router";

const TodoComponent = ({ onAddTodo, initialTodos }) => {
  const router = useRouter();
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);
  const options = { day: "numeric", weekday: "short", month: "long" };
  const currentDate = new Date().toLocaleDateString("en-US", options);

  const onAddTaskHandler = () => {
    setShowAddTaskForm(true);
  };

  const onCloseTaskHandler = () => {
    setShowAddTaskForm(false);
  };

  const completeTaskHandler = () => {
    router.push("/todo/completedTask");
  };

  const handleAddTodo = (task) => {
    onAddTodo(task);
    toast.success("Task added successfully!", {
      position: "top-right"
    });
  };

  return (
    <div className={classes.today}>
      <Card>
        <div className={classes.cardHeader}>
          <h1>Today</h1>
          <p className={classes.currentDate}>{currentDate}</p>
          <div className={classes.complete}>
            <FaCheckCircle onClick={completeTaskHandler} />
          </div>
        </div>
        <div className="getTodoItem">
          <GetTodoComponent initialTodos={initialTodos} />
        </div>
        <div className={classes.addtask} onClick={onAddTaskHandler}>
          <CiCirclePlus className={classes.icon} />
          <h3>Add Task</h3>
        </div>
        {showAddTaskForm && (
          <AddTodo onClose={onCloseTaskHandler} onAddTodo={handleAddTodo} />
        )}
      </Card>
    </div>
  );
};

export default TodoComponent;
