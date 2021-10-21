import React from 'react';
import './App.css';
 function Plan(props){


    return(
        <> 
       <div className="deep">
           
        <li className="shadow "><input type="checkbox" className="max"onClick={() => { props.sendData(props.id) }} /> {props.value}<span className="daye" >Complete</span></li>
        <button className="sumo">Edit</button>
        <button className="kumar" onClick={() => { props.sendData(props.id) }}>X</button>
       </div> 
        <br/>
     </>
    )   
    
}

export default Plan;



