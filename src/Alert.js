import React, { useState } from 'react';

const Alert = ({gifSelect}) =>{
    if(gifSelect === ''){
        return <></>
    }
    if(gifSelect === "even"){
        return <>
        <iframe src="https://giphy.com/embed/mXVj9tIHLkhWySKZj2" width="75" height="75" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </>
    }
    if(gifSelect === "profit"){
        return <>
            <iframe src="https://giphy.com/embed/opXLTEYCpCMsLJ2d3h" width="75" height="75" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </>
    }
    if(gifSelect === "loss"){
        return <>
            <iframe src="https://giphy.com/embed/FctmjeSn8hLdQSRpMJ" width="75" height="75" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </>
    }
}

export default Alert;