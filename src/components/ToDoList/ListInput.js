import React from 'react';

const ListInput = ({liVal, handleLiChange}) => {
    //Do not need to destructure you can pass in props as parameters in function rather than doing:
    //const [liVal, handleLiChange] = useState([])
    return (
        <div>
            <input className="list-input" placeholder="Type list item here" value={liVal} onChange={(e) => handleLiChange(e.target.value)}/> 

        </div>
        //{/*This is an html element where you will list the attributes */}
        )
}

export default ListInput;