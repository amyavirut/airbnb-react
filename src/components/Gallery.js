import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons'

class Gallery extends React.Component {
    state = {
        images: [
            'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
            'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg',
            'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg',
            'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg',
            'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223180.jpg',
            'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223186.jpg',
            'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223190.jpg',
            'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223195.jpg',
            'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223199.jpg'
        ]
    }

    render() {
        return (
            <div className="gallery">
                <div className="image-main" style={{ backgroundImage: `url(${this.state.images[0]})` }}>
                    <button className="icon">
                        <FontAwesomeIcon icon={emptyHeart} />
                    </button>
                </div>
                <div className="thumbnails">
                    {this.state.images.map(image =>
                        <div className="thumbnail" style={{ backgroundImage: `url(${image})` }}></div>
                    )}
                </div>
            </div>
        )
    }
}

export default Gallery 