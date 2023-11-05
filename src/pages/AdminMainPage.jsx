import MainNavbar from "components/MainNavbar";
import NavItem from "components/NavItem";
import AdminTweetList from "components/AdminTweetList"
import styles from "styles/Layout2.module.scss"
import{ReactComponent as HomeAcgtiveIcon} from "icons/homeActive.svg"
import{ReactComponent as UserIcon} from "icons/user.svg";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import {getTweets} from"api/twitter"

const AdminMainPage = ()=> {
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    //const  Authorization = localStorage.getItem('Authorization')
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        setTweets(tweets.map((tweet) => ({ ...tweet })));
      } catch (error) {
        console.error (error);
      }
    };
    getTweetsAsync();
  }, []);

  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('Authorization');
    navigate('/admin');
  };

  return(
<div className={styles.appContainer}>
    <div className={styles.navbarContainer}>
      <MainNavbar handleClick={handleClick}>
        <NavItem title="推文清單">
          <HomeAcgtiveIcon/>
        </NavItem>
        <NavItem title="使用者列表">
          <UserIcon/>
        </NavItem>
      </MainNavbar>
    </div>
    <div className={styles.content}>
      <div className={styles.headerContainer}>
          <h4>推文清單</h4>
      </div>
        <AdminTweetList tweets={tweets} />
    </div>
</div>
  )
}

export default AdminMainPage