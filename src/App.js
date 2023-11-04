// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {  AdminPage, AdminMainPage, AdminUserPage} from 'pages'
 import  AdminPage from './pages/AdminPage'
// import AdminUser from "pages/AdminUserPage"
import './styles/reset.scss'
import  './styles/base.scss'

// import  PopularList from './components/PopularList'

//新增
// import MainNavbar from 'components/MainNavbar'
// import styles from './App.module.scss'

function App() {
  return (
    <>
    <div >
    {/* <AdminUser/> */}
      <AdminPage />

    </div>
    </>
    
  );
}

export default App;
