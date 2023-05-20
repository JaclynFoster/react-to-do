import React, { useState } from 'react';
import Form from './Form';


const ListPage = () => {
    const [yourList, setYourList] = useState([{id: 'chick'}, {id: 'dog'}]);

    const listAdder = (val) => {
        let newList = [...yourList];// we spread in this to the list b/c we want 
                                    //to create a new memory instance for the array
        newList.push({id: val})
        setYourList(newList);
    }

    return (
        <div className="table">
            {yourList.map((listItem) => <div>{listItem.id}</div>)}
            <Form listAdder={listAdder} />
        </div>
        
    )
}
export default ListPage