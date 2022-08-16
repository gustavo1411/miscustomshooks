import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"

// const initialState = [] // no hace falta podemos pasar un [] al reducer

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];   //lee el localstorage y inicializa el useReducer(init)
 }

export const useTodos = () => {


    const [todos, dispatch] = useReducer(todoReducer , [] , init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))  //cuando los todos cambian los guarda en localstorage
    }, [todos])
    
    const handleDeleteTodo = (id)=> {
        // console.log(id);
        dispatch({
            type:'Delete Todo',
            payload: id
        })

    }

    const handleNewTodo = (todo) => {
        console.log(todo);
        const action = {
            type: 'Add Todo',
            payload: todo
        }

        dispatch(action)
    }

    const handleToggleTodo =(id)=> {
    //    console.log(id);
        dispatch({
            type: 'Toggle Todo',
            payload:id
        })
    }

    //todoCount
    //todoPendingCount

    return {
        // ...todos,
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todoCount: todos.length,
        todoPendingCount: todos.filter(todo => !todo.done).length
    }

 
}
