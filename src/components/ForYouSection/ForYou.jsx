import React from 'react'
import ForYoucarousel from './ForYoucarousel'
import ForYouTopDeal from './ForYouTopDeal'
import ForYouTrending from './ForYouTrending'
import ForYouNewArrival from './ForYouNewArrival'
import ForYouCategoryYouMightLik from './ForYouCategoryYouMightLike'
import ForyouBestSellers from './ForYouBestSellers'
import ForyouSpecialPack from './ForyouFashion'


const ForYou = () => {
  return (
    <div>
    <ForYoucarousel />
    <ForyouSpecialPack />
    <ForYouTopDeal />
    <ForYouTrending />
    <ForYouNewArrival />
    <ForYouCategoryYouMightLik />
    <ForyouBestSellers />
    </div>
  )
}

export default ForYou
