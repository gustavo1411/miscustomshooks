import { useState } from "react";


export const useForms = (initialForm = {}) => {

    const [formValues, setFormValues] = useState(initialForm)


    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormValues({
            ...formValues,
            [name]: value   //aca se le computa al name el value
        })
    }

    const onReset = ()=> {
        setFormValues(initialForm)
    }
 


    return{
        ...formValues,  //esto retorna todas las propiedades del form: username, email, password
        formValues,
        onInputChange,
        onReset
    }
}
