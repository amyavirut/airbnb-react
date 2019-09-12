import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'

class LikeButton extends React.Component {
    render() {
        return <button className="icon">
            {this.props.liked ?
                <FontAwesomeIcon icon={solidHeart} /> :
                <FontAwesomeIcon icon={emptyHeart} />}
        </button>
    }
}

export default LikeButton