import React from 'react'
import Banner from '../component/home/Banner'
import Categories from '../component/home/Categories'
import TrendingCelebrities from '../component/home/TrendingCelebrities'
import RecentlyAddedProfiles from '../component/home/RecentlyAddedProfiles'
import SyncSlider from '../component/home/SyncSlider'
import PopularPeople from '../component/home/PopularSection'
import CtaSection from '../component/home/Cta'
import ContinuousSlider from '../component/home/ContinuousSlider'

const Home = () => {
  return (
    <>
      <Banner/>
      <Categories/>
      <TrendingCelebrities/>
      <RecentlyAddedProfiles/>
      <SyncSlider/>
      <ContinuousSlider/>
      <CtaSection/>
      <PopularPeople/>
    </>
  )
}

export default Home