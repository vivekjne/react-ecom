import React from 'react'
import './Button.css'
export default (props)=>(
    <div className="button-container">
    <input 
    type="submit"
        name={props.name}
        className="button"
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
    />
    </div>

)