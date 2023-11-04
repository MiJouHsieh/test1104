// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import {  AdminPage, AdminMainPage, AdminUserPage} from 'pages'
import  AdminPage from './pages/AdminPage'
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
      {/* <BrowserRouter>
        <Routes>
          <Route path="admin" element={<AdminPage />} />
          <Route path="admin/main" element={<AdminMainPage />} />
          <Route path="admin/users" element={<AdminUserPage />} />
        </Routes>
      </BrowserRouter> */}
      {/* <AdminMainPage/> */}
      <AdminPage />

    </div>
    </>
    
  );
}

export default App;
