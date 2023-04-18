import axios from "axios";
import { HOST } from "./constants";



const loginUser = async (user) => {
    let url = HOST + "api/public/authenticate"
    let data = JSON.stringify({
        "uname": user.username,
        "password": user.password
      });
      
      let config = {
        method: 'POST',
        maxBodyLength: Infinity,
        url,
        headers: { 
          'Content-Type': 'application/json', 
        },
        data
      };
      
     return await axios.request(config)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response
      });
      
}


const getData = async (token, endpoint) => {
  
      let url = HOST + endpoint

      let config = {
          method: 'GET',
          maxBodyLength: Infinity,
          headers: { 
            'Authorization': 'Bearer '+token,
        },
        url
      }
        
       return await axios.request(config)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error.response
        });
      
}


export {loginUser, getData}