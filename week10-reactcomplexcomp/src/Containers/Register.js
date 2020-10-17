import React, { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Input from '../Components/Input'

const Register = props => {

    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [valid, setValid] = useState({
        name: false,
        email: false,
        password: false
    })

    const validate = () => {
        setValid({
            ...valid,
            name: state.name.length > 4,
            email: state.email.length > 8,
            password: state.password.charAt(0) == state.password.charAt(0).toUpperCase() && state.password != ''
        })
    }

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value })
    }

    useEffect(() => {
        validate()
    }, [state.name, state.email, state.password])

    return (
        <Box style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Paper>
                <Typography variant='h2' align='center'>
                    Register
                </Typography>
                <Input id='name' label='Name' onChange={onChange} errMsg='Nama Harus lebih dari 4 char.'
                    value={state.name} valid={valid.name} />
                <Input id='email' label='Email' onChange={onChange} errMsg='Email Harus lebih dari 8 char.'
                    value={state.email} valid={valid.email} />
                <Input id='password' label='Password' onChange={onChange} errMsg='Awal Password Harus Huruf Kapital'
                    value={state.password} valid={valid.password} />
            </Paper>
        </Box>
    )
}

export default Register