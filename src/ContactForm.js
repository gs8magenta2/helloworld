import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import Message from './Message'
class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null
        }

    }

    updateName(updateName) {
        this.setState({
            name: updateName
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (

            <div  >
                <div className="section group">
                    <div className="col span_2_of_3">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Name</label>
                                <Field name="name" component="input" maxLength="100" type="text"  onChange={event => {this.updateName(event.target.value)}}/>
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <Field name="email" component="input" type="email"/>
                            </div>
                            <div>
                                <label htmlFor="city">City</label>
                                <Field name="city" component="input" type="text"/>
                            </div>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="col span_1_of_3">
                        <Message name={this.state.name}/>
                    </div>
                </div>


            </div>
        );
    }
}

// Decorate the form component
ContactForm = reduxForm({
    form: 'contact', // a unique name for this form
    destroyOnUnmount: false
})(ContactForm);

export default ContactForm;