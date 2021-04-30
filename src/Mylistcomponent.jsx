import React from 'react';
import './myli.css';

const Todolist=(props)=>{
        return (
                 <li className="mylist">
                     <button className="deletebutton" onClick={()=>{
                         props.onselect(props.id);
                     }}></button>
                     <h3>{props.value}</h3>
                </li>
        );
};
export default Todolist;