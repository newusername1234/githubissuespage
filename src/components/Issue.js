import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

// <
export default function Issue(props) {
    const status = props.state === 'open'? `opened ${moment.utc(props.createdAt).fromNow()}` : `closed ${moment.utc(props.closedAt).fromNow()}`;
    return (
        <div style={myStyle}>
            <p><b><Link to={`/issue/${props.number}`}>{props.title}</Link></b></p>
            {props.labels.map((label, i) => <span key={i} style={{backgroundColor: `#${label.color}`, margin: 5, padding: 3}}>{label.name}</span>)}
            <sup><i>#{props.number}</i> {status} ago by {props.user}</sup>
            {/* <p>{props.body.slice(0, 50) + '...'}</p> */}
        </div>
    )
}

const myStyle = {
    border: '1px solid grey',
    padding: 5,
    textAlign: 'left'
}