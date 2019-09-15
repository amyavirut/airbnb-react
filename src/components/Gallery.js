import React from 'react'
import LikeButton from './LikeButton';

class Gallery extends React.Component {
    state = {
        liked: true,
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
                <div className="image-main" style={{ backgroundImage: `url(${this.props.images[this.state.currentImage]})` }}>
                    <LikeButton onClick={this.toggleLike} liked={this.state.liked} />
                </div>
                <div className="thumbnails">
                    {this.props.images.map((image, idx) =>
                        <div onClick={() => this.selectImage(idx)} className={this.thumbnailClass(idx)} style={{ backgroundImage: `url(${image})` }} key={idx}></div>
                    )}
                </div>
            </div>
        )
    }
}

export default Gallery 