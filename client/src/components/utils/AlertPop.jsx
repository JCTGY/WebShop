import React, { useState, useEffect } from 'react';


const AlertPop = ({ variant, text }) => {

    const [visibleAlert, setVisibleAlert] = useState(false);

    useEffect(() => {
        setVisibleAlert(true)
        setTimeout(() => {
            setVisibleAlert(false)
        }, 2000);
    });
    return (
        <Alert show={visibleAlert} ariant={variant}>
            {text}
        </Alert>
    );
}

export default AlertPop;
