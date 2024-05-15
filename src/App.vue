<script >
import { RouterLink, RouterView, useRouter } from 'vue-router';





 

  

</script>

<template>
  <div id="app" >
    <header>
    </header>
    <main>


      

      <div style="width:80%; margin:auto; ">
        <RouterView />
      </div>
    </main>
  </div>


  <footer v-if="$route.name == 'login'" class="fixed bottom-0  rounded-lg shadow m-0  fixed bottom-0 w-full" style="backdrop-filter: blur(10px); text-shadow: 1px 1px 2px black;">
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
      <span class="text-sm text-white-500 sm:text-center text-white">©  <a href="https://rahai-anis.github.io/"
          class="hover:underline"> A.RAHAI</a>. All Rights Reserved.
      </span>
     
    </div>
  </footer>
  
</template>


