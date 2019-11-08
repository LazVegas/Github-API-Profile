import React from 'react'

export default function (props) {
    return (
        <div className="mainsection">
            <div className="navbar">
                <div>Overview</div>
                <div>Repositories</div>
                <div>
                    {props.repos.map((repo, i) => (
                        <div key={'repo' + i}>
                            <p>{repo.public_repos}</p>
                        </div>
                    ))}
                </div>
                <div>Projects</div>
                <div>Packages</div>
                <div>Stars</div>
                <div>Followers</div>
                <div>Following</div>
            </div>
            <div id="navbar2">
                <input type="text" placeholder="Find a repository" id="findrepo" />
                <button id="type">Type: All &#9660;</button>
                <button id="language">Language: All &#9660;</button>
                <button id="new">&#127970;&nbsp;&nbsp;New</button>
            </div>
            <div>
                {props.repos.map((repo, i) => (
                    <div id="repolist" key={'repo' + i}>
                        <a id="reponame" href={repo.html_url}>{repo.name}</a>
                        <p>{repo.description}</p>
                        <p>&#128514;&nbsp;&nbsp;{repo.language}</p>
                    </div>
            ))}
            </div>
        </div>
    )
}