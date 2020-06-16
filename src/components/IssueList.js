import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Issue from './Issue';
// <
export default function IssueList() {
    const [ issues, setIssues ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues`)
            .then(r => r.json())
            .then(r => {
                setIssues(r ? r : [])
                setIsLoading(false);
            })
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <Link to="/users">User Search</Link>
            <div style={{margin: 50, border: '5px solid grey'}}>
                {issues.map((issue) => {
                    return (
                        <Issue 
                            key={issue.number} 
                            labels={issue.labels}
                            title={issue.title}
                            createdAt={issue.created_at}
                            closedAt={issue.closed_at}
                            updatedAt={issue.updated_at}
                            id={issue.id}
                            url={issue.url}
                            number={issue.number}
                            state={issue.state}
                            body={issue.body}
                            user={issue.user.login}
                        />
                    )
                })}
            </div>
        </div>
        )
}