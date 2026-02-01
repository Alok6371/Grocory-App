import React from 'react'
import Hero from '../componets/home/Hero'
import Category from '../componets/home/Category'
import BestSeller from '../componets/home/BestSeller'
import NewsLetters from '../componets/home/NewsLetters'
import Datas from './seller/Datas'


const Home = () => {
    return (
        <div className='mt-7 mb-7 m-10' id='home'>
            {/* <Hero />
            <Category />
            <BestSeller />
            <NewsLetters /> */}
            {/* <Footer /> */}

            <Hero />
            <Category />
            <BestSeller />
            <Datas />
            <NewsLetters />

        </div>
    )
}

export default Home