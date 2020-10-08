import React from 'react'

const Image = props => {
    return(
        <img src={props.urlGambar} alt={props.alt} style={{width:'400px', height:'400px', objectFit:'cover'}} />
    )
}

export default Image