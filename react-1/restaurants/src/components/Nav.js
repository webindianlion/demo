import React, { useState } from 'react';


const Nav = function( props){
  
    return props.uniquecatetory.map((cat, i) => {   
   
            return <li className="nav-item" key={i}>
            <button className="nav-link btn text-uppercase fw-bold" onClick={props.dataChange}>{cat}</button>
          </li>
          })     
        
}

export default Nav;
