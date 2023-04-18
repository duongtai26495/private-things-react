import axios from "axios";
import { HOST } from "./constants";

const getArticleByKey = async (key, sort) => {
    if(sort != null){
        key = key+"?sort="+sort
    }
        let url = HOST + "api/public/"+key
        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url
          };
          
         return await axios.request(config)
          .then((response) => {
            return response;
          })
          .catch((error) => {
            return error
          });
}


export {getArticleByKey}