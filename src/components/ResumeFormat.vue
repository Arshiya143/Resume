<template>
<HeaderPage/>
   
   <!-- Banner area-->
   <div class="banner-area" id="banner-area" style="background-image:url('https://cdn.pixabay.com/photo/2016/11/21/17/59/blackboard-1846865__480.jpg');">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col">
               <div class="banner-heading">
                  <h4 class="banner-title text-light">What do you want your resume to look like?</h4>
                  <h2 class="banner-title text-light">View all resume templates and select a specific style to customize</h2>
               </div>
            </div>
            <!-- Col end-->
         </div>
         <!-- Row end-->
      </div>
      <!-- Container end-->
   </div>
   <!-- Banner area end-->
       
   <section class="main-container no-padding" id="main-container">
      <div class="ts-services " id="ts-services">
         <div class="container">
            <div class="row">
               <div class="col-lg-4 col-md-12">
                  <!-- format 1-->
                  <div class="ts-service-box">
                     <div class="ts-service-image-wrapper">
                        <img class="img-fluid format" src="../assets/images/format1.jpg" alt="" @click="format1">
                     </div>
                  </div>
                  <!-- format1 end-->
               </div>
               <div class="col-lg-4 col-md-12">
                  <!-- format2 -->
                  <div class="ts-service-box">
                     <div class="ts-service-image-wrapper">
                        <img class="img-fluid format" src="../assets/images/format2.jpg" alt="" @click="format2">
                     </div>
                  </div>
                  <!-- format2 end-->
               </div>
               <div class="col-lg-4 col-md-12">
                  <!-- format3 -->
                  <div class="ts-service-box">
                     <div class="ts-service-image-wrapper">
                        <img class="img-fluid format" src="../assets/images/format3.jpg" alt="" @click="format3">
                     </div>
                  </div>
                  <!-- format3 end-->
               </div>
               <!-- Col end-->
            </div>
            <!-- Content row end-->
         </div>
         <!-- Container end-->
      </div>
   </section>
<FooterPage/>
</template>
<script>
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import axios from 'axios';
export default{
    name: "ResumeFormat",
    components: { HeaderPage, FooterPage },
    methods:
    {
        async format(form)
        {
            //It sets a localStorage item called "reloadinput" to false and another item called "format" to the value of the form argument.

            let r = false;
            localStorage.setItem("reloadinput",JSON.stringify(r));
            localStorage.setItem("format",JSON.stringify(form));
            let user = localStorage.getItem('user');
            if(user)
            {
                  /* It then retrieves a user object from localStorage, sends a POST request to a local server route "/resume/add" 
                  using axios, passing in the user object and form name as data.*/
                  
                  let u = JSON.parse(user);
                  let result=await axios.post("http://localhost:3000/resume/add", {
                     user: u,
                     name: form
                  });
                  
                  //The response from the server is stored in the "result" variable, and the generated id is extracted and stored in a localStorage item called "resume". 

                  let rId = result.data.generatedMaps[0].id;
                  localStorage.setItem("resume",JSON.stringify(rId));
                  
                  // Finally, the method navigates the user to the "ResumeInput" route using $router.push().

                  this.$router.push({ name:'ResumeInput'})
            }
            else
            {
                  this.$router.push({ name:'CredentialPage'});
            }
        },

        /* The remaining three methods, format1(), format2(), and format3(), are simply calling the "format" method, 
         * passing in different form names as arguments. */
        
        format1()
        {
            let form = 'format1';
            this.format(form);
        },
        format2()
        {
            let form = 'format2';
            this.format(form);
        },
        format3()
        {
            let form = 'format3';
            this.format(form);
        }  
    }
}
</script>
<style scoped>
.format{
    transition: .2s;
}
.format:hover{
    transform: scale(1.1);
    border-style: solid;
    border-color: rgb(62, 60, 60);
    cursor: pointer;
}
</style>