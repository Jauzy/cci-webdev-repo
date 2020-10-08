import React from 'react'
import TextField from '@material-ui/core/TextField'

const Input = props => {
    const { id, label, onChange, value, valid } = props
    return (
        <TextField id={id} label={label} variant="filled" style={{ width: '100%', margin: '.5em 0' }}
            onChange={onChange} value={value} error={!valid}
            helperText={!valid ? label + ' must 8 characters length' : ''}
            type={id == 'password' ? 'password' : 'text'}
        />
    )
}

export default Input