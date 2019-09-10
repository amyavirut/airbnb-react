import React from 'react'

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
        {/* <div className="image-main" {...this.state.images[0]}> */}
            <button className="icon">
                <i className="far fa-heart"></i>
            </button>
        {/* </div> */}
       
        </div>
        )}
}

export default Gallery 