import AdminUserCollection from "components/AdminUserCollection";
import MainNavbar from "components/MainNavbar";
import NavItem from "components/NavItem";
import { ReactComponent as HomeIcon } from "icons/home.svg";
import { ReactComponent as UserActiveIcon } from "icons/userActive.svg";
import styles from "styles/AdminUsers.module.scss";


const AdminUser = () => {
  return (
    <div className={styles.appContainer}>

      <MainNavbar>
        <NavItem title="推文清單">
          <HomeIcon />
        </NavItem>

        <NavItem title="使用者列表">
          <UserActiveIcon />
        </NavItem>
      </MainNavbar>
      <AdminUserCollection />
    </div>
  );
};

export default AdminUser;
