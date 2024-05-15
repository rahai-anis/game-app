
import { routeLocationKey } from 'vue-router';

import { mergeProps } from 'vue';
<script setup>
import {useRouter } from 'vue-router'

   import useSkills from '../../composables/skills';
   import {onMounted} from 'vue';
   import he from 'he';
   const router = useRouter();


if(localStorage.getItem('token')==null){
    router.push({name: "login"});
}
   const {getSkill,skill, } = useSkills();
   const props = defineProps({
    id: {
        required: true,
        type: String
    }
   })
   onMounted(()=>getSkill(props.id));
   
</script>
<template>
 <h1  class="flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white flex-1 justify-center">Informations <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 ml-4"> personnelles</span></h1>

<div v-if="skill.deposant_type =='morale_persons'" class="flex flex-wrap">
  <ul v-for="person in skill.morale_persons" class="w-1/3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mr-5">
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Denomination :<b>{{he.decode(person.denomination)}}</b></li>
    <li class="w-full px-4 py-2 rounded-b-lg">statut juridique : <b>{{he.decode(person.legal_status)}}</b></li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">adresse :<b>{{he.decode(person.adress_sgs)}}</b></li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">wilaya : <b>{{he.decode(person.wilaya)}}</b> commune : <b>{{he.decode(person.commune)}}</b></li>
    <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">nationalité : <b>{{he.decode(person.nationality)}}</b></li>
    <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">Telephone : <b>{{he.decode(person.phone_n)}}</b></li>
    <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">Email : <b>{{he.decode(person.email)}}</b></li>
</ul>



</div>
<div v-else="skill.deposant_type =='physical_persons'" class="flex flex-wrap">
  <ul v-for="person in skill.physical_persons" class="w-1/3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mr-5">
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Nom et prenom: <b>{{he.decode(person.lastname) }}</b><b class="ml-2">{{he.decode(person.name)}}</b></li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">adresse : <b>{{he.decode(person.adress)}}</b></li>
    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">wilaya : <b>{{he.decode(person.wilaya)}}</b> commune : <b>{{he.decode(person.commune)}}</b></li>
    <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">nationalité : <b>{{he.decode(person.nationality)}}</b></li>
    <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">Telephone : <b>{{he.decode(person.phone_n)}}</b></li>
    <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">Email : <b>{{he.decode(person.email)}}</b></li>
</ul>
</div>
<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
    </div>
</div>
<!----------------->
<div v-for="tm in skill.marque" class="m-20 w-full">
  <h1  class="flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white flex-1 justify-center">Informations de la<span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 ml-4"> Marque</span></h1>
<a  class="flex flex-col w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img v-if="skill.Type_De_Marque !='Verbale'" class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" :src="`http://192.168.2.74/download_pdf?file=${tm.logo}`" alt="logo">
    <div  class="flex flex-col justify-between p-4 leading-normal w-full">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ he.decode(tm.Nom_de_marque) }}</h5>
        <p  class="mb-3 font-normal text-gray-700 dark:text-gray-400"> type de la marque : <b>{{skill.Type_De_Marque }}</b></p>
        <div v-if="skill.Type_De_Marque !='Verbale'">
          <p  class="mb-3 font-normal text-gray-700 dark:text-gray-400"> type de logo : <b>{{ tm.type_de_logo }}</b></p>
          <p v-if="tm.type_de_logo !='logo en noir et blanc'" class="mb-3 font-normal text-gray-700 dark:text-gray-400">les Couleurs revendiquées : <b>{{he.decode( tm.Couleurs_revendiquees) }}</b></p>
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-if="tm.MarqueTraduction !=' '" >Marque Traduction: <b>{{ tm.MarqueTraduction }}</b></p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-if="tm.MarqueTranslitteration !=' '" >Marque Translitteration : <b>{{ tm.MarqueTranslitteration }}</b></p>
        <div v-if="tm.have_priotity !=0">
          <div v-for="(priority, index) in skill.priority_info" :key="index">
            <p  class="mb-3 font-normal text-gray-700 dark:text-gray-400"> <b> {{ 'Priorité ' + (index + 1) }}</b></p>
            <p  class="mb-3 font-normal text-gray-700 dark:text-gray-400">Numero de priorité :<b>{{ priority.rev_number }}</b> </p>
            <p  class="mb-3 font-normal text-gray-700 dark:text-gray-400">pays :<b>{{ priority.priority_contry }}</b> </p>
            <p  class="mb-3 font-normal text-gray-700 dark:text-gray-400">Date de priorité : <b>{{ priority.rev_date }}</b></p>
          </div>
        </div>
    </div>
</a>
</div>
<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
    </div>
</div>
<!------------------------->
<div class="m-20">
<h1  class="flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white flex-1 justify-center">Informations sur les <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 ml-4"> Classes</span></h1>
<div v-for="classe in skill.classeinfos">
<h2 class="flex justify-left font-extrabold uppercase "> Classe <b class="ml-1"> {{ classe.classes }}</b> </h2>

<p class="text-gray-500 dark:text-gray-400">{{ classe.product }}</p>

</div>
</div>
<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
    </div>
</div>
<!-------------------------->
<div class="m-20" v-for="mandataire in skill.mandatairedata">
  <div v-if="mandataire.mandataires_nom !=false">
    <h1  class="flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white flex-1 justify-center">Informations sur le <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 ml-4"> Mandataire</span></h1>
    <p  class="mb-3 font-normal text-gray-700 dark:text-gray-400">Nom de mandataire: <b>{{mandataire.mandataires_nom }}</b></p>
  </div>

</div>
</template>