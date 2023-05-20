import React, { useState } from 'react';
import Input from './Input';


const Form = ({listAdder}) => {
    const [inputText, setInputText] = useState('');
    return (
    <div>
        <Input inputValue={inputText} changeHandler={setInputText} />
        <button onClick={() => {
            //pretend it does axios req
            listAdder(inputText)
            setInputText('')
        }}>Click me</button>
    </div>
    )
}

export default Form;