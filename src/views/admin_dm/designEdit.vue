<script setup>
import {useRouter } from 'vue-router'

   import DM from '../../composables/design';
   import {onMounted,reactive} from 'vue';
   import he from 'he';
   const router = useRouter();
   
if(localStorage.getItem('token')==null){
    router.push({name: "login"});
}
   const {getdm,dm,updatedeposant,errors,success} = DM();
   const props = defineProps({
    id: {
        required: true,
        type: String
    }
   })
   onMounted(()=>getdm(props.id));
   /****************** */
   const editMode = reactive({
    type : false
   })
   
</script>
<template>
    <h1  class="flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white flex-1 justify-center">Informations <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 ml-4"> personnelles</span></h1>
    <button @click="editMode.type = !editMode.type" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Edit Mode</button>
    <div class="flex flex-wrap w-full">
      <form  @submit.prevent="updatedeposant($route.params.id,dm.deposants)" >

        <div class="flex flex-wrap w-full">
          <div v-for="(deposant, index) in dm.deposants" :key="index" >
    
    <div v-if="deposant.type =='physical_persons'"  class="w-full">
        <ul>
            <li class="w-full px-4 py-2 rounded-b-lg ">
              Nom et prenom: 
              <b v-if="!editMode.type">{{ he.decode(deposant.name) }}</b>
              <input v-else v-model="deposant.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <span v-if="errors.name && editMode.type" class="text-sm text-red-400">{{errors.name[0]}}</span>
              <b class="ml-2" v-if="!editMode.type">{{ he.decode(deposant.lastname) }}</b>
              <input v-else v-model="deposant.lastname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <span v-if="errors.lastname && editMode.type" class="text-sm text-red-400">{{errors.lastname[0]}}</span>
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 ">
              adresse : 
              <b v-if="!editMode.type">{{ he.decode(deposant.adress) }}</b>
              <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-else v-model="deposant.adress">
              <span v-if="errors.adress && editMode.type" class="text-sm text-red-400">{{errors.adress[0]}}</span>
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600 ">
              wilaya : 
              <b v-if="!editMode.type">{{ he.decode(deposant.wilaya) }}</b>
              <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-else v-model="deposant.wilaya">
              <span v-if="errors.wilaya && editMode.type" class="text-sm text-red-400">{{errors.wilaya[0]}}</span>
              commune : 
              <b v-if="!editMode.type">{{ he.decode(deposant.commune) }}</b>
              <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-else v-model="deposant.commune">
              <span v-if="errors.commune && editMode.type" class="text-sm text-red-400">{{errors.commune[0]}}</span>
            </li>
            <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">
              Telephone : 
              <b v-if="!editMode.type">{{ he.decode(deposant.phone_n) }}</b>
              <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-else v-model="deposant.phone_n">
              <span v-if="errors.phone_n && editMode.type" class="text-sm text-red-400">{{errors.phone_n[0]}}</span>
            </li>
            <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">
              Email : 
              <b v-if="!editMode.type">{{ he.decode(deposant.mail) }}</b>
              <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-else v-model="deposant.mail">
              <span v-if="errors.mail && editMode.type" class="text-sm text-red-400">{{errors.mail[0]}}</span>
            </li>

    </ul>
    
    </div>
    
    <div v-else="deposant.type =='morale_persons'"  class="w-full">
        <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mr-5">
            <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Denomination :
              <b v-if="!editMode.type">{{ he.decode(deposant.denomination) }}</b>
        <input v-else v-model="deposant.denomination" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <span v-if="errors.denomination && editMode.type " class="text-sm text-red-400">{{errors.denomination[0]}}</span>
            </li>
            <li class="w-full px-4 py-2 rounded-b-lg dark:border-gray-600">statut juridique : 
              <b v-if="!editMode.type">{{ he.decode(deposant.j_stat) }}</b>
        <input v-else v-model="deposant.j_stat" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <span v-if="errors.j_stat && editMode.type" class="text-sm text-red-400">{{errors.j_stat[0]}}</span>
        </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">adresse :
              <b v-if="!editMode.type">{{ he.decode(deposant.adress_sgs) }}</b>
        <input v-else v-model="deposant.adress_sgs" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <span v-if="errors.adress_sgs && editMode.type" class="text-sm text-red-400">{{errors.adress_sgs[0]}}</span>
             
            </li>
            <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">wilaya :  <b v-if="!editMode.type">{{ he.decode(deposant.wilaya) }}</b>
        <input v-else v-model="deposant.wilaya" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <span v-if="errors.wilaya && editMode.type" class="text-sm text-red-400">{{errors.wilaya[0]}}</span> commune :  <b v-if="!editMode.type">{{ he.decode(deposant.commune) }}</b>
        <input v-else v-model="deposant.commune" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <span v-if="errors.commune && editMode.type" class="text-sm text-red-400">{{errors.commune[0]}}</span></li>
            <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">type d'activité : 
              <b v-if="!editMode.type">{{ he.decode(deposant.activity_type) }}</b>
        <input v-else v-model="deposant.activity_type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <span v-if="errors.activity_type && editMode.type" class="text-sm text-red-400">{{errors.activity_type[0]}}</span>
       </li>
            <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">Telephone : <b v-if="!editMode.type">{{ he.decode(deposant.phone_n) }}</b>
        <input v-else v-model="deposant.phone_n" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <span v-if="errors.phone_n && editMode.type" class="text-sm text-red-400">{{errors.phone_n[0]}}</span></li>
            <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">Email : <b v-if="!editMode.type">{{ he.decode(deposant.mail) }}</b>
        <input v-else v-model="deposant.mail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <span v-if="errors.mail && editMode.type" class="text-sm text-red-400">{{errors.mail[0]}}</span></li>
        </ul>
    </div>
</div>
        </div>
       
        <button v-if="editMode.type" type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Enregistrer</button>
        <span v-if="success==200 && editMode.type" class="text-sm text-green-600 font-extrabold">Modifier avec succees</span>
        <span v-if="success==500 && editMode.type" class="text-sm text-red-600 font-extrabold">Probléme de serveur veuillez contacter l'administrateur</span>
      </form>   
    </div>
    
    <div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
    </div>
</div>  
<h1  class="flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white flex-1 justify-center">Informations <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 ml-4"> du depot</span></h1>
<ul v-if="dm.marque_info" class="w-1/3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white mr-5">
   
    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        Type de Demande: <strong>{{ dm.marque_info.type_de_demende }}</strong>
      </li>
      <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
        Période de Protection: <strong>{{ dm.marque_info.Periode_de_protection }}</strong>
      </li>
      <div v-if="dm.marque_info.have_priotity='1'" >
        <div v-for="(priority, index) in dm.prioritys" :key="index">
            <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">Pays de priorité : <b>{{he.decode(priority.priority_contry)}}</b></li>
            <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">Numero de priorité : <b>{{he.decode(priority.priority_n)}}</b></li>
            <li class="w-full px-4 py-2 rounded-b-lg  border-b border-gray-200">date de priorité : <b>{{he.decode(priority.priority_date)}}</b></li>
        </div>
      </div>
</ul>
<div class="inline-flex items-center justify-center w-full">
    <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700">
    <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
  </svg>
    </div>
</div>  
<h1  class="flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white flex-1 justify-center">Informations <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 ml-4"> du Modéle</span></h1>
<div  class="w-full flex flex-wrap">
    <div class="w-full flex flex-wrap flex-col" v-for="(design, index) in dm.form_design" :key="index">
        <a class="flex flex-row w-full items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
           
            <img  class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" :src="`http://192.168.2.74/download_pdf?file=${design.vue_principal}`" alt="logo"> 
            <div  class="flex flex-col justify-between p-4 leading-normal w-full">
                <h2 class="flex justify-left font-extrabold uppercase "> Modéle <b class="ml-1"> {{ index +1}}</b> </h2>
                <p class="text-gray-500 dark:text-gray-400">Nature : <b>{{he.decode( design.nature) }}</b></p>
                <p class="text-gray-500 dark:text-gray-400">legende explicative : <b>{{ he.decode(design.legends_explicative) }}</b></p>
                <p class="text-gray-500 dark:text-gray-400">Nombre dessin industriel : <b>{{ design.NB_dessin_industriel }}</b></p>
                <p class="text-gray-500 dark:text-gray-400">Nombre 3D : <b>{{ design.NB_threed }}</b></p>
                <p class="text-gray-500 dark:text-gray-400">Nombre photographique : <b>{{ design.NB_photographique }}</b></p>
                <p class="text-gray-500 dark:text-gray-400">Nombre schemas : <b>{{ design.NB_schemas }}</b></p>
            </div>           
        </a>
        <div v-if="dm.fromvue[index]" class="w-full flex flex-wrap m-10">

            <div v-for="(vue, index2) in dm.fromvue[index]" :key="index2">
                <img  class="object-cover w-full  h-96 md:h-auto md:w-48 border-2 border-grey-600" :src="`http://192.168.2.74/download_pdf?file=${vue.vues_file}`" alt="logo">
            </div>
            
        </div>
       
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

<div  v-if="dm.mondatory">
  <div v-if="dm.mondatory.name !=''">
    <h1  class="flex mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl dark:text-white flex-1 justify-center">Informations sur le <span class="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 ml-4"> Mandataire</span></h1>
    <p  class="mb-3 font-normal text-gray-700 dark:text-gray-400">Nom de mandataire: <b>{{dm.mondatory.name }}</b></p>
    <p  class="mb-3 font-normal text-gray-700 dark:text-gray-400">adresse du mandataire: <b>{{dm.mondatory.adress }}</b></p>
  </div>

</div>


</template>
