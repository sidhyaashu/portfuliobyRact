import css from './Header.module.scss'
import img1 from '../../image/img1.jpg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
  return (
    <div className={css.container}>
        <div className={css.logo}>
            <img src={img1} alt="" />
            <span>amazone</span>
        </div>
        <div className={css.right}>
            <div className={css.menu}>
                <ul className={css.menu}>
                    <li>Collections</li>
                    <li>Brand</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>
            </div>

            <input type="text" placeholder='Search' />

            <ShoppingCartOutlinedIcon className={css.cart}/>
        </div>
    </div>
  )
}

export default Header
