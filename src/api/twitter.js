import axios from 'axios';

//
const baseUrl = ' https://warm-forest-67690-2e44d4cd1684.herokuapp.com';






//AdminPage


export const getUsers = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/admin/users`);
    return res.data;
  } catch (error) {
    console.error('[Get Users failed]: ', error);
  }
};
