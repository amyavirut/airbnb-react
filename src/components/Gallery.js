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
        ],
        currentImage: 0,
    }

    toggleLike = () => {
        if (this.state.liked) {
            this.setState({
                liked: false
            })
        } else {
            this.setState({
                liked: true
            })
        }
    }

    selectImage(idx) {
        this.setState({
            currentImage: idx,
        })
    }

    thumbnailClass(idx) {
        let thisClass = "thumbnail"
        if (this.state.currentImage === idx) {
            thisClass += " selected"
        }
        return thisClass
    }


    render() {
        return (
            <div className="gallery">
                <div className="image-main" style={{ backgroundImage: `url(${this.state.images[this.state.currentImage]})` }}>
                    <LikeButton onClick={this.toggleLike} liked={this.state.liked} />
                </div>
                <div className="thumbnails">
                    {this.state.images.map((image, idx) =>
                        <div onClick={() => this.selectImage(idx)} className={this.thumbnailClass(idx)} style={{ backgroundImage: `url(${image})` }} key={idx}></div>
                    )}
                </div>
            </div>
        )
    }
}

export default Gallery 