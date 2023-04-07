<template>
    <div class="wrapper mt-lg-5" style="height:283mm;width:210mm !important;">
        <!-- sidebar-wrapper -->
		<div class="sidebar-wrapper">
            <!-- profile-container -->
			<div class="profile-container">
                <img class="profile" src="assets/images/profile.png" alt="" />
                <h1 class="name">{{this.per_name}}</h1>
                <h3 class="tagline">{{ this.prof }}</h3>
            </div>
			<!-- contact-container -->
            <div class="contact-container container-block">
                <ul class="list-unstyled contact-list">
                    <li class="email"><i class="fa-solid fa-envelope"></i><a href="mailto: yourname@email.com">{{ this.email }}</a></li>
                    <li class="phone"><i class="fa-solid fa-phone"></i><a href="tel:0123 456 789">{{ this.phone }}</a></li>
                </ul>
            </div>
			<!-- education-container -->
            <div class="education-container container-block">
                <h2 class="container-block-title">Skills</h2>
                <ul class="list-unstyled interests-list">
                    <li class="text-center">{{ this.sk_name }}</li>
                    <li class="text-center">{{ this.sk_name1 }}</li>
                    <li class="text-center">{{ this.sk_name2 }}</li>
                </ul>
            </div>
			<!-- languages-container -->
            <div class="languages-container container-block">
                <h2 class="container-block-title">Languages</h2>
                <ul class="list-unstyled interests-list">
                    <li class="text-center">{{ this.lang_name }}</li>
                    <li class="text-center">{{ this.lang_name1 }}</li>
                </ul>
            </div>
            <!-- interests-container -->
            <div class="interests-container container-block">
                <h2 class="container-block-title">Interests</h2>
                <ul class="list-unstyled interests-list">
                    <li class="text-center">{{ this.rest_name }}</li>
                    <li class="text-center">{{ this.rest_name1 }}</li>
                </ul>
            </div>
			<!-- Education-container -->
            <div class="interests-container container-block">
                <h2 class="container-block-title">Education</h2>
                <ul class="list-unstyled interests-list">
                    <li class="text-center">
						<div>{{ this.loc }} {{ this.eline }} {{ this.ed_sdate }} {{ this.edash }} {{ this.ed_edate }}</div>
						<h6>{{ this.degree }}</h6>
                        <div>{{ this.clg }}</div>
					</li>
                    <li class="text-center">
						<div>{{ this.loc1 }} {{ this.eline1 }} {{ this.ed_sdate1 }} {{ this.edash1 }} {{ this.ed_edate1 }}</div>
						<h6>{{ this.degree1 }}</h6>
                        <div>{{ this.clg1 }}</div>
					</li>
                </ul>
            </div>
        </div>
        <div class="main-wrapper">
            <!-- summary-section -->
			<section class="section summary-section">
                <h2 class="section-title"><span class="icon-holder"><i class="fa-solid fa-user"></i></span>Career Profile</h2>
                <div class="summary">
                    <p>{{ this.sum }}</p>
                </div>
            </section>
            <!-- experience-section-->
			<section class="section experiences-section">
                <h2 class="section-title"><span class="icon-holder"><i class="fa-solid fa-briefcase"></i></span>Experiences</h2>
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">{{ this.title }}</h3>
                            <div class="time">{{ this.sdate }} {{ this.jdash }} {{ this.edate }}</div>
                        </div>
                        <div class="company">{{ this.company }}</div>
                    </div>
                    <div class="details">
                        <p>{{ this.job_desc }}</p>  
                    </div>
                </div>
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">{{ this.title1 }}</h3>
                            <div class="time">{{ this.sdate1 }} {{ this.jdash1 }} {{ this.edate1 }}</div>
                        </div>
                        <div class="company">{{ this.company1 }}</div>
                    </div>
                    <div class="details">
                        <p>{{ this.job_desc1 }}</p>  
                    </div>
                </div>
                <div class="item">
                    <div class="meta">
                        <div class="upper-row">
                            <h3 class="job-title">{{ this.title2 }}</h3>
                            <div class="time">{{ this.sdate2 }} {{ this.jdash2 }} {{ this.edate2 }}</div>
                        </div>
                        <div class="company">{{ this.company2 }}</div>
                    </div>
                    <div class="details">
                        <p>{{ this.job_desc2 }}</p>  
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default{
    name: 'ResumePrint',
    data()
	{
		return{
			per_name:"",
			prof:"",
			phone:"",
			email:"",
			city: "",
			cnty:"",
			sum:"",
			title:"",
			company:"",
			sdate: "",
			edate:"",
			job_desc: "",
			jline:"",
			jdash:"",
			title1:"",
			company1:"",
			sdate1: "",
			edate1:"",
			job_desc1: "",
			jline1:"",
			jdash1:"",
			title2:"",
			company2:"",
			sdate2: "",
			edate2:"",
			job_desc2: "",
			jline2:"",
			jdash2:"",
			degree:"",
			clg:"",
			field:"", 
			loc:"",
			ed_sdate:"",
			ed_edate:"",
			eline:"",
			edash:"",
			degree1:"",
			clg1:"",
			field1:"", 
			loc1:"",
			ed_sdate1:"",
			ed_edate1:"",
			eline1:"",
			edash1:"",
			degree2:"",
			clg2:"",
			field2:"", 
			loc2:"",
			ed_sdate2:"",
			ed_edate2:"",
			eline2:"",
			edash2:"",
			sk_name:"",
			sk_name1:"",
			sk_name2:"",
			lang_name:"",
			lang_name1:"",
			lang_name2:"",
			rest_name:"",
			rest_name1:"",
			rest_name2:""
		}
	},
	async mounted()
	{
		let person = localStorage.getItem("personal"); // retrieves the value of the "personal" key from the browser's local storage.
        if(person)
		{
			let p = JSON.parse(person); // parses the JSON data in person using the JSON.parse()
			let result = await axios.get("http://localhost:3000/personal/"+p); // sends an HTTP GET request to the backend API endpoint using axios
			if(result.status== 200)
			{
				// updates the relevant variables to display the job information.

				this.per_name = result.data.name;
				this.prof = result.data.profession;
				this.phone = result.data.phone;
				this.email = result.data.email;
				this.city = result.data.city;
				this.cnty = result.data.country;
			}
		}
		let sum = localStorage.getItem("sum");
        if(sum)
		{
			let s = JSON.parse(sum);
			let result1 = await axios.get("http://localhost:3000/summary/"+s);
			if(result1.status== 200)
			{
				this.sum = result1.data.desc;
			}
		}
		let job = localStorage.getItem("job"); // retrieves the value of the "job" key from the browser's local storage
        if(job)
		{
			let j = JSON.parse(job); // parses the JSON data in job using the JSON.parse()
			let result2 = await axios.get("http://localhost:3000/job/"+j); // sends an HTTP GET request to the backend API endpoint using axios
			if(result2.status== 200)
			{
				// updates the relevant variables to display the job information.

				this.jline = "|"
				this.jdash = "-"
				this.title = result2.data.job_title;
				this.company = result2.data.company;
				let s1 =new Date(result2.data.sdate).getFullYear() // extracting the year value from a date string
				this.sdate = s1;
				let e =new Date(result2.data.edate).getFullYear()
				this.edate = e;
				this.job_desc = result2.data.desc;
			}
		}
		let job1 = localStorage.getItem("job1");
		if(job1)
		{	
			this.jline1 = "|"
			this.jdash1 = "-"
			let j1 = JSON.parse(job1);
			let result3 = await axios.get("http://localhost:3000/job/"+j1);
			if(result3.status== 200)
			{
				this.title1 = result3.data.job_title;
				this.company1 = result3.data.company;
				let s2 =new Date(result3.data.sdate).getFullYear()
				this.sdate1 = s2;
				let e1 =new Date(result3.data.edate).getFullYear()
				this.edate1 = e1;
				this.job_desc1 = result3.data.desc;
			}
		}
		let job2 = localStorage.getItem("job2");
		if(job2)
		{	
			this.jline2 = "|"
			this.jdash2 = "-"
			let j2 = JSON.parse(job2);
			let result4 = await axios.get("http://localhost:3000/job/"+j2);
			if(result4.status== 200)
			{
				this.title2 = result4.data.job_title;
				this.company2 = result4.data.company;
				let s3 =new Date(result4.data.sdate).getFullYear()
				this.sdate2 = s3;
				let e2 =new Date(result4.data.edate).getFullYear()
				this.edate2 = e2;
				this.job_desc2 = result4.data.desc;
			}
		}
		let edu = localStorage.getItem("edu");
		if(edu)
		{
			this.eline = "|"
			this.edash = "-"
			let ed = JSON.parse(edu);
			let result5 = await axios.get("http://localhost:3000/edu/"+ed);
			if(result5.status== 200)
			{
				this.degree = result5.data.degree;
				this.clg = result5.data.clg_name;
				this.field = result5.data.field;
				this.loc = result5.data.location;
				let eds =new Date(result5.data.sdate).getFullYear()
				this.ed_sdate = eds;
				let ede =new Date(result5.data.edate).getFullYear()
				this.ed_edate = ede;
			}
		}
		let edu1 = localStorage.getItem("edu1");
		if(edu1)
		{
			this.eline1 = "|"
			this.edash1 = "-"
			let ed1 = JSON.parse(edu1);
			let result6 = await axios.get("http://localhost:3000/edu/"+ed1);
			if(result6.status== 200)
			{
				this.degree1 = result6.data.degree;
				this.clg1 = result6.data.clg_name;
				this.field1 = result6.data.field;
				this.loc1 = result6.data.location;
				let eds1 =new Date(result6.data.sdate).getFullYear()
				this.ed_sdate1 = eds1;
				let ede1 =new Date(result6.data.edate).getFullYear()
				this.ed_edate1 = ede1;
			}
		}
		let edu2 = localStorage.getItem("edu2");
		if(edu2)
		{
			this.eline2 = "|"
			this.edash2 = "-"
			let ed2 = JSON.parse(edu2);
			let result7 = await axios.get("http://localhost:3000/edu/"+ed2);
			if(result7.status== 200)
			{
				this.degree2 = result7.data.degree;
				this.clg2 = result7.data.clg_name;
				this.field2 = result7.data.field;
				this.loc2 = result7.data.location;
				let eds2 =new Date(result7.data.sdate).getFullYear()
				this.ed_sdate2 = eds2;
				let ede2 =new Date(result7.data.edate).getFullYear()
				this.ed_edate2 = ede2;
			}
		}
		let skill = localStorage.getItem("skill");
		if(skill)
		{
			let sk = JSON.parse(skill)
			let result8 = await axios.get("http://localhost:3000/skill/"+sk);
			if(result8.status == 200)
			{
				this.sk_name = result8.data.name;
			}
		}
		let skill1 = localStorage.getItem("skill1");
		if(skill1)
		{
			let sk1 = JSON.parse(skill1)
			let result9 = await axios.get("http://localhost:3000/skill/"+sk1);
			if(result9.status == 200)
			{
				this.sk_name1 = result9.data.name;
			}
		}
		let skill2 = localStorage.getItem("skill2");
		if(skill2)
		{
			let sk2 = JSON.parse(skill2)
			let result10 = await axios.get("http://localhost:3000/skill/"+sk2);
			if(result10.status == 200)
			{
				this.sk_name2 = result10.data.name;
			}
		}
		let lang = localStorage.getItem("lang");
		if(lang)
		{
			let lg = JSON.parse(lang)
			let result11 = await axios.get("http://localhost:3000/language/"+lg);
			if(result11.status == 200)
			{
				this.lang_name = result11.data.name;
			}
		}
		let lang1 = localStorage.getItem("lang1");
		if(lang1)
		{
			let lg1 = JSON.parse(lang1)
			let result12 = await axios.get("http://localhost:3000/language/"+lg1);
			if(result12.status == 200)
			{
				this.lang_name1 = result12.data.name;
			}
		}
		let lang2 = localStorage.getItem("lang2");
		if(lang2)
		{
			let lg2 = JSON.parse(lang2)
			let result13 = await axios.get("http://localhost:3000/language/"+lg2);
			if(result13.status == 200)
			{
				this.lang_name2 = result13.data.name;
			}
		}
		let rest = localStorage.getItem("rest");
		if(rest)
		{
			let r = JSON.parse(rest)
			let result14 = await axios.get("http://localhost:3000/interest/"+r);
			if(result14.status == 200)
			{
				this.rest_name = result14.data.name;
			}
		}
		let rest1 = localStorage.getItem("rest1");
		if(rest1)
		{
			let r1 = JSON.parse(rest1)
			let result15 = await axios.get("http://localhost:3000/interest/"+r1);
			if(result15.status == 200)
			{
				this.rest_name1 = result15.data.name;
			}
		}
		let rest2 = localStorage.getItem("rest2");
		if(rest2)
		{
			let r2 = JSON.parse(rest2)
			let result16 = await axios.get("http://localhost:3000/interest/"+r2);
			if(result16.status == 200)
			{
				this.rest_name2 = result16.data.name;
			}
		}
	}
} 
</script>
<style scoped>
@import '../assets/css/resume3.css';
</style>