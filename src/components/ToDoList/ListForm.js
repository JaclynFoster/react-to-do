import React, { useState } from 'react';
import ListInput from './ListInput';
import SubmitButton from './SubmitButton';

const ListForm = ({updateList}) => {
   const [listInputValue, setListInputValue] = useState("") 
    return (
        <div className="list-container">
          <ListInput liVal={listInputValue} handleLiChange={setListInputValue}/> {/* If you are typing into a component you name the prop variable do not use html attributes*/}
          <SubmitButton clickHandler={() => {
            updateList(listInputValue)
            setListInputValue("")    
          }}/>
        </div>
    )
}

export default ListForm;