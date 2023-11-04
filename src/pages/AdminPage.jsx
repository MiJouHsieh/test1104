// import Input from "components/Input";
// export default function AdminPage() {
//   return <Input />;
// }
import { useState } from "react";
import styles from "styles/AdminPage.module.scss";
import BrandIcon from "icons/Icon.png";
// import AdminLogInBtn from "icons/adminLoginBtn.svg"
import { ReactComponent as AdminLogInBtn } from "icons/adminLoginBtn.svg";
// import { Link } from "react-router-dom";

const AuthInput = ({ type, label, value, placeholder, onChange }) => {
  return (
    <div className={styles.inputContainer}>
      <label>{label}</label>
      <input
        type={type || "text"}
        value={value || ""} //若外層沒有帶入 props 就預設給一個空字串
        placeholder={placeholder || ""} //若外層沒有帶入 props 就預設給一個空字串
        onChange={(event) => onChange?.(event.target.value)}
      />
    </div>
  );
};
// export default AuthInput;

const AdminPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.adminLogInContainer}>
      <div className={styles.brandContainer}>
        <img src={BrandIcon} alt="brand-icon" />
      </div>
      <h3>後台登入</h3>
      <div>
        <AuthInput
          label={"帳號"}
          value={userName}
          placeholder={"請輸入帳號"}
          onChange={(nameInputValue) => setUserName(nameInputValue)}
        />

        <AuthInput
          type="password"
          label={"密碼"}
          value={password}
          placeholder={"請輸入密碼"}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </div>
      <button>
        <AdminLogInBtn />
      </button>
      {/* <Link to="/admin/tweets"> */}
      <div className={styles.linkText}>前台登入</div>
      {/* </Link> */}
    </div>
  );
};
export default AdminPage;