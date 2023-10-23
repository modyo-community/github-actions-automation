/// create a new form component from scratch
// the form elements must be wrapped in a form tag
// the form tag must have an id attribute
// the form tag must have a submit button
// the form should use Bootstrap classes for styling
// The component should not use external libraries like Formik, react-bootstrap or Redux Form

import React, { useState } from 'react'

const MyForm = () => {

    const [formStatus, setFormStatus] = useState()

    const onSubmitHandler = (event)=>{
        event.preventDefault();
        setFormStatus(true);
    }

    return (
        <>

        <div className='form-container'>
                {!formStatus &&
                <form id="my-form" onSubmit={onSubmitHandler}>
                    <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control" id="email"/>
                    </div>
                    <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                }

                {formStatus &&
                    <div>
                        <h4> NEW Message Sent!</h4>
                    </div>
                }
        </div>
        </>
    )
    }

export default MyForm