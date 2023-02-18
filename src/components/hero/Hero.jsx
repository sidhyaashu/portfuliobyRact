import css from './Hero.module.scss'
import sidhya from '../../image/sidhya.png'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

const Hero = () => {
  return (
    <div className={css.container}>

        <div className={css.h_sides}>
            <span className={css.text1}>skin protections cream</span>
            <div className={css.text2}>
                <span>Trendy Collections</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos optio provident officiis, soluta quia quibusdam?</span>
            </div>
        </div>

        <div className={css.wrapper}>
            <div className={css.blueCircle}></div>
            <img src={sidhya} alt="" />

            <div className={css.cart2}>
                <LocalMallOutlinedIcon style={{
                                    "padding":" 5px",
                                    "backgroundColor": "white",
                                    "borderRadius": "50%",
                                    "color":"black",
                                    "border": "4px solid black",
                                    "fontSize":"40px"
                }}/>
                <div className={css.signUp}>
                    <span>Best signUp offers</span>
                <div className={css.arrowbox}>
                    <ArrowForwardOutlinedIcon className='arrow'/>
                </div>
                </div>

            </div>
        </div>


        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>

            <div className={css.customer}>
                <span>100k</span>
                <span>Happy customer</span>
            </div>
        </div>


    </div>
  )
}

export default Hero
