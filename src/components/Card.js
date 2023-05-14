import React, { useEffect, useState } from 'react'
import '../styles/Card.css'

import Star from '../assets/star.png'
import EmptyStar from '../assets/emptystar.png'


const Card = ({ ele, setFavourites, favourites }) => {
  console.log(ele)
  const [gifTtitle, setGifTitile] = useState("")

  const [isStarClicked, setIsStarClicked] = useState(false)
  const title = ele.title

  useEffect(() => {
    //converting the above string into arr then changing the first letter of that word to uppercase then add rest of the letter of the sting
    setGifTitile(title.split(" ").map((word) => word.slice(0, 1).toUpperCase() + word.slice(1)).join(" "))
  }, [title])


  const addToFavourites = () => {
    if (isStarClicked) {
      const filterarr = favourites.filter((item) => item.id !== ele.id)
      setFavourites([...filterarr])
      setIsStarClicked(false)
      console.log(favourites)
    }
    else {
      setFavourites([ele, ...favourites])
      setIsStarClicked(true)
      console.log(favourites)
    }



  }
  return (
    <div className='card'>
      <img width="100%" height="250px" src={ele.images.original.url} alt={ele.title} />
      <div className='discription'>
        <h1>{gifTtitle ? gifTtitle : "No Title Avaliable"}</h1>
        <div className='disc-img_wrapper'><img onClick={() => addToFavourites()} src={isStarClicked ? Star : EmptyStar} alt="star" /></div>
      </div>
      <p>{"@" + ele.username.toLowerCase()}</p>
    </div>
  )
}

export default Card