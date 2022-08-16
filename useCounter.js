import { useState } from "react"



export const useCounter = (initialState = 10) => {

    const [counter, setCounter] = useState(initialState)

    
    const increment = (value = 1) => {
        setCounter( (current) => current + value)   //el current se pone para que cuando se hace test se pueda llamar dos veces la func de increment dentro de un act. sino toma el valor del counter original
    }

    const reset = () => {
        setCounter(initialState)
    }

    const decrement = (value = 1) => {
        setCounter((current) => current - value)
    }

    return{
        counter,
        increment,
        reset,
        decrement
    }
}