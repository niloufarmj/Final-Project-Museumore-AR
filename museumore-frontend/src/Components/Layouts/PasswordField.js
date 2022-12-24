import React from 'react';
import '../../Assets/CSS/input.css'

function PasswordField(params) {
    return(
        <input type="password" placeholder={params.text} className="input"/>   
    )
}

export default PasswordField;