import React from 'react';
import {useState, useEffect, useRef} from 'react';


const Input = ({inputValue, changeHandler}) => {
    const [someLocalVar, setLocalVar] = useState({});

    useEffect(() => {
        console.log("text changed: ", inputValue)
        if(inputValue.includes("shit")) {
            alert("Don't type that!")
        }
        // I get called on state change AND sometimes on initial load
        return () => {
            //I get on unmount
        }
    }, [inputValue]) // watch variables in the []
    useEffect(() => {
        getDucks()

    }, []) // watch variables in the []

    const getDucks = () => {
        // axios get ducks
        // .then setLocalVar(resp.data)
    }

return (
    <input value={inputValue} onChange={(e) => changeHandler(e.target.value)} placeholder="Type something here..."/>
)
}

export default Input;