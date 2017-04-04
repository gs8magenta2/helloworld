import ContactForm from './ContactForm';
import React from 'react';

class ContactPage extends React.Component {
    showResults = values =>
    new Promise(resolve => {
        setTimeout(() => {  // simulate server latency
            window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
            this.props.history.push('/summary'); // do the next step. Would set the up as redux controlling state linked to routing.
            resolve()
        }, 500)
    })
    render() {
        return (
            <ContactForm onSubmit={this.showResults} />
        );
    }
}

export default ContactPage;