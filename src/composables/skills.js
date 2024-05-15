import {ref} from "vue"
import {reactive} from "vue"
import axios  from "axios";
import { useRouter } from "vue-router";
axios.defaults.baseURL="http://192.168.2.28/api/v0/"
export default function useSkills(){
    const skills = ref([]);
    const skill = ref([]);
    const errors = ref({});
    const router = useRouter();
    const pagination = ref([]);
    var responseM = ref([]);
   
   const  account = {
        token: localStorage.getItem('token'),
        id: localStorage.getItem('id'),
        user: localStorage.getItem('user'),
      };
      
      const encryptedData = encodeURIComponent(btoa(JSON.stringify(account)));
    const getSkills = async(page = 1,data = null)=>{
        try{
           
            const response = await axios.get("marqueform/"+ encryptedData+'?page='+page+'&search='+data);
            
             pagination.value = {
                current_page: response.data.current_page,
                last_page: response.data.last_page,
                total: response.data.total,
              };
            
            skills.value = response.data.data;
        }catch(error){
            if(error.response.status ===400){
                router.push({name: "login"})
            }
        }
       

    }
    /********************* */
    const changePage  = (page) => {
        getSkills(page);
      };
      /************ */
      const searchs  = (search) => {
      
         const  searche = {
            id:search.id,
            marque:search.marque,
            date:search.date
           }
       //console.log(searche);
        const data = encodeURIComponent(btoa(JSON.stringify(searche)));
        getSkills(1,data);
      };
    const getSkill = async (id )=>{
       responseM =  await axios.get("marqueform?encryptedData="+ encryptedData+"&id="+id);
    
      skill.value = responseM.data;
      //console.log(responseM.data.Marqueinfo.Nom_de_marque)
    }
    /********STORE************** */
    const storeskill = async (data)=>{
       
try{
    await axios.post("skills",data);
    router.push({name: "skillsIndex"})
}catch(error){
    
    if(error.response.status ===422){
        errors.value = error.response.data.errors;
    }
}
    }
    /****UPDATE******************** */
    const updateskill = async (id)=>{
       
        try{
            await axios.put("skills/"+id, skill.value);
            router.push({name: "skillsIndex"})
        }catch(error){
            console.log(error);
            if(error.response.status ===422){
                errors.value = error.response.data.errors;
            }
        }
            }

    return {
        skill,
        skills,
        getSkills,
        storeskill,
        getSkill,
        errors,
        updateskill,
        pagination,
        changePage,
        searchs,
        
    };
}