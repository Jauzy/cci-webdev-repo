import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ListWrapper from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { ListData } from '../Recoil/Atoms/List'
import { useRecoilState } from 'recoil'

const Info = props => {

    const [list, setList] = useRecoilState(ListData)

    return (
        <Paper style={{ paddingTop: '1em' }}>
            <Typography variant='h4' align='center' gutterBottom>
                Todo List
            </Typography>
            <ListWrapper>
                {list.map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemText primary={`${index + 1}. ${item} `} />
                    </ListItem>
                ))}
                {list.length == 0 &&
                    <Typography align='center' variant='h6'>
                        You have nothing to do
                    </Typography>
                }
            </ListWrapper>
            <Link to='/add'>
                <Button variant='contained' fullWidth color='primary'>
                    Edit Todo List
                </Button>
            </Link>
        </Paper>
    )
}

export default Info