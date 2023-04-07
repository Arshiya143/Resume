<template>
<HeaderPage/> <!-- HeaderPage Component -->
<div>
  <button @click="print" class="bg-danger text-white mt-4 p-2 rounded border-0">Download Resume</button>
  <ResumePrint id="content" v-if="this.show" />
  <ResumePrint2 id="content" v-if="this.show1" />
  <ResumePrint3 id="content" v-if="this.show2" />
</div>
<FooterPage/>
</template>
<script>
import ResumePrint from "./ResumePrint.vue";
import ResumePrint2 from "./ResumePrint2.vue";
import ResumePrint3 from "./ResumePrint3.vue";
import html2pdf from "html2pdf.js";
import FooterPage from "./FooterPage.vue";
import HeaderPage from "./HeaderPage.vue";

export default {
  name: "ShowResume",
  data(){
    return{
      show: false,
      show1: false,
      show2: false
    }
  },
  methods: {
    print()
    {
      // generate a PDF file from the HTML element with the ID "content". The generated PDF file is named "Resume.pdf".

      html2pdf(document.getElementById("content"), {
        filename: "Resume.pdf",
        margin: 0,
			});
    }
  },
  mounted(){
   
    /* Depending on the selected resume template, it sets the show, show1, or show2 property of the Vue instance to true. 
     * This determines which resume template is displayed on the page. */
    
    let resume = localStorage.getItem("format");
    let f = JSON.parse(resume);
    if(f == 'format1')
    {
      this.show = true;
    }
    else if(f == 'format2'){
      this.show1 = true;
    }
    else{
      this.show2 = true;
    }
  },
  components: {
    ResumePrint,
    ResumePrint2,
    ResumePrint3,
    FooterPage,
    HeaderPage
},
};
</script>