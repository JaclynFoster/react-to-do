import React, { useState } from 'react'
import ListForm from './ListForm'



const ListPage = () => {
    const [listItems, updateListItems] = useState(["Potato", "Chris eats poo"])
    const updateList = (value) => {
        let newList = [...listItems]
        newList.push(value)
        updateListItems(newList)
    }
    const deleteItem = (index) => {
        let deleteList = [...listItems]
        deleteList.splice(index, 1)
        updateListItems(deleteList)
    }
    return (
        <div className="table-parent">
            <ListForm updateList={updateList}/>
          <table>
            <tbody>
                <tr>
                <th>Delete</th>
                <th>List Item:</th>
                </tr>
                {listItems.map((element, index) => {
                return (
                    <tr>
                        <td><button className="delete-btn" onClick={() => {
                      deleteItem(index)
                    }}>X</button></td>
                        <td><h3 className="list-item" key={index}>{element}</h3></td>
                    </tr>
                   
                )
            })}
            </tbody>
          </table>
        
        </div>
    )
}


export default ListPage