import React from 'react'
import css from './Testimonial.module.scss'
import img1 from '../../image/sidhya.png'
import Swiper from 'swiper'

const Testimonial = () => {
  return (
    <div className={css.testimonial}>
        <div className={css.UpContainer}>
            <div className={css.wrapper}>
                <span>Top Rated</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga deserunt odio error!</span>
            </div>
            <div className={css.imageBox}>
                <div></div>
                <img src={img1} alt="" />
            </div>
            <div className={css.happyCustomer}>
                <span>100K</span>
                <span>Happy Customer with us</span>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
