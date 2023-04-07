<template>
   <div class="site-top-2">
      <header class="header nav-down" id="header-2">
         <div class="site-nav-inner site-navigation navigation navdown">
            
            <!-- Container -->   
            <div class="container">
               
               <!-- Navbar toggler-->
               <nav class="navbar navbar-expand-lg ">
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                     aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="icon icon-menu"></i></span></button>
                  <div class="collapse navbar-collapse justify-content-start" id="navbarSupportedContent">
                     <ul class="navbar-nav">
                        <li class="nav-item dropdown" v-if="this.show"><a class="nav-link" href="#" data-toggle="dropdown"><i class="fa fa-user-circle"></i>&nbsp;&nbsp;{{ this.name }}<i class="fa fa-angle-down"></i></a>
                           <ul class="dropdown-menu" role="menu">
                              <li><a href="" @click="logout"><i class="fa fa-right-from-bracket"></i>&nbsp;&nbsp;logout</a></li>
                           </ul>
                        </li>
                        <li class="nav-item dropdown active"><a class="nav-link" @click="home">Home</a>
                        </li>
                        <li class="nav-item dropdown text-white"><a class="nav-link" @click="resume">Resume</a>
                        </li>
                        <li class="nav-item dropdown">
                           <a href="contact.html">About Us</a>
                        </li>
                        <li class="nav-item dropdown">
                           <a href="contact.html">Contact</a>
                        </li>
                     </ul>
                  </div>
                  <a @click="home" style="font-size: 30px;background: -webkit-linear-gradient(red, white);-webkit-background-clip: text;-webkit-text-fill-color: transparent;cursor: pointer;">
                     <i class="fa fa-file" aria-hidden="true"></i>&nbsp;@Resume
                  </a>
               </nav>
               <!-- Navbar end-->   
            </div>
         </div>
         <!-- Site nav inner end-->
      </header>
      <!-- Header end-->
   </div>
</template>
<script>
export default{
    name: 'HeaderPage',
    data()
    {
      return{
         name:'',
         show: false
      }
    },
    methods:
    {
        home(){
            this.$router.push({name: 'Home'});
        },
        logout()
        {
            localStorage.clear();
            this.$router.push({name: 'Home'});
        },
        resume(){
         this.$router.push({name: 'ResumeFormat'});
        }
    },
    mounted(){
        let user = localStorage.getItem("user");
        if(user)
        {
            let u = JSON.parse(user);
            this.name = u.name;
            this.show = true;
        }
        else
        {
            this.show = false;
        }
    }
}
</script>