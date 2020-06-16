import React from 'react'
// <

export default function UserCard(props) {
    return (
        <div style={{border: '1px solid grey', margin: 5, padding: 10}}>
            <img style={{height: 50, width: 50}} src={props.user.avatar_url} alt="" />
             {props.user.name}            
        </div>
    )
}
