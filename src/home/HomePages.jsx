import React, { useState } from 'react'
import Homes from '../componenti/homes/Homes'
import Trending from '../componenti/trending/Trending'
import Upcoming from '../componenti/Upcoming/Upcoming'
import { latest, recommended, upcome } from '../dummyData'

const HomePages = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(latest)
  const [rec, setRec] = useState(recommended)

  return (
    <>
      <Homes/>
      <Upcoming items={items} title='Upcoming Movies'/>
      <Upcoming items={item} title='Latest Movies'/>
      <Trending/>
      <Upcoming items={rec} title='Recommended Movies'/>
    </>
  )
}

export default HomePages
