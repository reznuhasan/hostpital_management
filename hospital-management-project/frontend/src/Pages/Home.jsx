import React from 'react'
import HelpPart from '../components/HelpPart'
import Carousel from '../components/Carousel'
import Styles from "../Styles/Home.module.css"
import BorderBox from '../components/BorderBox'

const Home = () => {
  return (
    <div className={Styles.home}>
        <div className={Styles.heroSection}>
            <Carousel/>
            <HelpPart/>
        </div>
        <BorderBox/>
    </div>
  )
}

export default Home