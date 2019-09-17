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
export default injextStripe(StripeForm)



//test credit card 4242 4242 4242 4242