import React from 'react'

import './Alert.scss'

interface AlertProps {
    isOpen: boolean,
    error: boolean,
}

const Alert: React.FC<AlertProps> = ({ isOpen, error }) => {
    return (
        <div className="alert-box">
            <div 
                className={`
                    alert alert-${error ? 'danger' : 'success'} 
                    ${isOpen ? 'open' : ''}
                `} 
                role="alert"
            >
                { error ?
                    'Sorry, something has gone wrong :(. Please reload the page' :
                    'Thanks for you email! :)'
                }
            </div>
        </div>
    )   
}

export default Alert