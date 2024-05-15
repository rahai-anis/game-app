import{j as k,o as f,r as _,a as d,c as l,b as e,w as n,e as g,u as t,F as b,d as w,i,k as c,t as u,g as v,h as q,R as N}from"./index-DKWDv90s.js";import{u as C}from"./skills-DVMIHvQ7.js";import{h as M}from"./he-BU-6BCAe.js";import"./axios-Bo0ATomq.js";const V={class:"flex"},j={class:"mb-10 mt-3 flex"},B={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},D={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"},L=e("thead",{class:"text-xs text-gray-700 uppercase dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3 bg-gray-50 dark:bg-gray-800"}," N° Marque "),e("th",{scope:"col",class:"px-6 py-3"}," Nom de marque "),e("th",{scope:"col",class:"px-6 py-3"}," type de marque "),e("th",{scope:"col",class:"px-6 py-3"}," Date de depot "),e("th",{scope:"col",class:"px-6 py-3"}," voir plus ")])],-1),S={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"},P={class:"px-6 py-4"},R={class:"px-6 py-4"},T={class:"px-6 py-4"},U={class:"px-6 py-4"},$={key:0,class:"flex justify-center m-10"},E=e("svg",{class:"w-3.5 h-3.5 me-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 5H1m0 0 4 4M1 5l4-4"})],-1),F={class:"text-2xl font-black text-gray-600 dark:text-white"},I=e("svg",{class:"w-3.5 h-3.5 ms-2 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})],-1),O={__name:"skillsIndex",setup(z){const y=k();localStorage.getItem("token")==null&&y.push({name:"login"});const{skills:m,getSkills:h,pagination:o,changePage:p,searchs:x}=C();f(()=>h());const s=_({id:"",marque:"",date:""});return(H,a)=>(d(),l(b,null,[e("div",V,[n(e("input",{"onUpdate:modelValue":a[0]||(a[0]=r=>s.id=r),type:"number",id:"default-search",class:"block w-full p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"N° marque"},null,512),[[g,s.id]]),n(e("input",{"onUpdate:modelValue":a[1]||(a[1]=r=>s.marque=r),type:"search",id:"default-search",class:"block w-full p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Nom du marque"},null,512),[[g,s.marque]]),n(e("input",{"onUpdate:modelValue":a[2]||(a[2]=r=>s.date=r),type:"date",id:"default-search",class:"block w-full p-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Nom du marque"},null,512),[[g,s.date]])]),e("div",j,[e("button",{onClick:a[3]||(a[3]=r=>t(x)(s)),type:"submit",class:"py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"},"search")]),e("div",B,[e("table",D,[L,e("tbody",null,[(d(!0),l(b,null,w(t(m),r=>(d(),l("tr",{key:r.id,class:"border-b border-gray-200 dark:border-gray-700"},[e("th",S,u(r.marque_id),1),e("td",P,u(t(M).decode(r.Nom_de_marque)),1),e("td",R,u(r.Type_De_Marque),1),e("td",T,u(r.date_depot),1),e("td",U,[v(t(N),{class:"text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",to:{name:"skillsEdit",params:{id:r.marque_id}}},{default:q(()=>[i("plus infos")]),_:2},1032,["to"])])]))),128))])]),t(o).last_page>1?(d(),l("div",$,[t(o).current_page>1?(d(),l("button",{key:0,onClick:a[4]||(a[4]=r=>t(p)(t(o).current_page-1)),class:"flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},[E,i(" Previous ")])):c("",!0),e("span",F,"Page "+u(t(o).current_page)+" of "+u(t(o).last_page),1),t(o).current_page<t(o).last_page?(d(),l("button",{key:1,onClick:a[5]||(a[5]=r=>t(p)(t(o).current_page+1)),class:"flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"},[i(" Next "),I])):c("",!0)])):c("",!0)])],64))}};export{O as default};
