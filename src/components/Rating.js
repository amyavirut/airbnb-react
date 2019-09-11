import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

class Rating extends React.Component {
    render() {
        console.log(this.props)
        return <>
            {[...Array(this.props.rating)].map(_ =>
                <FontAwesomeIcon icon={solidStar}/>
            )}
            {[...Array(5 - this.props.rating)].map(_ =>
                <FontAwesomeIcon icon={emptyStar}/>
            )}
        </>
    }
}

export default Rating