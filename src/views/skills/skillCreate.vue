
import { errorMessages } from 'vue/compiler-sfc';


<script setup>
   import {reactive} from 'vue'; 
   import useSkills from '../../composables/skills';
   
   const {storeskill, errors} = useSkills();
   const form = reactive({
    name:"",
    description:""
   })
</script>

<template>
  <h1  class="flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white flex-1 justify-center">Here You can <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 ml-4"> Create a new skill</span></h1>
<form class="w-full mx-auto "style="margin-top:20px" @submit.prevent="storeskill(form)">
    <div >
      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">NAME</label>
      <input v-model="form.name" type="text" id="name" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <div v-if="errors.name">
        <span class="text-sm text-red-400">{{errors.name[0]}}</span>
    </div>
    </div>
  <div class="mb-5">
      <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DESCRIPTION</label>
      <input v-model="form.description" type="text" id="description" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
     <div v-if="errors.description">
        <span class="text-sm text-red-400">{{errors.description[0]}}</span>
    </div>
    </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Enregistrer</button>
 
</form>

</template>