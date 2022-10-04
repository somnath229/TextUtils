import React from 'react'

function alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style = {{height: '5rem'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show m-2 w-50`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>! {props.alert.msg}
            </div>}
        </div>
    )
}

export default alert
