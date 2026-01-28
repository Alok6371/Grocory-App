import React from 'react'
import Hero from '../componets/home/Hero'
import Category from '../componets/home/Category'
import BestSeller from '../componets/home/BestSeller'
import NewsLetters from '../componets/home/NewsLetters'


const Home = () => {
    return (
        <div className='mt-7 mb-7' id='home'>
            {/* <Hero />
            <Category />
            <BestSeller />
            <NewsLetters /> */}
            {/* <Footer /> */}
          
            <Hero />
            <Category />
            <BestSeller />
            <NewsLetters />

        </div>
    )
}

export default Home