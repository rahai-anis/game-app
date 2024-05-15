import {ref} from "vue"
import axios  from "axios";

import { useRouter } from "vue-router";
axios.defaults.baseURL="http://192.168.2.28/api/v0/"


export default function auth(){
    const errors = ref({});
    const token = ref('');
    const router = useRouter();
    const login = async (data)=>{
      
        try{
            const response = await axios.post("login",data);
            
            
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('id',response.data.id);
            localStorage.setItem('user',response.data.user);
           router.push({name: "skillsIndex"});
        }catch(error){
           
            if(error.response.status ===422){
               
                errors.value = error.response.data;
                
            }else {
                errors.value = error.response.data.message;
            }
        }
            }
          /*****LOGOUT********** */
          const logout = async (data)=>{
      
            try{
                const response = await axios.post("logout",data);
                console.log(response);
                
               /* localStorage.setItem('token',response.data.token);
                localStorage.setItem('id',response.data.id);
                localStorage.setItem('user',response.data.user);
               router.push({name: "login"});*/
            }catch(error){
               
                if(error.response.status ===422){
                   
                    errors.value = error.response.data;
                    
                }else {
                    errors.value = error.response.data.message;
                }
            }
                }
            return {
               token,
                errors,
                login,
                
            };
}
