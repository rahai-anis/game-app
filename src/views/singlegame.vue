
<script setup>
import {useRouter } from 'vue-router'

   import useSkills from '../composables/addgames';
   import {onMounted} from 'vue';
   
   const router = useRouter();



   const {getgame,game } = useSkills();
   const props = defineProps({
    id: {
        required: true,
        type: String
    }
   })
   onMounted(()=>getgame(props.id));

   /*const bodyElement = document.body;
      const backgroundImageStyle = `linear-gradient(45deg,   #3872e0d4, #20262ed6), url('https://www.freetogame.com/g/${props.id}/thumbnail.jpg')`;
      bodyElement.style.backgroundImage = backgroundImageStyle;*/
      let gradientAngle = 1; // Initial angle

//function updateBackgroundImage() {
  const imageUrl = `https://www.freetogame.com/g/${props.id}/thumbnail.jpg`;
  const backgroundImageStyle = `linear-gradient(45deg, #3872e0d4, #20262ed6), url('${imageUrl}')`;
  document.body.style.backgroundImage = backgroundImageStyle;
  gradientAngle = (gradientAngle + 0.1) % 361; // Increment angle, wrap around at 360
  window.addEventListener('beforeunload', function() {
  clearInterval(intervalId);
});
//}

// Call the function initially to set the background
//updateBackgroundImage();

// Start an interval to update the gradient angle slowly
//const intervalId = setInterval(updateBackgroundImage, 6);
</script>

<template>
    <div class="title">
        <p  class="fancy"> {{ game.title }} <span></span></p>
    </div>
    


    <div v-if="game.screenshots && game.screenshots.length > 0"class="body mt-5">
        <input type="radio" name="position" v-for="screenshot in game.screenshots" />

        <main id="carousel">
            <div class="item" v-for="screenshot in game.screenshots">
                <img :src="`${screenshot.image}`">
            </div>

        </main>

    </div>




    <div class="w-full bg-transparent  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5">

        <div id="defaultTabContent">
            <div style="backdrop-filter: blur(10px);box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; "
            data-aos="fade-in" data-aos-offset="50" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease" 
           
                class="  p-4  rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel"
                aria-labelledby="about-tab">
                <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-text-white-900 text-white"
                    style="text-shadow: 1px 1px 2px black;">Description</h2>
                <p style="text-shadow: 1px 1px 2px black;" class="mb-3 text-white">{{ game.description }}</p>

            </div>
            <div v-if="game.minimum_system_requirements"
                style="backdrop-filter: blur(10px);box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;"
                data-aos="fade-in" data-aos-offset="50" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease" 
           
                class="mt-5 p-4  rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel"
                aria-labelledby="services-tab">
                <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-text-white-900 text-white"
                    style="text-shadow: 1px 1px 2px black;">Minimum System Requirements</h2>
                <!-- List -->
                <ul role="list" class="space-y-4 text-white" style="text-shadow: 1px 1px 2px black;"
                data-aos="fade-in" data-aos-offset="50" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease" 
           
           >
                    <li v-if="game.minimum_system_requirements && game.minimum_system_requirements.graphics"
                        class="flex space-x-2 rtl:space-x-reverse items-center">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="leading-tight">{{game.minimum_system_requirements.graphics}}</span>
                    </li>
                    <li v-if="game.minimum_system_requirements && game.minimum_system_requirements.memory"
                        class="flex space-x-2 rtl:space-x-reverse items-center">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="leading-tight">RAM: {{game.minimum_system_requirements.memory}}</span>
                    </li>
                    <li v-if="game.minimum_system_requirements && game.minimum_system_requirements.processor"
                        class="flex space-x-2 rtl:space-x-reverse items-center">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="leading-tight">{{game.minimum_system_requirements.processor}}</span>
                    </li>
                    <li v-if="game.minimum_system_requirements && game.minimum_system_requirements.os"
                        class="flex space-x-2 rtl:space-x-reverse items-center">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="leading-tight">{{game.minimum_system_requirements.os}}</span>
                    </li>

                    <li v-if="game.minimum_system_requirements && game.minimum_system_requirements.storage"
                        class="flex space-x-2 rtl:space-x-reverse items-center">
                        <svg class="flex-shrink-0 w-3.5 h-3.5 text-white" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="leading-tight">DISK: {{game.minimum_system_requirements.storage}}</span>
                    </li>
                </ul>
            </div>
            <div class=" p-4  rounded-lg md:p-8 dark:bg-gray-800 w-full mt-5"  data-aos="fade-in" data-aos-offset="50" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease" 
                style="backdrop-filter: blur(10px);box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" id="statistics"
                role="tabpanel" aria-labelledby="statistics-tab">
                <dl class="grid max-w-screen-xl grid-cols-1 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3  text-white sm:p-8"
                    style="text-shadow: 1px 1px 2px black;">
                    <div class="flex flex-col">
                        <dt class="mb-2 text-3xl font-extrabold">{{game.platform}}</dt>
                        <dd class="text-white-500 text-white-400">Platform</dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="mb-2 text-3xl font-extrabold">{{game.publisher}}</dt>
                        <dd class="text-white-500 text-white-400">Publisher</dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="mb-2 text-3xl font-extrabold">{{game.release_date}}</dt>
                        <dd class="text-white-500 text-white-400">Release Date</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>

    <div class="w-full bg-transparent  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5 mb-5">

        <div class=" p-4  rounded-lg md:p-8 dark:bg-gray-800 w-full mt-5"  data-aos="fade-in" data-aos-offset="50" data-aos-delay="50" data-aos-duration="800"
            data-aos-easing="ease" 
            style="backdrop-filter: blur(10px);box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;" id="statistics"
            role="tabpanel" aria-labelledby="statistics-tab">
            <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-text-white-900 text-white"
                style="text-shadow: 1px 1px 2px black;">Download Link</h2>
            <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900   text-white sm:p-8"
                style="text-shadow: 1px 1px 2px black;">
                <div class="flex flex-col">
                    <dt class="mb-2 text-3xl font-extrabold"><a :href="game.game_url"><i class="fa-solid fa-circle-play"
                                style="color: #2b6e07; font-size: 100px"></i></a></dt>
                    <dd class="text-white-500 text-white-400">Start Original Link</dd>
                </div>
                <div class="flex flex-col">
                    <dt class="mb-2 text-3xl font-extrabold"><a :href="game.freetogame_profile_url"><i
                                class="fa-solid fa-circle-play" style="color: #2b6e07; font-size: 100px"></i></a></dt>
                    <dd class="text-white-500 text-white-400">Start with free to game </dd>
                </div>

            </dl>
        </div>
    </div>

</template>