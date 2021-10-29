import React from 'react';
import './ListItems.css';

import {useState} from 'react';
function ListItems(props){
    const items = props.items;
    const [disable, setDisable]=useState({pointerEvents: "none"});
    // const [isCheck, setIsCheck]=useState({"statue": 'true', "id": 1});
    const handlarEdit =(id)=>{
        setDisable({pointerEvents: ""})
        
    }
    const handlarUpdate =(id)=>{
        setDisable({pointerEvents: "none"})
     }
    const handleChecked =(id)=>{
        // alert(isCheck)
    // setIsCheck({"statue": 'true', "id": id});
    }
return(
<>
<table border="1">
<tr>
    <th>Sr</th>
    <th>Title</th>
    <th>Action</th>
</tr>

{items.map((item, k)=>(
     <tr key={item.key}>
        <td>{k}</td>
    <td>
        {/* <input onClick={()=>{handleChecked(items.id)}} type="checkbox" className="dee"/> */}
        <input onClick={props.onCheck} type="checkbox" className="dee"/>
           {(props.isChecked ? <span className="bana">Complete</span> : null)}
        
             <input type="text" style={disable} id={'input'+item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
             </td>
    
    <td>
    <button className="faire" onClick={()=>{handlarUpdate(item.key)}}>Save</button>   
            <button className="Router" onClick={()=>{handlarEdit("input"+item.key)}}>Edit</button>
            <button className="index" onClick={() => {
             props.deleteItem(item.key)
             }}>Delete</button>
    </td>
</tr>
//         {/* <p>
//    <input type="text" style={disable} id={'input'+item.key} value={item.text} onChange={(e)=>{
//              props.setUpdate(e.target.value,item.key)}}/><input onClick={props.onCheck} type="checkbox" className="dee"/>
//              {(props.isChecked ? <span className="bana">Complete</span> : null)}
//             <span>
//             <button className="faire" onClick={()=>{handlarUpdate(item.key)}}>Save</button>   
//             <button className="Router" onClick={()=>{handlarEdit("input"+item.key)}}>Edit</button>
//             <button className="index" onClick={() => {
//              props.deleteItem(item.key)
//              }}>Delete</button>
       
//             </span>
//      </p> */}
     ))}

    </table>
    
</>
)
}

  export default ListItems;
