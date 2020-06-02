import React from 'react'
import loadingImage from '../img/25.gif'

function loading() {
    return(
        <div className="loading">
            <img width="200px" src={loadingImage} alt="image"/>
        </div>
    )
}

export default loading;