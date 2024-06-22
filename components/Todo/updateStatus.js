import React, { useState } from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { IoIosRadioButtonOff } from 'react-icons/io';
import classes from './getTodo.module.css';

const UpdateStatus = ({ todo }) => {
    const [isChecked, setIsChecked] = useState(false);

    const iconChangeHandler = async () => {
        try {
            const response = await fetch('/api/updateTodoStatus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ todo }),
            });

            if (response.ok) {
                setIsChecked(true);
            } else {
                console.error('Failed to update status:', response.statusText);
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    return (
        <div className={classes.todoItem}>
            {isChecked ? (
                <CiCircleCheck className={classes.radio} />
            ) : (
                <IoIosRadioButtonOff
                    className={classes.radio}
                    onClick={iconChangeHandler}
                />
            )}
            <span>{todo.title}</span>
        </div>
    );
};

export default UpdateStatus;
