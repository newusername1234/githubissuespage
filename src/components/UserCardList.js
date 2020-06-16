import React from 'react'
import UserCard from './UserCard';

export default function UserCardList(props) {
    return (
        <div>
            {props.userData.map((user, i) => {
                return <UserCard user={user} key={i} />
            })}
        </div>
    )
}
