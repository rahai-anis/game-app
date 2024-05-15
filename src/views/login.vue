
<script setup>

import { RouterLink, RouterView ,useRouter } from 'vue-router'
import useSkills from '../composables/addgames';
import {onMounted,reactive} from 'vue';
import '../../node_modules/flowbite/dist/flowbite.min.js'
import 'flowbite';



const {games, getgames, filterbytype} = useSkills();
onMounted(()=>getgames());
/*
let gradientAngle = 1;
function updateBackgroundImage() {

  const backgroundImageStyle = `linear-gradient(${gradientAngle}deg, rgb(3 30 82 / 83%), #20262ed6)`;
  document.body.style.backgroundImage = backgroundImageStyle;
  gradientAngle = (gradientAngle + 0.1) % 361; // Increment angle, wrap around at 360
}

// Call the function initially to set the background
updateBackgroundImage();

// Start an interval to update the gradient angle slowly
const intervalId = setInterval(updateBackgroundImage, 5);
*/
let gradientAngle = 1; // Initial angle
let intervalId; // Declare intervalId outside the function scope

function updateBackgroundImage() {
  const backgroundImageStyle2 = `linear-gradient(${gradientAngle}deg, rgb(3 30 82 / 83%), #20262ed6)`;
  document.body.style.backgroundImage = backgroundImageStyle2;
  gradientAngle = (gradientAngle + 0.1) % 361; // Increment angle, wrap around at 360
}

// Call the function initially to set the background
updateBackgroundImage();

// Start an interval to update the gradient angle slowly
intervalId = setInterval(updateBackgroundImage, 5);

// Add event listener for beforeunload to clear the interval
window.addEventListener('beforeunload', function() {
  clearInterval(intervalId);
});
/********************** */
const  genres =  [
        'mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival',
        'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank',
        'space', 'sailing', 'side-scroller', 'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps',
        'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts',
        'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'
      ] 
      const selectedGenre = reactive({
    genre:"null",
   category: "null"
   })
   function filterGames() {
  const searchTerm = document.getElementById('default-search').value.toLowerCase();
  const gameTitles = document.querySelectorAll('.gamename');
  
  gameTitles.forEach(title => {
    const gameTitle = title.textContent.toLowerCase();
    const parentDiv = title.closest('.w-full');
    
    if (gameTitle.includes(searchTerm)) {
      parentDiv.style.display = 'block';
    } else {
      parentDiv.style.display = 'none';
    }
  });
}


</script>
<template>



   <aside id="default-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar" style="">
      <div class="h-full px-3 py-4 overflow-y-auto dark:border-gray-700"
         style="backdrop-filter: blur(10px) ;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
         <ul class="space-y-2 font-medium">

            <li>
               <select v-model="selectedGenre.genre" @change="filterbytype($event.target.value, selectedGenre.category)"
                  class="uppercase flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path
                        d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
                  <option value="null"> category</option>
                  <option v-for="genre in genres" :value="genre">{{ genre }}</option>
               </select>

            </li>

            <li>
               <select v-model="selectedGenre.category"
                  @change="filterbytype( selectedGenre.genre, $event.target.value)"
                  class="uppercase flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path
                        d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
                  <option value="null"> platform</option>
                  <option value="pc">PC</option>
                  <option value="browser">browser</option>
               </select>
            </li>

         </ul>
      </div>
   </aside>

   <div class="p-4 sm:ml-64 " id="fade-in-element">

      <form class="max-w-md mx-auto mt-4 mb-4">

         <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
               <svg class="w-4 h-4 text-white dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
               </svg>
            </div>
            <input v-model="searchTerm" type="search" id="default-search" @input="filterGames()"
               class="block w-full p-4 ps-10 text-sm text-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 placeholder-white	 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Game developer ..."
               style="background:transparent; box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" />
              
            
         </div>
         <div class="flex justify-evenly visible sm:hidden">
         <select v-model="selectedGenre.genre" @change="filterbytype($event.target.value, selectedGenre.category)"
                  class="uppercase flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path
                        d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
                  <option value="null"> category</option>
                  <option v-for="genre in genres" :value="genre">{{ genre }}</option>
               </select>
               <select v-model="selectedGenre.category"
                  @change="filterbytype( selectedGenre.genre, $event.target.value)"
                  class="uppercase flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                  <svg
                     class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                     aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path
                        d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">E-commerce</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                     viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m1 1 4 4 4-4" />
                  </svg>
                  <option value="null"> platform</option>
                  <option value="pc">PC</option>
                  <option value="browser">browser</option>
               </select>
            </div>
      </form>



      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
         <div v-for="game in games"
            class="w-full   max-w-sm bg-midBlue border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-grow "
            data-aos="fade-up" 
            style="backdrop-filter: blur(10px);box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;">
            <a href="#">
               <img class="p-8 rounded-t-lg" :src="`${game.thumbnail}`" alt="product image" />
            </a>
            <div class="px-5 pb-5 ">
               <a href="#" class="flex justify-center">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 text-white gamename">{{ game.title }}
                  </h5>
               </a>
               <div class="flex justify-evenly items-center mt-2.5 mb-5">
                  <div class="flex items-center space-x-1 rtl:space-x-reverse">
                     <span
                        class=" text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ms-3 publisher">{{
                           game.publisher }}</span>
                  </div>
                  <span
                     class="bg-blue-100 text-blue-800 text-xs  px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ms-3">{{
                        game.release_date }}</span>
               </div>
               <div class="flex items-center justify-between  ">
                  <RouterLink style="background-color: #08535d;"
                     class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     :to="{ name: 'singlegame', params: { id: game.id } }">Play</RouterLink>

               </div>
            </div>
         </div>
      </div>







   </div>





</template>