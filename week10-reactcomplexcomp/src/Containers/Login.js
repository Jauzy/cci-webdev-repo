import React, { useState, useEffect } from 'react'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Input from '../Components/Input'

const Login = props => {

    const [state, setState] = useState({
        email: '', password: ''
    })
    const [valid, setValid] = useState({
        email: false, password: false
    })

    const onChange = (e) => {
        setState({ ...state, [e.target.id]: e.target.value })
        setValid({ ...state, [e.target.id]: e.target.value.length > 8 })
    }

    return (
        <div style={{
            minHeight: '100vh', width: '100vw', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            backgroundImage: "url('https://images7.alphacoders.com/881/thumb-1920-881074.jpg')",

        }}>

            <Paper style={{ padding: '2em', maxWidth: '500px', overflowX: 'hidden' }}>
                <Typography variant='h2' align='center'>
                    Login
                </Typography>
                <Typography variant='body1' align='center'>
                    Please login with your credentials.
                </Typography>
                <Input label='Email' id='email' onChange={onChange} value={state.email} valid={valid.email} />
                <Input label='Password' id='password' onChange={onChange} value={state.password} valid={valid.password} />
                <Button variant='contained' color='primary'>
                    Login Now
                </Button>
            </Paper>

        </div>
    )
}

export default Login