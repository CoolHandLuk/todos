import React from 'react'
import Todo from '../Todo/Todo'

const TodoList = ({text, todos, setTodos, filteredTodos })=> {
    return (
        <>
            <div>
                <ul className="tasks__list">
                    {filteredTodos.map((todo)=>
                        <Todo 
                        text={todo.text} 
                        id= {todo.id}
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                        />
                    )}
                </ul>
                
            </div>
        </>

    )
}

export default TodoList;