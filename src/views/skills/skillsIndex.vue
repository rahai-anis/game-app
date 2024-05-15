
<script setup>

import { RouterLink, RouterView ,useRouter } from 'vue-router'
import useSkills from '../../composables/skills';
import {onMounted,reactive} from 'vue';
import he from 'he';
const router = useRouter();


if(localStorage.getItem('token')==null){
    router.push({name: "login"});
}
const {skills, getSkills, pagination, changePage,searchs} = useSkills();
onMounted(()=>getSkills());

const search = reactive({
    id:"",
    marque:"",
    date:""
   })



</script>
<template>
 
<div class=" flex"> 
        <input  v-model="search.id" type="number" id="default-search" class="block w-full p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="N° marque"  />
        <input v-model="search.marque" type="search" id="default-search" class="block w-full p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom du marque" />
        <input v-model="search.date" type="date" id="default-search" class="block w-full p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nom du marque" />
</div>
<div class="mb-10 mt-3 flex"><button @click="searchs(search)" type="submit" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">search</button></div>
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    N° Marque 
                </th>
                <th scope="col" class="px-6 py-3">
                    Nom de marque
                </th>
                <th scope="col" class="px-6 py-3">
                    type de marque 
                </th>
                <th scope="col" class="px-6 py-3">
                    Date de depot
                </th>
                <th scope="col" class="px-6 py-3">
                    voir plus
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr v-for="skill in skills"
            :key="skill.id" class="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {{skill.marque_id}}
                </th>
                <td class="px-6 py-4">
                    {{he.decode(skill.Nom_de_marque)}}
                </td>
                <td class="px-6 py-4">
                    {{skill.Type_De_Marque}}
                </td>
                <td class="px-6 py-4">
                    {{skill.date_depot}}
                </td>
                <td class="px-6 py-4">
              <RouterLink class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
               :to="{name: 'skillsEdit', params:{id: skill.marque_id}}"  >plus infos</RouterLink>  
                </td>
               
            </tr>
          
        </tbody>
    </table>
    <div v-if="pagination.last_page > 1" class="flex justify-center m-10 ">
      <button v-if="pagination.current_page > 1" @click="changePage(pagination.current_page - 1)" class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        Previous
      </button>
      
      <span class="text-2xl font-black text-gray-600 dark:text-white">Page {{ pagination.current_page }} of {{ pagination.last_page }}</span>

      <button v-if="pagination.current_page < pagination.last_page" @click="changePage(pagination.current_page + 1)" class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Next
        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
    </svg>
      </button>
    </div>
</div>

 
</template>