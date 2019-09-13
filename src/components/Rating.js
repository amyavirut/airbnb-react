import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

class Rating extends React.Component {
    render() {
        return <>
            {[...Array(this.props.rating)].map((_, idx) =>
                <FontAwesomeIcon icon={solidStar} key={idx}/>
            )}
            {[...Array(5 - this.props.rating)].map((_, idx)=>
                <FontAwesomeIcon icon={emptyStar} key={idx}/>
            )}
        </>
    }
}

export default Rating