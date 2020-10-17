import React from 'react'
import TextField from '@material-ui/core/TextField'

const Input = props => {
    const { id, label, onChange, value, valid, errMsg } = props
    return (
        <TextField id={id} label={label} variant="filled" style={{ width: '100%', margin: '.5em 0' }}
            onChange={onChange} value={value} error={!valid}
            helperText={!valid ? label + ' '+ errMsg : ''}
            type={id == 'password' ? 'password' : 'text'}
        />
    )
}

export default Input