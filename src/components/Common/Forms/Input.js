import React from 'react'
import './Input.css'
export default (props)=>(
    <div className="input-container">
    <input 
    type={props.type}
        name={props.name}
        className="input"
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
    />
    </div>

)