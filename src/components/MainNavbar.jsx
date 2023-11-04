import styles from 'styles/MainNavbar.module.scss'
import BrandIcon from 'icons/Icon.png'
import { ReactComponent as LogOutIcon } from "icons/logOut.svg";


export default function MainNavbar({children}){

    return (
      <div className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <div className={styles.brandContainer}>
            <img src={BrandIcon} alt="brand-icon" />
          </div>
          {children}
          <div className={styles.logoutContainer}>
            <div className={styles.itemWrapper}>
              <LogOutIcon />
              <div className={styles.logoutTilte}>登出</div>
            </div>
          </div>
        </div>
      </div>
    );
   
}
