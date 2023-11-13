import React from 'react'
import ReactStars from "react-rating-stars-component"
import ProfilePic from "../images/profile.jpg"

const ReviewCard = ({ review }) => {

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: review.rating,
    isHalf: true,
  };

  return (

    <div class="flex w-[100%] flex-col mx-auto   ">
      <div class="flex justify-left items-center" >
        <img class= "h-[100px] w-[100px] object-cover m-4 rounded-[50%] "  src={ProfilePic} alt="User" />
        <div>
          <p>{review.name}</p>
          <ReactStars {...options} />
        </div>
      </div>
      <span>{review.comment}</span>
    </div>

  )
}

export default ReviewCard 