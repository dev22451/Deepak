import React from 'react';
import './ListItems.css';


function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/><input onClick={props.onCheck} type="checkbox" className="dee"/>
             {(props.isChecked ? <span className="bana">Complete</span> : null)}
            <span>
            <button className="Router" onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}>Edit</button>
            

            <button className="index" onClick={() => {
             props.deleteItem(item.key)
             }}>Delete</button>
       
            </span>
     </p>
     
    </div>})
    return <div>
        
        {listItems}
        
    
    </div>;
  }

  export default ListItems;


