import React,{useState} from 'react'
import {FaStar} from "react-icons/fa"

const StarRating = () => {
    const [rating ,setRating] = useState(null)
    const [hover ,setHover] = useState(null)

    return (
        <div>
            <h3>Rating:</h3>
            {[...Array(5)].map((star ,i) => {
                const ratingValue = i+1;
                return(
                    <label key={i}>
                        <input 
                        type="radio" 
                        name="starrating" 
                        value={ratingValue} 
                        onClick={() => setRating(ratingValue)}
                        />
                        <FaStar 
                        className="star" 
                        color={ratingValue <= (hover || rating) ? "#ffa62b" : "#bbbfca"}
                        onMouseEnter={() => setHover(ratingValue)}
                        onMouseLeave={() => setHover(null)}
                        size={30} />
                    </label>
                )
            })}
            <div>
                <h3>Comment :</h3>
                <textarea /><br/>
            </div>
        </div>
    )
}
export default StarRating