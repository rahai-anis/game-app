import {ref} from "vue"
import {reactive} from "vue"
import axios  from "axios";
import { useRouter } from "vue-router";
//axios.defaults.baseURL="https://www.freetogame.com/api/games"
export default function(){
    const games = ref([]);
    const game = ref([]);
    const getgames = async()=>{
        try{
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const apiUrl = 'https://www.freetogame.com/api/games';
            const url = proxyUrl + apiUrl;
            const response = await axios.get(url, {
              
                headers: {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/json",
                }
            });
            games.value = response.data;
            
        }catch(error){
            console.log(error);
        }
    }
    const getgame = async (id )=>{
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = 'https://www.freetogame.com/api/game?id='+id;
        const url = proxyUrl + apiUrl;
        const response =  await axios.get(url, {
              
            headers: {
                "Cache-Control": "no-cache",
                "Content-Type": "application/json",
            }
        });
     
       game.value = response.data;
      console.log(game)
     }
     const filterbytype = async(type, category )=>{
        try{
            if(type!="null"){
              
               var types = 'category='+type;
            }else{var types=""}
            if(category!="null"){
             
                var platform = '&platform='+category;
            }else{var  platform=""}
           
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            
            const apiUrl = 'https://www.freetogame.com/api/games?'+types+platform;
            
            const url = proxyUrl + apiUrl;
            const response = await axios.get(url, {
              
                headers: {
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/json",
                }
            });
            games.value = response.data;
            
        }catch(error){
            console.log(error);
        }
    }

    return {
        games,
        getgames,
        game,
        getgame,
        filterbytype,
    };
}