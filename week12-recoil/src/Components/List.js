import React, { useState } from 'react'
import ListWrapper from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { ListData } from '../Recoil/Atoms/List'
import { isiList } from '../Recoil/Selectors/List'
import { useRecoilState, useRecoilValue } from 'recoil'


const List = props => {

    const [state, setState] = useState({
        isAdding: false, input: ''
    })
    //atom
    const [list, setList] = useRecoilState(ListData)

    //selector
    const listData = useRecoilValue(isiList)

    const handleClose = () => {
        setState({ ...state, isAdding: false, input: '' })
    }

    const handleAdd = () => {
        setList([...list, state.input])
        handleClose()
    }

    const handleOpen = () => {
        setState({ ...state, isAdding: true })
    }

    const onChange = e => {
        setState({ ...state, input: e.target.value })
    }

    return (
        <Paper elevation={0}>
            <Paper>
                <ListWrapper>
                    {list.map((item, index) => (
                        <ListItem button key={index}>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                    {list.length == 0 &&
                        <Typography align='center' variant='h6'>
                            You have nothing to do
                    </Typography>
                    }
                </ListWrapper>
                <Button color='primary' variant='contained' fullWidth onClick={handleOpen}>Add New Item</Button>

                <Typography variant='h3'>
                    {listData}
                </Typography>

                <Dialog
                    open={state.isAdding}
                    onClose={handleClose}
                    maxWidth='xs'
                    fullWidth
                >
                    <DialogTitle>Add new Item</DialogTitle>
                    <DialogContent>
                        <TextField label="Something you going to do" variant="filled"
                            autoFocus fullWidth onChange={onChange} value={state.input} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                    </Button>
                        <Button onClick={handleAdd} color="primary">
                            Add
                    </Button>
                    </DialogActions>
                </Dialog>


            </Paper>

            <Link to='/'>
                <Typography variant='body1' align='center' style={{ marginTop: '1em' }}>
                    Go to Home
                </Typography>
            </Link>

        </Paper>
    )
}

export default List