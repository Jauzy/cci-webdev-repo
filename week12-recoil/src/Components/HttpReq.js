import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography'

const HttpReq = props => {
    const [state, setState] = useState({})
    const url = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician'

    useEffect(() => {
        axios.get(url).then(result => {
            console.log(result.data.data[0])
            setState(result.data.data[0])
        }).catch(err => console.log(err))
        console.log(props.match.params.id)
    }, [])

    return (
        <div>
            HTTP REQ
            <Typography variant='h2'>
                {state.archetype}
            </Typography>
            <div style={{ display: 'flex' }}>
                {state.card_images?.map(image => (
                    <img src={image.image_url} width='100px' />
                ))}
            </div>
        </div>
    )
}

export default HttpReq