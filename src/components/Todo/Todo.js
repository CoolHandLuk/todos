import React from 'react';

const Todo = ({text, todo, todos, setTodos})=> {
    const deleteTask =()=> {
    setTodos(todos.filter(item=> todo.id !==item.id)
    )
    }

    const doneTask = ()=> {
        setTodos(
            todos.map((item)=>{
                if (todo.id===item.id){
                    return{
                        ...item, completed:!item.completed
                    }
                } else {
                    return item;
                }
            })
        )
    }
    return (
        <>
        <div className="tasks__element">
        <li className={`tasks__row ${todo.completed ? "completed" : ""}`}>
        {text}
        </li>
        <button className="tasks__button-remove" onClick={deleteTask}><i class="fas fa-trash"></i></button>
        <button className="tasks__button-confirm" onClick={doneTask}><i class="fas fa-check"></i></button>
        </div>
        </>
    )
}

export default Todo;