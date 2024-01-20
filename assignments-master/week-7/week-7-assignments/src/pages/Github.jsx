import { useEffect, useState } from 'react'
import GithubCard from '../components/GithubCard';

const username = "ashbbdu";
const Github = () => {
    const [userData , setUserData] = useState({})
    const fetchDetails = async () => {
        const data = await fetch(`https://api.github.com/users/${username}`)
        const json = await data.json()
        setUserData(json)
    }

    useEffect(() => {
        fetchDetails();
    },[])

  return (
    <div>
        <GithubCard data={userData} />
    </div>
  )
}

export default Github