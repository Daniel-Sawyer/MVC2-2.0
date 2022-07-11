import React, {useState} from 'react'
import PropTypes from 'prop-types'
import './Index.css'

async function loginUser(credentials) {
    return fetch('http://localhost:4040/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'applictaion/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}




function Login({setToken}) {
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
            username,
            password
        })
        console.log(token);
        setToken(token)
    }
  return (
    <div className='Login-wrapper'>
        <h1>Create Login;</h1>
    <form onSubmit={handleSubmit}>
        <label>
            <p>UserName</p>
            <input type='text' onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
            <p>Password</p>
            <input type='password' onChange={e => setPassword(e.target.value)}/>
            <div>
                <button type='submit'>submit</button>
            </div>
        </label>
    </form>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}


export default Login