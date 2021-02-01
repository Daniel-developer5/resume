import React, { useEffect, useState } from 'react'

import Alert from '../Alert'
import List from './List'
import Form from './Form'

import './Contacts.scss'

const Contacts: React.FC = () => {
    const 
        [ subject, setSubject ] = useState<string>(''),
        [ message, setMessage ] = useState<string>(''),
        [ error, setError ] = useState<boolean>(false),
        [ alert, setAlert ] = useState<boolean>(false),
        [ sendError, setSendError ] = useState<boolean>(false),
        [ loading, setLoading ] = useState<boolean>(false)

    let timeOut: any

    useEffect(() => {
        return () => clearTimeout(timeOut)
    })

    const onAlert = (isError?: boolean) => {
        if (!alert) {
            setAlert(true)
            setLoading(false)

            if (isError) {
                setSendError(true)
            }

            timeOut = setTimeout(() => {
                setAlert(false)
                setSendError(false)
            }, 3000)
        }
    }

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (message.trim()) {
            if (error) {
                setError(false)
            }

            setLoading(true)

            fetch('http://localhost:8080/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ subject, message, })
            })
            .then(() => onAlert())
            .catch(() => onAlert(true))

            setSubject('')
            setMessage('')
        } else {
            setError(true)
        }
    }

    return (
        <div className="Contacts section">
            <Alert isOpen={alert} error={sendError} />
            <List />
            <Form {...{
                sendEmail, subject, setSubject,
                message, setMessage, error, loading,
            }} />
        </div>
    )
}

export default Contacts