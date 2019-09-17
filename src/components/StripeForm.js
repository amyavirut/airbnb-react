import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'


class StripeForm extends React.Component {

    genToken = () => {
        this.props.stripe.creatToken({}).then(res => {
            
        })
    }
    render() {
        return (
            <>
                <CardElement />
                <button className="primary" onClick={this.genToken}> Pay </button>
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