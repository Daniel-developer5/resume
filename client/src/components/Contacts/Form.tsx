import React from 'react'

import { TextField, Button } from '@material-ui/core'
import Spinner from '../Spinner'

interface FormProps {
    sendEmail: (e: React.FormEvent<HTMLFormElement>) => void,
    subject: string,
    setSubject: (value: string) => void,
    message: string,
    setMessage: (value: string) => void,
    error: boolean,
    loading: boolean,
}

const Form: React.FC<FormProps> = ({
    sendEmail, subject, setSubject,
    message, setMessage, error, loading
}) => {
    return (
        <form onSubmit={sendEmail}>
            <span>Send me an email</span>
            <TextField
                label="Subject"
                variant="outlined"
                value={subject}
                onChange={e => setSubject(e.target.value)}
            />
            <TextField
                label="Message"
                multiline
                rows={6}
                variant="outlined"
                value={message}
                onChange={e => setMessage(e.target.value)}
                error={error}
                helperText={error ? 'Please fill the field' : ''}
            />
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Send
                </Button>
                { loading && <Spinner /> }
            </div>
        </form>
    )
}

export default Form