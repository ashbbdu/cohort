import React from 'react'

const GithubCard = ({data}) => {
    const {avatar_url , name , public_repos , login} = data;    
  return (
    <div>
        <div>
            <img src={avatar_url} alt="avatar" />
            <div>
                <h4>Name : {name}</h4>
                <h4>Total Repos : {public_repos}</h4>
                <h4>User Name : {login}</h4>
            </div>
        </div>
    </div>
  )
}

export default GithubCard