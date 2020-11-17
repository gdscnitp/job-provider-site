import React from 'react';
import Display from "./../../components/best_services/component.bestServices";
import VideoDisplay from "./../../components/videoDisplay/videoDisplay.js";
import StarRating from "./../../components/Star-rating/StarRating.jsx";

const Homepage = () => {
    return (
        <div>
            <Display />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                {/* video component for front page(Ritesh Singh) */}
                <VideoDisplay />
                <StarRating />
            </div>
        </div>
    )
}

export default Homepage;