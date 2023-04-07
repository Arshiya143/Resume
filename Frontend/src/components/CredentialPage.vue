<template>
<div class="container">
  <div class="row mt-5 justify-content-center">
    <div class="col-lg-6 mt-5">
      
      <!--form-wrap-->
      <div class="form-wrap">
        
        <!--tabs-->
        <div class="tabs">
          <h3 class="signup-tab"><a class="active" href="#signup-tab-content">Sign Up</a></h3>
          <h3 class="login-tab"><a href="#login-tab-content">Login</a></h3>
        </div>
        
        <!--tabs-content-->
        <div class="tabs-content">
          
          <!--.signup-tab-content-->
          <div id="signup-tab-content" class="active">
            
            <!--Signup-form-->
            <form class="signup-form" onsubmit="return false">
              <input type="email" class="input" v-model="email" autocomplete="off" placeholder="Email">
              <span v-if="v$.email.$error" class="text-danger font-weight-bold"> {{ v$.email.$errors[0].$message }} </span>
              <input type="text" class="input" v-model="name" autocomplete="off" placeholder="Username">
              <span v-if="v$.name.$error" class="text-danger font-weight-bold"> {{ v$.name.$errors[0].$message }} </span>
              <input type="password" class="input" v-model="pass" autocomplete="off" placeholder="Password">
              <span v-if="v$.pass.$error" class="text-danger font-weight-bold"> {{ v$.pass.$errors[0].$message }} </span>
              <input type="submit" class="button" value="Sign Up" @click="signup">
            </form>
            
            <!--help-text-->
            <div class="help-text">
              <p>By signing up, you agree to our</p>
              <p><a href="#">Terms of service</a></p>
            </div>
          </div>
          
          <!--login-tab-content-->
          <div id="login-tab-content">
            
            <!--login-form-->
            <form class="login-form" onsubmit="return false">
              <input type="text" class="input" v-model="email1" autocomplete="off" placeholder="Email">
              <span v-if="v$.email1.$error" class="text-danger font-weight-bold"> {{ v$.email1.$errors[0].$message }} </span>
              <input type="password" class="input" v-model="pass1" autocomplete="off" placeholder="Password">
              <span v-if="v$.pass1.$error" class="text-danger font-weight-bold"> {{ v$.pass1.$errors[0].$message }} </span>
              <input type="submit" class="button" @click="signin" value="Login">
            </form>
            
            <!--help-text-->
            <div class="help-text">
              <p><a href="#">Forget your password?</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import jQuery from 'jquery';
import axios from 'axios';
import useValidate from '@vuelidate/core'
import { required, email,minLength,alpha } from '@vuelidate/validators'
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default{
    name: 'CredentialPage',
    data(){
        return{
            v$: useValidate(),
            name:'',
            email:'',
            pass:'',
            email1:'',
            pass1:'',
            show: false,
        }
    },
    validations() {
        return {
        name: { required, alpha },
        email: { required, email },
        pass: { required,minLength: minLength(6) },
        email1: { required, email },
        pass1: { required,minLength: minLength(6) },
        }
    },
    methods:
    {
        async signup()
        {
            // It first calls $touch() on three fields (email, pass, and name) which likely updates their validation status.
            
            this.v$.email.$touch();
            this.v$.pass.$touch();
            this.v$.name.$touch();
            
            // It checks if there are any validation errors by checking the $error property of each field
            
            if (!this.v$.email.$error && !this.v$.pass.$error && !this.v$.name.$error) {
              
              /* It sends a POST request to the backend API endpoint (http://localhost:3000/user/add) using Axios with 
              the user's name, email, and password as the data payload.*/
              
              let result = await axios.post('http://localhost:3000/user/add',{
                    name: this.name,
                    email: this.email,
                    password: this.pass,
                });
                if(result.status==201)
                 {
                    // It displays a success message using useToast
                    
                    const $toast = useToast();
                    $toast.success('SignUp Successfully!!!!', {
                                        position: 'top'
                                    });
                 }
            }
        },
        async signin()
        {
            this.v$.email1.$touch();
            this.v$.pass1.$touch();
            if (!this.v$.pass1.$error &&!this.v$.email1.$error) {
                
              /* The function performs a GET request to the local server using Axios to 
                retrieve the user's information based on the email1 and pass1 provided.*/

                let result=await axios.get('http://localhost:3000/user/'+this.email1+'/'+this.pass1).catch(error => {
                
                //the error message is stored and displayed to the user as a toast message.
                
                this.errorMessage = error.message;
                const $toast = useToast();
                    $toast.error('Incorrect Credential!!!!', {
                                        position: 'top'
                                    });
                });
                if(result.status==200)
                {
                    /* the user information is stored in the local storage, 
                    and the function performs a POST request to add the user's name and format information to the resume.*/
                    
                    localStorage.setItem("user",JSON.stringify(result.data));
                    let user = localStorage.getItem('user');
                    let u = JSON.parse(user);
                    let form = localStorage.getItem('format');
                    let f = JSON.parse(form);
                    let result2=await axios.post("http://localhost:3000/resume/add", {
                      user: u,
                      name: f
                    });
                    
                    /*A new resume ID is generated and stored in the local storage. 
                    Finally, the router is used to navigate to the "ResumeInput" page.*/
                    
                    let rId = result2.data.generatedMaps[0].id;
                    localStorage.setItem("resume",JSON.stringify(rId));
                    this.$router.push({ name:'ResumeInput'})
                }
            }
        }
    },
    mounted()
    {
      // This can be used as a quick way to refresh the page and apply changes made to the localStorage.

      const reloaded = localStorage.getItem('reloadcred');
      if (reloaded !== 'true') {
        localStorage.setItem('reloadcred', 'true');
        location.reload();
      }
    }
}
jQuery(document).ready(function($) {
  let tab = $('.tabs h3 a');

  //  this is a simple and reusable approach for creating a tab component with dynamic content.

  tab.on('click', function(event) {
    event.preventDefault();
    tab.removeClass('active');
    $(this).addClass('active');

    let tab_content = $(this).attr('href');
    $('div[id$="tab-content"]').removeClass('active');
    $(tab_content).addClass('active');
  });
});
</script>
<style scoped>
@import '../assets/css/credential.css';
</style>