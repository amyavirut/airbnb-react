import React from 'react'
import LikeButton from './LikeButton';

class Gallery extends React.Component {
    state = {
        liked: true,
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
                    <LikeButton liked={this.state.liked}/>
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