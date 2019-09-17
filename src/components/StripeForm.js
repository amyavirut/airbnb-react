import React from 'react'
import { CardElement, injectStripe } from 'react-stripe-elements'
import axios from 'axios'


class StripeForm extends React.Component {

    pay = () => {
        this.props.stripe.createToken({}).then(data => {
            axios.post(`${process.env.REACT_APP_API_URL}/pay`, {
                amount: this.props.amount,
                title: this.props.title,
                // createToken returns { token: { id:  blah }}
                // Only need the token ID, not the whole token
                token: data.token.id
            }).then(res => {
                console.log(res)
            }).catch(err => console.log(err))
        })
    }

    render() {
        return (
            <>
                <CardElement />
                <button className="primary" onClick={this.pay}> Pay </button>
            </>
        )
    }
}

// injectStripe, similar to withRouter is a Higher Level Component
// Which is a fancy way of saying it's a function that takes
// a component and returns a new component with some extra stuff
// in this case, it makes this.props.stripe work.
export default injectStripe(StripeForm)



//test credit card 4242 4242 4242 4242