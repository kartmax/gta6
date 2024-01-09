import axios from 'axios';
import { InputsType } from '../src/components/forms/FormSubscribe';

const instansAxios = axios.create({
   baseURL : "http://localhost:5000/api/",
})

export const UserAPI = {
   createNewUser : (data: InputsType) => {
      const url = `/create-user`;
      return instansAxios
         .post(url, data)
         .then(response => {
            console.log(data)
            return response.data
         })
   }
}