import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Mid = () => {
    return (
        <>
            {/* <img src="/mid.jpg" alt="" width={2100} /> */}

            <Carousel
                showThumbs={false} // Hide thumbnail navigation
                showStatus={false} // Hide status indicator
                infiniteLoop // Enable infinite looping
                autoPlay // Enable automatic slide transitions
                interval={5000} // Set interval to 5 seconds
                stopOnHover={false} // Continue autoplay on hover
                transitionTime={500} // Set transition duration to 0.5 seconds
            >
                <div>
                    <img src="/mid.jpg" alt="Slide 1" className="w-full" />
                </div>
                <div>
                    <img src="/Slide.jpg" alt="Slide 2" className="w-full" />
                </div>
                <div>
                    <img src="/Slide3.jpg" alt="Slide 3" className="w-full" />
                </div>
            </Carousel>
        </>
    )
}

export default Mid
