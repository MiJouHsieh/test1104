import axios from 'axios';


//待與後端確認
const authUrl = 'https://warm-forest-67690-2e44d4cd1684.herokuapp.com'

//AdminPage，url 待確認  /api/admin/signin

export const  adminLogin = async({account, password}) =>{
    try {
        const data = await axios.post(`${authUrl}/api/admin/signin`, {
          account,
          password,
        });
       
        //console.log(data)
        
        return data;
      } catch (error) {
        console.error('[AdminLogin Failed]:', error);
      }
};

// //驗證token
// export const checkPermission = async(authToken) => {
//         try{
//         const response = await axios.get(`${authURL}/test-token`,
//         {headers: {
//             Authorization: 'Bearer ' + authToken,
//           },
//         });
//         return response.data.success;
//       } catch (error) {
//         console.error('[Check Permission Failed]:', error);
//       }
//     };
    
