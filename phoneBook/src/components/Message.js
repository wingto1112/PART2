import React from 'react'
const Message = ({ message }) => {
    const addStyle = {
        color: 'green',
        fontSize: 20,
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    const errorStyle = {
        ...addStyle, color: 'red'
    }
    if (message === null) { return null }
    else if (message.includes('removed')) {
        return (
            <div style={errorStyle}>{message}</div>
        )
    }
    return (
        <div style={addStyle}>{message}</div>
    )
}
export default Message