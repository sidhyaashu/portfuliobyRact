import css from './Virtual.module.scss'
import ReactCompareImage from "react-compare-image"
import img2 from '../../image/img2.jpg'
import img5 from "../../image/img5.jpg"
const Virtual = () => {
  return (
    <div className={css.virtual}>
        <div className={css.left}>
            <span>Virtual Try-one</span>
            <span>Never Buy The wrong shade</span>
            <span>Try Now!</span>
        </div>
        <div className={css.right}>
            <div className={css.wrapper}>
                 <ReactCompareImage leftImage={img2} rightImage={img5}/>
            </div>
        </div>
    </div>
  )
}

export default Virtual
