import React, {useState} from 'react'
import {Form, Header, Container} from 'semantic-ui-react'
 
class Contact extends React.Component {

    // const [email, setEmail] = useState('')
    // const [name, setName] = useState('')
    // const [comments, setComments] = useState('')

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     fetch(`https://hooks.zapier.com/hooks/catch/7045148/o1vyoou/`, {
    //         method: 'POST',
    //         body: JSON.stringify({ email, name, comments }),
    //     })
    // }

    // const emailIsValidCheck = () => {
    //     const emailIsValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    //     return emailIsValid
    // }

    render() {
        return (
            <>
            <Container id="contact-wrapper">
                <div className="responsive-iframe">
                    <iframe 
                        src="https://docs.google.com/forms/d/e/1FAIpQLScxhYHXfEXjIkT0uO3VhZcGjNhOtQBUgvT_x0Pg-L4L2zk_2A/viewform?embedded=true" 
                        frameBorder="0" 
                        marginHeight="0" 
                        scrolling="no" 
                        marginWidth="0">Loading…</iframe>
                </div>
            {/* <Header>Contact Me</Header>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="contact-form">
                    <Form.Field required
                        control='input'
                        label='Full name'
                        placeholder='Full name'
                        id='form-input-full-name'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Field required
                        id='form-input-control-error-email'
                        control='input'
                        label='Email'
                        placeholder='joe@schmoe.com'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Field 
                        id='form-input-control-email'
                        control='textarea'
                        rows="6"
                        label='Any questions for me? Feel free to ask!'
                        placeholder='Type here'
                        value={comments}
                        onChange={e => setComments(e.target.value)}
                    />
                        <Form.Button disabled={((email.length === 0 || name.length === 0) || !emailIsValidCheck())} content='Submit' />
                </Form.Group>
            </Form> */}
            </Container>
            </>
        )
    }
}

export default Contact