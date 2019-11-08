import React from 'react'

export default function(props) {


    return (
        <aside className="asideWrapper">
            <img src={props.avatar_url} />
            <h1>{props.name}</h1>
            <h2>{props.login}</h2>
            <button id="editprofile">Edit profile</button>
        </aside>
    )
}