import {ref} from "vue"
import {reactive} from "vue"
import axios  from "axios";
import { useRouter } from "vue-router";
axios.defaults.baseURL="http://192.168.2.28/api/v0/"

export default function DM(){
    const dms = ref([]);
    const dm = ref([]);
    const errors = ref([]);
    const success = ref([]);
    const deposants = ref([]);
    const router = useRouter();
    const pagination = ref([]);
    const  account = {
        token: localStorage.getItem('token'),
        id: localStorage.getItem('id'),
        user: localStorage.getItem('user'),
      };
      const encryptedData = encodeURIComponent(btoa(JSON.stringify(account)));
      const getdms = async(page = 1,data = null)=>{
          try{
             
              const response = await axios.get("getalldesign/"+ encryptedData+'?page='+page+'&search='+data);
              
               pagination.value = {
                  current_page: response.data.current_page,
                  last_page: response.data.last_page,
                  total: response.data.total,
                };
              
              dms.value = response.data.data;
             
          }catch(error){
              if(error.response.status ===400){
                  router.push({name: "login"})
              }
          }
         
  
      }
      const changePage  = (page) => {
        getdms(page);
      };
      const searchs  = (search) => {
      
        const  searche = {
           id:search.id,
           date:search.date
          }
      //console.log(searche);
       const data = encodeURIComponent(btoa(JSON.stringify(searche)));
       getdms(1,data);
     };
     const getdm = async (id )=>{
       const responseM =  await axios.get("getonedesign/"+ encryptedData+"?id="+id);
     
       dm.value = responseM.data[0];
       
        deposants.value = responseM.data[0].deposants;
     }
    
     const updatedeposant = async (id,data)=>{
      success.value= null;
      
      const deposantsinfos = encodeURIComponent(btoa(JSON.stringify(data)));

      try{
       const response = await axios.put("updatedeposants/"+id+"/"+deposantsinfos);
       success.value = response.status;
    }catch(error){
      if(error.response.status ===400){
        errors.value = error.response.data.message;
       
    }
    }
      
     }
      return {
        getdms,
        dms,
        pagination,
        changePage,
        searchs,
        getdm,
        dm,
        deposants,
        updatedeposant,
        errors,
        success,
      }
}