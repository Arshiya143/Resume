<template>
<HeaderPage/>
<!-- MultiStep Form -->
<div class="container-fluid" id="grad1">
    <div class="row justify-content-center mt-0">
        <div class="col-11 col-sm-10 col-md-9 col-lg-7 text-center p-0 mt-3 mb-2">
            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2><strong>Let Us Manage Your Resume</strong></h2>
                <div class="row">
                    <div class="col-md-12 mx-0">
                        <form id="msform">
                            <!-- progressbar -->
                            <ul id="progressbar">
                                <li class="active" id="personal"><strong>Personal Info</strong></li>
                                <li id="work"><strong>Work History</strong></li>
                                <li id="job"><strong>Education</strong></li>
                                <li id="skill"><strong>Skill</strong></li>
                                <li id="more"><strong>More Info</strong></li>
                                <li id="sum"><strong>Summary</strong></li>
                                <li id="confirm"><strong>Finish</strong></li>
                            </ul>
                            <!-- Personal information form -->
                            <fieldset>
                                <div class="form-card">
                                    <h6 class="fs-title mb-4">What’s the best way for employers to contact you?</h6>
                                    <h6 class="mb-5">We suggest including an email and phone number</h6>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="name">Full Name</label>
                                                <input type="text" class="form-control" v-model="personal.name" placeholder="E.g: Arshiya Khwajamiya Patel">
                                                <span v-if="v$.personal.name.$error" class="text-danger font-weight-bold"> {{ v$.personal.name.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">Profession</label>
                                                <input type="email" class="form-control" v-model="personal.prof" placeholder="E.g: Software Developer">
                                                <span v-if="v$.personal.prof.$error" class="text-danger font-weight-bold"> {{ v$.personal.prof.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="name">Phone</label>
                                                <input type="text" class="form-control" v-model="personal.phn" placeholder="E.g: 8626007680">
                                                <span v-if="v$.personal.phn.$error" class="text-danger font-weight-bold"> {{ v$.personal.phn.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">Email</label>
                                                <input type="email" class="form-control" v-model="personal.email" placeholder="E.g: arshiya.patel@gmail.com">
                                                <span v-if="v$.personal.email.$error" class="text-danger font-weight-bold"> {{ v$.personal.email.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">Country</label>
                                                <select class="form-select sel" aria-label="Default select example" v-model="personal.cnty" style="margin-top:22px;">
                                                    <option value="" selected disabled hidden>Select Country</option>
                                                    <option value="India">India</option>
                                                    <option value="Australia">Australia</option>
                                                    <option value="United Arab">United Arab</option>
                                                    <option value="Bahrain">Bahrain</option>
                                                </select>
                                                <span v-if="v$.personal.cnty.$error" class="text-danger font-weight-bold"> {{ v$.personal.cnty.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="label float-left" for="name">City</label>
                                                <input type="text" class="form-control" v-model="personal.city" placeholder="E.g: Pune">
                                                <span v-if="v$.personal.city.$error" class="text-danger font-weight-bold"> {{ v$.personal.city.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">Pincode</label>
                                                <input type="email" class="form-control" v-model="personal.pin" placeholder="E.g: 411033">
                                                <span v-if="v$.personal.pin.$error" class="text-danger font-weight-bold"> {{ v$.personal.pin.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row text-center mt-4">
                                        <div class="col-md-2">
                                            <input type="button" v-on:click="personal_fun" :disabled="personal.isActive" class="save rounded-pill text-white" value="Save"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-on:click="personal_edit" v-if="personal.action" class="edit rounded-pill text-white" value="Edit"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-on:click="personal_delete" v-if="personal.action" class="del rounded-pill text-white" value="Delete"/>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 mb-4">
                                            <a class="float-left" v-if="personal.soc" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"><i class="fa fa-link"></i>&nbsp;&nbsp;Add Social Link</a>
                                        </div>
                                    </div>
                                    <div class="row ml-2 collapse" v-if="personal.show" id="collapseExample">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label class="label float-left" for="email">Social Website</label><br><br>
                                                    <select v-model="social.web" class="form-select sel" aria-label="Default select example">
                                                        <option value="" selected disabled hidden>Select Website</option>
                                                        <option value="Twitter" selected>Twitter</option>
                                                        <option value="Facebook">LinkdIn</option>
                                                        <option value="Instagram">Instagram</option>
                                                    </select>
                                                    <span v-if="v$.social.web.$error" class="text-danger font-weight-bold"> {{ v$.social.web.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="form-group">
                                                    <label class="label float-left" for="email"> Social Link</label>
                                                    <input type="email" class="form-control" placeholder="E.g: https://www.instagram.com/arsh_patel1999/" v-model="social.link">
                                                    <span v-if="v$.social.link.$error" class="text-danger font-weight-bold"> {{ v$.social.link.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2 mt-4">
                                                <input type="button" v-on:click="social_fun" :disabled="social.isActive" class="save rounded-pill text-white" value="Save"/>
                                            </div>
                                            <div class="col-md-2 mt-4">
                                                <input type="button" v-on:click="social_edit" v-if="social.action" class="edit rounded-pill text-white" value="Edit"/>
                                            </div>
                                            <div class="col-md-2 mt-4">
                                                <input type="button" v-on:click="social_delete" v-if="social.action" class="del rounded-pill text-white" value="Delete"/>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mb-4 mt-4">
                                                <a class="float-left" v-if="social.soc" data-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1"><i class="fa fa-link"></i>&nbsp;&nbsp;Add One More</a>
                                            </div>
                                        </div>
                                        <div class="row collapse ml-2" id="collapseExample1">
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="label float-left mb-4" for="email">Social Website</label>
                                                        <select v-model="social1.web" class="form-select sel" aria-label="Default select example">
                                                        <option value="" selected disabled hidden>Select Website</option>
                                                        <option value="Twitter" selected>Twitter</option>
                                                        <option value="Facebook">LinkdIn</option>
                                                        <option value="Instagram">Instagram</option>
                                                        </select>
                                                        <span v-if="v$.social1.web.$error" class="text-danger font-weight-bold"> {{ v$.social1.web.$errors[0].$message }} </span>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <div class="form-group">
                                                        <label class="label float-left" for="email"> Social Link</label>
                                                        <input type="email" class="form-control" placeholder="E.g: https://www.instagram.com/arsh_patel1999/" v-model="social1.link">
                                                        <span v-if="v$.social1.link.$error" class="text-danger font-weight-bold"> {{ v$.social1.link.$errors[0].$message }} </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2 mt-4">
                                                    <input type="button" v-on:click="social1_fun" :disabled="social1.isActive" class="save rounded-pill text-white" value="Save"/>
                                                </div>
                                                <div class="col-md-2 mt-4">
                                                <input type="button" v-on:click="social1_edit" v-if="social1.action" class="edit rounded-pill text-white" value="Edit"/>
                                                </div>
                                                <div class="col-md-2 mt-4">
                                                <input type="button" v-on:click="social1_delete" v-if="social1.action" class="del rounded-pill text-white" value="Delete"/>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 mb-4 mt-4">
                                                    <a class="float-left" v-if="social1.soc" data-toggle="collapse" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2"><i class="fa fa-link"></i>&nbsp;&nbsp;Add One More</a>
                                                </div>
                                            </div>
                                            <div class="row collapse ml-2" id="collapseExample2">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label class="label float-left mb-4" for="email">Social Website</label>
                                                            <select v-model="social2.web" class="form-select sel" aria-label="Default select example">
                                                            <option value="" selected disabled hidden>Select Website</option>
                                                            <option value="Twitter" selected>Twitter</option>
                                                            <option value="Facebook">LinkdIn</option>
                                                            <option value="Instagram">Instagram</option>
                                                            </select>
                                                            <span v-if="v$.social2.web.$error" class="text-danger font-weight-bold"> {{ v$.social2.web.$errors[0].$message }} </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-7">
                                                        <div class="form-group">
                                                            <label class="label float-left" for="email"> Social Link</label>
                                                            <input type="email" class="form-control" placeholder="E.g: https://www.instagram.com/arsh_patel1999/" v-model="social2.link">
                                                            <span v-if="v$.social2.link.$error" class="text-danger font-weight-bold"> {{ v$.social2.link.$errors[0].$message }} </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-2 mt-4">
                                                        <input type="button" v-on:click="social2_fun" :disabled="social2.isActive" class="save rounded-pill text-white" value="Save"/>
                                                    </div>
                                                    <div class="col-md-2 mt-4">
                                                    <input type="button" v-on:click="social2_edit" v-if="social2.action" class="edit rounded-pill text-white" value="Edit"/>
                                                    </div>
                                                    <div class="col-md-2 mt-4">
                                                        <input type="button" v-on:click="social2_delete" v-if="social2.action" class="del rounded-pill text-white" value="Delete"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="button" name="next" class="next action-button" value="Next Step"/>
                            </fieldset>
                            <!-- Experience information form -->
                            <fieldset>
                                <div class="form-card">
                                    <h6 class="fs-title mb-4">Tell us about your most recent job</h6>
                                    <h6 class="mb-5">We’ll start there and work backward</h6>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="name">Job Title</label>
                                                <input type="text" class="form-control" v-model="job.title" placeholder="E.g: Retail Sales Associate">
                                                <span v-if="v$.job.title.$error" class="text-danger font-weight-bold"> {{ v$.job.title.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">Employer</label>
                                                <input type="text" class="form-control" v-model="job.employer" placeholder="E.g: H&M">
                                                <span v-if="v$.job.employer.$error" class="text-danger font-weight-bold"> {{ v$.job.employer.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="name">Start Date</label>
                                                <input type="date" class="form-control" v-model="job.sdate" >
                                                <span v-if="v$.job.sdate.$error" class="text-danger font-weight-bold"> {{ v$.job.sdate.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">End Date</label>
                                                <input type="date" class="form-control" v-model="job.edate" >
                                                <span v-if="v$.job.edate.$error" class="text-danger font-weight-bold"> {{ v$.job.edate.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 mt-3">
                                            <div class="form-group">
                                                <label class="label float-left" for="#">Job Description</label>
                                                <textarea name="message" class="form-control" v-model="job.desc" cols="30" rows="4" placeholder="Type your achievements and responsibilities here"></textarea>
                                                <span v-if="v$.job.desc.$error" class="text-danger font-weight-bold"> {{ v$.job.desc.$errors[0].$message }} </span>
                                            </div> 
                                        </div>
                                    </div>
                                    <div class="row text-center mt-4">
                                        <div class="col-md-2">
                                            <input type="button" v-on:click="job_fun" :disabled="job.isActive" class="save rounded-pill text-white" value="Save"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="job.action" v-on:click="job_edit" class="edit rounded-pill text-white" value="Edit"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="job.action" v-on:click="job_delete" class="del rounded-pill text-white" value="Delete"/>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 mb-4">
                                            <a class="float-left" v-if="job.next" data-toggle="collapse" href="#position" aria-expanded="false" aria-controls="position"><i class="fa fa-link"></i>&nbsp;&nbsp;Add Another Position</a>
                                        </div>
                                    </div>
                                    <div class="row ml-2 collapse" id="position">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="name">Job Title</label>
                                                    <input type="text" class="form-control" v-model="job1.title" placeholder="E.g: Retail Sales Associate">
                                                    <span v-if="v$.job1.title.$error" class="text-danger font-weight-bold"> {{ v$.job1.title.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="email">Employer</label>
                                                    <input type="text" class="form-control" v-model="job1.employer" placeholder="E.g: H&M">
                                                    <span v-if="v$.job1.employer.$error" class="text-danger font-weight-bold"> {{ v$.job1.employer.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="name">Start Date</label>
                                                    <input type="date" class="form-control" v-model="job1.sdate" >
                                                    <span v-if="v$.job1.sdate.$error" class="text-danger font-weight-bold"> {{ v$.job1.sdate.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="email">End Date</label>
                                                    <input type="date" class="form-control" v-model="job1.edate" >
                                                    <span v-if="v$.job1.edate.$error" class="text-danger font-weight-bold"> {{ v$.job1.edate.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 mt-3">
                                                <div class="form-group">
                                                    <label class="label float-left" for="#">Job Description</label>
                                                    <textarea name="message" class="form-control" v-model="job1.desc" cols="30" rows="4" placeholder="Type your achievements and responsibilities here"></textarea>
                                                    <span v-if="v$.job1.desc.$error" class="text-danger font-weight-bold"> {{ v$.job1.desc.$errors[0].$message }} </span>
                                                </div> 
                                            </div>
                                        </div>
                                        <div class="row text-center mt-4">
                                            <div class="col-md-2">
                                                <input type="button" v-on:click="job1_fun" :disabled="job1.isActive" class="save rounded-pill text-white" value="Save"/>
                                            </div>
                                            <div class="col-md-2">
                                                <input type="button" v-if="job1.action" v-on:click="job1_edit" class="edit rounded-pill text-white" value="Edit"/>
                                            </div>
                                            <div class="col-md-2">
                                                <input type="button" v-if="job1.action" v-on:click="job1_delete" class="del rounded-pill text-white" value="Delete"/>
                                            </div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-md-12 mb-4">
                                                <a class="float-left" v-if="job1.next" data-toggle="collapse" href="#position1" aria-expanded="false" aria-controls="position1"><i class="fa fa-link"></i>&nbsp;&nbsp;Add Another Position</a>
                                            </div>
                                        </div>
                                        <div class="row ml-2 collapse" id="position1">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="label float-left" for="name">Job Title</label>
                                                        <input type="text" class="form-control" v-model="job2.title" placeholder="E.g: Retail Sales Associate">
                                                        <span v-if="v$.job2.title.$error" class="text-danger font-weight-bold"> {{ v$.job2.title.$errors[0].$message }} </span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="label float-left" for="email">Employer</label>
                                                        <input type="text" class="form-control" v-model="job2.employer" placeholder="E.g: H&M">
                                                        <span v-if="v$.job2.employer.$error" class="text-danger font-weight-bold"> {{ v$.job2.employer.$errors[0].$message }} </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="label float-left" for="name">Start Date</label>
                                                        <input type="date" class="form-control" v-model="job2.sdate" >
                                                        <span v-if="v$.job2.sdate.$error" class="text-danger font-weight-bold"> {{ v$.job2.sdate.$errors[0].$message }} </span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="label float-left" for="email">End Date</label>
                                                        <input type="date" class="form-control" v-model="job2.edate" >
                                                        <span v-if="v$.job2.edate.$error" class="text-danger font-weight-bold"> {{ v$.job2.edate.$errors[0].$message }} </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 mt-3">
                                                    <div class="form-group">
                                                        <label class="label float-left" for="#">Job Description</label>
                                                        <textarea name="message" class="form-control" v-model="job2.desc" cols="30" rows="4" placeholder="Type your achievements and responsibilities here"></textarea>
                                                        <span v-if="v$.job2.desc.$error" class="text-danger font-weight-bold"> {{ v$.job2.desc.$errors[0].$message }} </span>
                                                    </div> 
                                                </div>
                                            </div>
                                            <div class="row text-center mt-4">
                                                <div class="col-md-2">
                                                    <input type="button" v-on:click="job2_fun" :disabled="job2.isActive" class="save rounded-pill text-white" value="Save"/>
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="button" v-if="job2.action" v-on:click="job2_edit" class="edit rounded-pill text-white" value="Edit"/>
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="button" v-if="job2.action" v-on:click="job2_delete" class="del rounded-pill text-white" value="Delete"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                                <input type="button" name="next" class="next action-button" value="Next Step"/>
                            </fieldset>
                            <!-- Education information form -->
                            <fieldset>
                                <div class="form-card">
                                    <h6 class="fs-title mb-4">Tell us about your education</h6>
                                    <h6 class="mb-5">Include every school, even if you're still there or didn't graduate</h6>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="name">School/College Name</label>
                                                <input type="text" class="form-control" v-model="edu.clg" placeholder="E.g: Oxford School or Oxford Institute">
                                                <span v-if="v$.edu.clg.$error" class="text-danger font-weight-bold"> {{ v$.edu.clg.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">Location</label>
                                                <input type="email" class="form-control" v-model="edu.loc" placeholder="E.g: Pune">
                                                <span v-if="v$.edu.loc.$error" class="text-danger font-weight-bold"> {{ v$.edu.loc.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="name">Degree</label>
                                                <input type="text" class="form-control" v-model="edu.deg" placeholder="E.g: MCA">
                                                <span v-if="v$.edu.deg.$error" class="text-danger font-weight-bold"> {{ v$.edu.deg.$errors[0].$message }} </span>
                                            </div>
                                         </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">Field Of study</label>
                                                <input type="email" class="form-control" v-model="edu.field" placeholder="E.g: Computer Applications">
                                                <span v-if="v$.edu.field.$error" class="text-danger font-weight-bold"> {{ v$.edu.field.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="name">Start Date</label>
                                                <input type="date" class="form-control" v-model="edu.sdate">
                                                <span v-if="v$.edu.sdate.$error" class="text-danger font-weight-bold"> {{ v$.edu.sdate.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">End Date</label>
                                                <input type="date" class="form-control" v-model="edu.edate">
                                                <span v-if="v$.edu.edate.$error" class="text-danger font-weight-bold"> {{ v$.edu.edate.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row text-center mt-4">
                                        <div class="col-md-2">
                                            <input type="button" v-on:click="edu_fun" :disabled="edu.isActive" class="save rounded-pill text-white" value="Save"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="edu.action" v-on:click="edu_edit" class="edit rounded-pill text-white" value="Edit"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="edu.action" v-on:click="edu_delete" class="del rounded-pill text-white" value="Delete"/>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 mb-4">
                                            <a class="float-left" v-if="edu.next" data-toggle="collapse" href="#degree" aria-expanded="false" aria-controls="degree"><i class="fa fa-link"></i>&nbsp;&nbsp;Add Another Degree</a>
                                        </div>
                                    </div>
                                    <div class="row ml-2 collapse" id="degree">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="name">School/College Name</label>
                                                    <input type="text" class="form-control" v-model="edu1.clg" placeholder="E.g: Oxford School or Oxford Institute">
                                                    <span v-if="v$.edu1.clg.$error" class="text-danger font-weight-bold"> {{ v$.edu1.clg.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="email">Location</label>
                                                    <input type="email" class="form-control" v-model="edu1.loc" placeholder="E.g: Pune">
                                                    <span v-if="v$.edu1.loc.$error" class="text-danger font-weight-bold"> {{ v$.edu1.loc.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="name">Degree</label>
                                                    <input type="text" class="form-control" v-model="edu1.deg" placeholder="E.g: MCA">
                                                    <span v-if="v$.edu1.deg.$error" class="text-danger font-weight-bold"> {{ v$.edu1.deg.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="email">Field Of study</label>
                                                    <input type="email" class="form-control" v-model="edu1.field" placeholder="E.g: Computer Applications">
                                                    <span v-if="v$.edu1.field.$error" class="text-danger font-weight-bold"> {{ v$.edu1.field.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="name">Start Date</label>
                                                    <input type="date" class="form-control" v-model="edu1.sdate">
                                                    <span v-if="v$.edu1.sdate.$error" class="text-danger font-weight-bold"> {{ v$.edu1.sdate.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="email">End Date</label>
                                                    <input type="date" class="form-control" v-model="edu1.edate">
                                                    <span v-if="v$.edu1.edate.$error" class="text-danger font-weight-bold"> {{ v$.edu1.edate.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row text-center mt-4">
                                            <div class="col-md-2">
                                                <input type="button" v-on:click="edu1_fun" :disabled="edu1.isActive" class="save rounded-pill text-white" value="Save"/>
                                            </div>
                                            <div class="col-md-2">
                                                <input type="button" v-if="edu1.action" v-on:click="edu1_edit" class="edit rounded-pill text-white" value="Edit"/>
                                            </div>
                                            <div class="col-md-2">
                                                <input type="button" v-if="edu1.action" v-on:click="edu1_delete" class="del rounded-pill text-white" value="Delete"/>
                                            </div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-md-12 mb-4">
                                                <a class="float-left" v-if="edu1.next" data-toggle="collapse" href="#degree1" aria-expanded="false" aria-controls="degree1"><i class="fa fa-link"></i>&nbsp;&nbsp;Add Another Degree</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                                <input type="button" name="next" class="next action-button" value="Next Step"/>
                            </fieldset>
                            <!-- Skills information form -->
                            <fieldset>
                                <div class="form-card">
                                    <h6 class="fs-title mb-4">What skills would you like to highlight?</h6>
                                    <h6 class="mb-5">Employers scan skills for relevant keywords</h6>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="name">Skill</label>
                                                <input type="text" class="form-control" v-model="skill.name" placeholder="E.g: Project Management">
                                                <span v-if="v$.skill.name.$error" class="text-danger font-weight-bold"> {{ v$.skill.name.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">Level</label>
                                                <select v-model="skill.level" class="form-select mt-4 sel" aria-label="Default select example">
                                                    <option value="" selected disabled hidden>Select Level</option>
                                                    <option value="Beginner" selected>Beginner</option>
                                                    <option value="Moderate">Moderate</option>
                                                    <option value="Expert">Expert</option>
                                                </select>
                                                <span v-if="v$.skill.level.$error" class="text-danger font-weight-bold"> {{ v$.skill.level.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row text-center mt-4">
                                        <div class="col-md-2">
                                            <input type="button" v-on:click="skill_fun" :disabled="skill.isActive" class="save rounded-pill text-white" value="Save"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="skill.action" v-on:click="skill_edit" class="edit rounded-pill text-white" value="Edit"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="skill.action" v-on:click="skill_delete" class="del rounded-pill text-white" value="Delete"/>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 mb-4">
                                            <a class="float-left" v-if="skill.next" data-toggle="collapse" href="#skills" aria-expanded="false" aria-controls="skills"><i class="fa fa-link"></i>&nbsp;&nbsp;Add Another Skill</a>
                                        </div>
                                    </div>
                                    <div class="row ml-2 collapse" id="skills">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="name">Skill</label>
                                                    <input type="text" class="form-control" v-model="skill1.name" placeholder="E.g: Project Management">
                                                    <span v-if="v$.skill1.name.$error" class="text-danger font-weight-bold"> {{ v$.skill1.name.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="email">Level</label>
                                                    <select v-model="skill1.level" class="form-select mt-4 sel" aria-label="Default select example">
                                                        <option value="" selected disabled hidden>Select Level</option>
                                                        <option value="Beginner" selected>Beginner</option>
                                                        <option value="Moderate">Moderate</option>
                                                        <option value="Expert">Expert</option>
                                                    </select>
                                                    <span v-if="v$.skill1.level.$error" class="text-danger font-weight-bold"> {{ v$.skill1.level.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row text-center mt-4">
                                            <div class="col-md-2">
                                                <input type="button" v-on:click="skill1_fun" :disabled="skill1.isActive" class="save rounded-pill text-white" value="Save"/>
                                            </div>
                                            <div class="col-md-2">
                                                <input type="button" v-if="skill1.action" v-on:click="skill1_edit" class="edit rounded-pill text-white" value="Edit"/>
                                            </div>
                                            <div class="col-md-2">
                                                <input type="button" v-if="skill1.action" v-on:click="skill1_delete" class="del rounded-pill text-white" value="Delete"/>
                                            </div>
                                        </div>
                                        <div class="row mt-4">
                                            <div class="col-md-12 mb-4">
                                                <a class="float-left" v-if="skill1.next" data-toggle="collapse" href="#skill1" aria-expanded="false" aria-controls="skill1"><i class="fa fa-link"></i>&nbsp;&nbsp;Add Another Skill</a>
                                            </div>
                                        </div>
                                        <div class="row ml-2 collapse" id="skill1">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="label float-left" for="name">Skill</label>
                                                        <input type="text" class="form-control" v-model="skill2.name" placeholder="E.g: Project Management">
                                                        <span v-if="v$.skill2.name.$error" class="text-danger font-weight-bold"> {{ v$.skill2.name.$errors[0].$message }} </span>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label class="label float-left" for="email">Level</label>
                                                        <select v-model="skill2.level" class="form-select mt-4 sel" aria-label="Default select example">
                                                            <option value="" selected disabled hidden>Select Level</option>
                                                            <option value="Beginner" selected>Beginner</option>
                                                            <option value="Moderate">Moderate</option>
                                                            <option value="Expert">Expert</option>
                                                        </select>
                                                        <span v-if="v$.skill2.level.$error" class="text-danger font-weight-bold"> {{ v$.skill2.level.$errors[0].$message }} </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row text-center mt-4">
                                                <div class="col-md-2">
                                                    <input type="button" v-on:click="skill2_fun" :disabled="skill2.isActive" class="save rounded-pill text-white" value="Save"/>
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="button" v-if="skill2.action" v-on:click="skill2_edit" class="edit rounded-pill text-white" value="Edit"/>
                                                </div>
                                                <div class="col-md-2">
                                                    <input type="button" v-if="skill2.action" v-on:click="skill2_delete" class="del rounded-pill text-white" value="Delete"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                                <input type="button" name="next" class="next action-button" value="Next Step"/>
                            </fieldset>
                            <!-- Languages form -->
                            <fieldset>
                                <div class="form-card">
                                    <h6 class="fs-title mb-4">What languages would you like to highlight?</h6>
                                    <h6 class="mb-5">Recruiters often look for language skills because they show your ability to communicate</h6>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="name">Language</label>
                                                <input type="text" class="form-control" v-model="lang.name" placeholder="E.g: English">
                                                <span v-if="v$.lang.name.$error" class="text-danger font-weight-bold"> {{ v$.lang.name.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">Level</label>
                                                <select v-model="lang.level" class="form-select mt-4 sel" aria-label="Default select example">
                                                    <option value="" selected disabled hidden>Select Level</option>
                                                    <option value="Beginner" selected>Beginner</option>
                                                    <option value="Moderate">Moderate</option>
                                                    <option value="Expert">Expert</option>
                                                </select>
                                                <span v-if="v$.lang.level.$error" class="text-danger font-weight-bold"> {{ v$.lang.level.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row text-center mt-4">
                                        <div class="col-md-2">
                                            <input type="button" v-on:click="lang_fun" :disabled="lang.isActive" class="save rounded-pill text-white" value="Save"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="lang.action" v-on:click="lang_edit" class="edit rounded-pill text-white" value="Edit"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="lang.action" v-on:click="lang_delete" class="del rounded-pill text-white" value="Delete"/>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 mb-4">
                                            <a class="float-left" v-if="lang.next" data-toggle="collapse" href="#langs" aria-expanded="false" aria-controls="langs"><i class="fa fa-link"></i>&nbsp;&nbsp;Add Another Language</a>
                                        </div>
                                    </div>
                                    <div class="row ml-2 collapse" id="langs">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="name">Language</label>
                                                    <input type="text" class="form-control" v-model="lang1.name" placeholder="E.g: Project English">
                                                    <span v-if="v$.lang1.name.$error" class="text-danger font-weight-bold"> {{ v$.lang1.name.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="email">Level</label>
                                                    <select v-model="lang1.level" class="form-select mt-4 sel" aria-label="Default select example">
                                                        <option value="" selected disabled hidden>Select Level</option>
                                                        <option value="Beginner" selected>Beginner</option>
                                                        <option value="Moderate">Moderate</option>
                                                        <option value="Expert">Expert</option>
                                                    </select>
                                                    <span v-if="v$.lang1.level.$error" class="text-danger font-weight-bold"> {{ v$.lang1.level.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row text-center mt-4">
                                            <div class="col-md-2">
                                                <input type="button" v-on:click="lang1_fun" :disabled="lang1.isActive" class="save rounded-pill text-white" value="Save"/>
                                            </div>
                                            <div class="col-md-2">
                                                <input type="button" v-if="lang1.action" v-on:click="lang1_edit" class="edit rounded-pill text-white" value="Edit"/>
                                            </div>
                                            <div class="col-md-2">
                                                <input type="button" v-if="lang1.action" v-on:click="lang1_delete" class="del rounded-pill text-white" value="Delete"/>
                                            </div>
                                            <br>
                                        </div>
                                    </div>
                                    <h6 class="fs-title mb-4">Let's get to know you on a more personal and cultural level</h6>
                                    <h6 class="mb-5">You can also use them to describe specific skills that are necessary for a position</h6>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="name">Interest</label>
                                                <input type="text" class="form-control" v-model="rest.name" placeholder="E.g: Coding">
                                                <span v-if="v$.rest.name.$error" class="text-danger font-weight-bold"> {{ v$.rest.name.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="label float-left" for="email">Level</label>
                                                <select v-model="rest.level" class="form-select mt-4 sel" aria-label="Default select example">
                                                    <option value="" selected disabled hidden>Select Level</option>
                                                    <option value="Beginner" selected>Beginner</option>
                                                    <option value="Moderate">Moderate</option>
                                                    <option value="Expert">Expert</option>
                                                </select>
                                                <span v-if="v$.rest.level.$error" class="text-danger font-weight-bold"> {{ v$.rest.level.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row text-center mt-4">
                                        <div class="col-md-2">
                                            <input type="button" v-on:click="rest_fun" :disabled="rest.isActive" class="save rounded-pill text-white" value="Save"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="rest.action" v-on:click="rest_edit" class="edit rounded-pill text-white" value="Edit"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="rest.action" v-on:click="rest_delete" class="del rounded-pill text-white" value="Delete"/>
                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                        <div class="col-md-12 mb-4">
                                            <a class="float-left" v-if="rest.next" data-toggle="collapse" href="#rest" aria-expanded="false" aria-controls="rest"><i class="fa fa-link"></i>&nbsp;&nbsp;Add Another Interest</a>
                                        </div>
                                    </div>
                                    <div class="row ml-2 collapse" id="rest">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="name">Interest</label>
                                                    <input type="text" class="form-control" v-model="rest1.name" placeholder="E.g: Coding">
                                                    <span v-if="v$.rest1.name.$error" class="text-danger font-weight-bold"> {{ v$.rest1.name.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="label float-left" for="email">Level</label>
                                                    <select v-model="rest1.level" class="form-select mt-4 sel" aria-label="Default select example">
                                                        <option value="" selected disabled hidden>Select Level</option>
                                                        <option value="Beginner" selected>Beginner</option>
                                                        <option value="Moderate">Moderate</option>
                                                        <option value="Expert">Expert</option>
                                                    </select>
                                                    <span v-if="v$.rest1.level.$error" class="text-danger font-weight-bold"> {{ v$.rest1.level.$errors[0].$message }} </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row text-center mt-4">
                                            <div class="col-md-2">
                                                <input type="button" v-on:click="rest1_fun" :disabled="rest1.isActive" class="save rounded-pill text-white" value="Save"/>
                                            </div>
                                            <div class="col-md-2">
                                                <input type="button" v-if="rest1.action" v-on:click="rest1_edit" class="edit rounded-pill text-white" value="Edit"/>
                                            </div>
                                            <div class="col-md-2">
                                                <input type="button" v-if="rest1.action" v-on:click="rest1_delete" class="del rounded-pill text-white" value="Delete"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                                <input type="button" name="next" class="next action-button" value="Next Step"/>
                            </fieldset>
                            <!-- Objective for job role -->
                            <fieldset>
                                <div class="form-card">
                                    <h6 class="fs-title mb-4">Finally, let’s work on your summary</h6>
                                    <h6 class="mb-5">Your summary shows employers you’re right for their job</h6>
                                    <div class="row">
                                        <div class="col-md-12 mt-3">
                                            <div class="form-group">
                                                <label class="label float-left" for="#">Job Summary</label>
                                                <textarea class="form-control" v-model="sum.desc" cols="30" rows="4" style="height:100%;" placeholder="Write yor summary here"></textarea>
                                                <span v-if="v$.sum.desc.$error" class="text-danger font-weight-bold"> {{ v$.sum.desc.$errors[0].$message }} </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row text-center mt-4">
                                        <div class="col-md-2">
                                            <input type="button" v-on:click="sum_fun" :disabled="sum.isActive" class="save rounded-pill text-white" value="Save"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="sum.action" v-on:click="sum_edit" class="edit rounded-pill text-white" value="Edit"/>
                                        </div>
                                        <div class="col-md-2">
                                            <input type="button" v-if="sum.action" v-on:click="sum_delete" class="del rounded-pill text-white" value="Delete"/>
                                        </div>
                                    </div>
                                </div>
                                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                                <input type="button" name="make_payment" class="next action-button" value="Confirm"/>
                            </fieldset>
                            <!-- Complition of data -->
                            <fieldset>
                                <div class="form-card">
                                    <h2 class="fs-title text-center">Success !</h2>
                                    <br><br>
                                    <div class="row justify-content-center">
                                        <div class="col-3">
                                            <img src="https://img.icons8.com/color/96/000000/ok--v2.png" class="fit-image">
                                        </div>
                                    </div>
                                    <br><br>
                                    <div class="row justify-content-center">
                                        <div class="col-7 text-center">
                                            <h5>You Have Successfully Edit Your Resume </h5>
                                        </div>
                                    </div>
                                    <div class="row justify-content-center mt-4">
                                        <div class="col-md-3">
                                            <input type="button" v-on:click="show" class="btn btn-success rounded-pill text-white bg-success" value="Show Resume"/>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<FooterPage/>
</template>
<script>
import $ from 'jquery';
import axios from 'axios';
import HeaderPage from './HeaderPage.vue';
import FooterPage from './FooterPage.vue';
import useValidate from '@vuelidate/core';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { required, email,minLength,numeric,maxLength} from '@vuelidate/validators';

export default{
    name: "ResumeInput",
    data() {
        return {
            v$: useValidate(),
            personal:{
                name: "",
                prof: "", // Profession
                phn: "",
                email: "",
                city: "",
                cnty: "", // Country
                pin: "",
                isActive: false,
                soc: false,
                action: false,
                show: true
            },
            social:{
                web:"",
                link:"",
                soc: false,
                isActive:false,
                action: false
            },
            social1:{
                web:"",
                link:"",
                soc: false,
                isActive:false,
                action: false
            },
            social2:{
                web:"",
                link:"",
                soc: false,
                isActive:false,
                action: false
            },
            job:{
                title: "",
                employer: "",
                desc: "",
                sdate: "", // Start Date
                edate: "", // End Date
                isActive: false,
                action: false,
                next: false
            },
            job1:{
                title: "",
                employer: "",
                desc: "",
                sdate: "",
                edate: "",
                isActive: false,
                action: false,
                next: false
            },
            job2:{
                title: "",
                employer: "",
                desc: "",
                sdate: "",
                edate: "",
                isActive: false,
                action: false,
                next: false
            },
            edu:{
                clg: "",
                loc: "", // Location
                deg: "", // Degree
                field: "",
                sdate:"",
                edate: "",
                isActive: false,
                action: false,
                next: false
            },
            edu1:{
                clg: "",
                loc: "",
                deg: "",
                field: "",
                sdate:"",
                edate: "",
                isActive: false,
                action: false,
                next: false
            },
            skill:{
                name:"",
                level:"",
                next: false,
                isActive:false,
                action: false
            },
            skill1:{
                name:"",
                level:"",
                next: false,
                isActive:false,
                action: false
            },
            skill2:{
                name:"",
                level:"",
                next: false,
                isActive:false,
                action: false
            },
            lang:{
                name:"",
                level:"",
                next: false,
                isActive:false,
                action: false
            },
            lang1:{
                name:"",
                level:"",
                next: false,
                isActive:false,
                action: false
            },
            rest:{
                name:"",
                level:"",
                next: false,
                isActive:false,
                action: false
            },
            rest1:{
                name:"",
                level:"",
                next: false,
                isActive:false,
                action: false
            },
            sum:{
                sum:"", // Summary
                isActive:false,
                action: false
            }
        };
    },
    validations() {
        return {
            personal:{
                name: { required},
                prof: { required},
                phn: { required, numeric,minLength: minLength(10), maxLength: maxLength(10) },
                email: { required, email },
                city: { required},
                cnty: { required},
                pin: { required,numeric,minLength: minLength(6), maxLength: maxLength(6)},
            },
            social:{
                link:{ required},
                web:{required}
            },
            social1:{
                link:{ required},
                web:{required}
            },
            social2:{
                link:{ required},
                web:{required}
            },
            job:{
                title: { required},
                employer: { required},
                desc: { required},
                sdate: { required },
                edate: { required }
            },
            job1:{
                title: { required},
                employer: { required},
                desc: { required},
                sdate: { required },
                edate: { required }
            },
            job2:{
                title: { required},
                employer: { required},
                desc: { required},
                sdate: { required },
                edate: { required }
            },
            edu:{
                clg: { required},
                loc: { required},
                deg: { required},
                field: { required},
                sdate: { required },
                edate: { required }
            },
            edu1:{
                clg: { required},
                loc: { required},
                deg: { required},
                field: { required},
                sdate: { required },
                edate: { required }
            },
            skill:{
                name:{ required},
                level:{required}
            },
            skill1:{
                name:{ required},
                level:{required}
            },
            skill2:{
                name:{ required},
                level:{required}
            },
            lang:{
                name:{ required},
                level:{required}
            },
            lang1:{
                name:{ required},
                level:{required}
            },
            rest:{
                name:{ required},
                level:{required}
            },
            rest1:{
                name:{ required},
                level:{required}
            },
            sum:{
                desc:{ required}
            }
        }
    },
    methods: {
        show()
        {
            this.$router.push({name: 'ShowResume'});
        },
        personal_val()
        {
            // It first calls $touch() on each fields which likely updates their validation status.

            this.v$.personal.name.$touch();this.v$.personal.prof.$touch();this.v$.personal.phn.$touch();this.v$.personal.email.$touch();this.v$.personal.city.$touch();this.v$.personal.cnty.$touch();this.v$.personal.pin.$touch(); // touch is a property on each Vuelidate object/property that allows us to individually validate a value
            
            // It checks if there are any validation errors by checking the $error property of each field
            
            if (!this.v$.personal.name.$error && !this.v$.personal.prof.$error && !this.v$.personal.phn.$error && !this.v$.personal.email.$error && !this.v$.personal.city.$error && !this.v$.personal.cnty.$error && !this.v$.personal.pin.$error)
            {
                return true;
            }
            else
            {
                return false;
            }
        },
        
        // Adds personal information to the server and stores the generated ID in the browser's local storage
        
        async personal_fun() {
            let valid = this.personal_val(); // It calls the this.personal_val() method to validate the data fields of the this.personal object.
            if (valid)
            {
                let resume = localStorage.getItem("resume"); // retrieves the value of the "resume" key from the browser's local storage and assigns it to the resume variable.
                let r = JSON.parse(resume);
                let result = await axios.post("http://localhost:3000/personal/add", // sends an HTTP POST request to add the personal information to the server
                {
                    name: this.personal.name,
                    profession: this.personal.prof,
                    phone: this.personal.phn,
                    email: this.personal.email,
                    city: this.personal.city,
                    country: this.personal.cnty,
                    pincode: this.personal.pin,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                if(result.status==201)
                 {
                      localStorage.setItem("personal",JSON.stringify(result.data.generatedMaps[0].id)); // stores the generated id of the personal information to the local storage
                      this.personal.isActive = true;
                      this.personal.soc=true;
                      this.personal.action = true;
                      this.personal.show = true;
                }
            }
        },
        async personal_edit() {
            let valid = this.personal_val();
            if (valid)
            {
                let id = localStorage.getItem("personal");
                let resume = localStorage.getItem("resume");
                let r = JSON.parse(resume);
                console.log(r);
                let result = await axios.put("http://localhost:3000/personal/"+id, // sends an HTTP PUT request to update the personal information to the server
                {
                     name: this.personal.name,
                     profession: this.personal.prof,
                     phone: this.personal.phn,
                     email: this.personal.email,
                     city: this.personal.city,
                     country: this.personal.cnty,
                     pincode: this.personal.pin,
                     resume: r
                 }).catch(error => {
                     this.errorMessage = error.message;
                     console.error("There was an error!", error);
                  });
                 if(result.status==200)
                 {
                    const $toast = useToast(); // Use toast for displaying success message
                    $toast.success('Updated Successfully!!!!', {
                                        position: 'top'
                                    });
                 }
            }
        },
        async personal_delete()
        {
            let id = localStorage.getItem("personal");
            let result = await axios.delete("http://localhost:3000/personal/"+id); // sends an HTTP DELETE request to delete the personal information to the server
            if(result.status==200)
            {
                this.personal.name = "";
                this.personal.prof= "";
                this.personal.phn= "";
                this.personal.email= "";
                this.personal.city= "";
                this.personal.cnty= "";
                this.personal.pin= "";
                this.personal.isActive = false;
                this.personal.soc = false;
                this.personal.action = false;
                this.personal.show = false;
                localStorage.removeItem("personal"); // Delete id of personal information from local storage              
            }
        },
        async social_fun()
        {
            this.v$.social.link.$touch();this.v$.social.web.$touch();
            if (!this.v$.social.link.$error && !this.v$.social.link.$error)
            {
                let result = await this.social_save(this.social.web,this.social.link);
                if(result)
                {
                    this.social.isActive =true;
                    this.social.soc = true;
                    this.social.action = true;
                    localStorage.setItem("social",JSON.stringify(result));
                }
            }
        },
        async social1_fun()
        {
            this.v$.social1.link.$touch();this.v$.social1.web.$touch();
            if (!this.v$.social1.link.$error && !this.v$.social1.link.$error)
            {
                let result = await this.social_save(this.social1.web,this.social1.link);
                if(result)
                {
                    this.social1.isActive =true;
                    this.social1.soc = true;
                    this.social1.action = true;
                    localStorage.setItem("social1",JSON.stringify(result));
                }
            }
        },
        async social2_fun()
        {
            this.v$.social2.link.$touch();this.v$.social2.web.$touch();
            if (!this.v$.social2.link.$error && !this.v$.social2.link.$error)
            {
                let result = await this.social_save(this.social2.web,this.social2.link);
                if(result)
                {
                    this.social2.isActive =true;
                    this.social2.soc = true;
                    this.social2.action = true;
                    localStorage.setItem("social2",JSON.stringify(result));
                }
            }
        },
        async social_save(web,link)
        {
            let per = localStorage.getItem("personal");
            let p = JSON.parse(per);
            let result = await axios.post("http://localhost:3000/social/add", {
                    soc_web: web,
                    soc_link: link,
                    personal: p
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                if(result.status==201)
                {
                    let r = result.data.generatedMaps[0].id;
                    return r;
                }
        },
        social_edit()
        {
            this.v$.social.link.$touch();this.v$.social.web.$touch();
            if (!this.v$.social.link.$error && !this.v$.social.link.$error)
            {
                let id = localStorage.getItem("social");
                this.social_update(this.social.web,this.social.link,id);
            }
        },
        social1_edit()
        {
            this.v$.social1.link.$touch();this.v$.social1.web.$touch();
            if (!this.v$.social1.link.$error && !this.v$.social1.link.$error)
            {
                let id = localStorage.getItem("social1");
                this.social_update(this.social1.web,this.social1.link,id);
            }
        },
        social2_edit()
        {
            this.v$.social2.link.$touch();this.v$.social2.web.$touch();
            if (!this.v$.social2.link.$error && !this.v$.social2.link.$error)
            {
                let id = localStorage.getItem("social2");
                this.social_update(this.social2.web,this.social2.link,id);
            }
        },
        async social_update(web,link,id)
        {
            let per = localStorage.getItem("personal");
            let p = JSON.parse(per);
            let result = await axios.put("http://localhost:3000/social/"+id, {
                    soc_web: web,
                    soc_link: link,
                    personal: p
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                if(result.status==200)
                 {
                    const $toast = useToast();
                    $toast.success('Updated Successfully!!!!', {
                                        position: 'top'
                                    });
                 }
        },
        async social_delete()
        {
            let id = localStorage.getItem("social");
            let result = await axios.delete("http://localhost:3000/social/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.social.web = "";
                this.social.link= "";
                this.social.isActive = false;
                this.social.action = false;
                localStorage.removeItem("social");              
            }
        },
        async social1_delete()
        {
            let id = localStorage.getItem("social1");
            let result = await axios.delete("http://localhost:3000/social/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.social1.web = "";
                this.social1.link= "";
                this.social1.isActive = false;
                this.social1.action = false;
                localStorage.removeItem("social1");              
            }
        },
        async social2_delete()
        {
            let id = localStorage.getItem("social2");
            let result = await axios.delete("http://localhost:3000/social/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.social2.web = "";
                this.social2.link= "";
                this.social2.isActive = false;
                this.social2.action = false;
                localStorage.removeItem("social2");              
            }
        },
        async job_fun()
        {
            this.v$.job.title.$touch();this.v$.job.employer.$touch();this.v$.job.sdate.$touch();this.v$.job.edate.$touch();this.v$.job.desc.$touch();
            if (!this.v$.job.title.$error && !this.v$.job.employer.$error && !this.v$.job.sdate.$error && !this.v$.job.edate.$error && !this.v$.job.desc.$error)
            {
                let result = await this.job_save(this.job.title,this.job.employer,this.job.sdate,this.job.edate,this.job.desc);
                if(result)
                {
                    this.job.isActive =true;
                    this.job.next = true;
                    this.job.action = true;
                    localStorage.setItem("job",JSON.stringify(result));
                }
            }
        },
        async job1_fun()
        {
            this.v$.job1.title.$touch();this.v$.job1.employer.$touch();this.v$.job1.sdate.$touch();this.v$.job1.edate.$touch();this.v$.job1.desc.$touch();
            if (!this.v$.job1.title.$error && !this.v$.job1.employer.$error && !this.v$.job1.sdate.$error && !this.v$.job1.edate.$error && !this.v$.job1.desc.$error)
            {
                let result = await this.job_save(this.job1.title,this.job1.employer,this.job1.sdate,this.job1.edate,this.job1.desc);
                if(result)
                {
                    this.job1.isActive =true;
                    this.job1.next = true;
                    this.job1.action = true;
                    localStorage.setItem("job1",JSON.stringify(result));
                }
            }
        },
        async job2_fun()
        {
            this.v$.job2.title.$touch();this.v$.job2.employer.$touch();this.v$.job2.sdate.$touch();this.v$.job2.edate.$touch();this.v$.job2.desc.$touch();
            if (!this.v$.job2.title.$error && !this.v$.job2.employer.$error && !this.v$.job2.sdate.$error && !this.v$.job2.edate.$error && !this.v$.job2.desc.$error)
            {
                let result = await this.job_save(this.job2.title,this.job2.employer,this.job2.sdate,this.job2.edate,this.job2.desc);
                if(result)
                {
                    this.job2.isActive =true;
                    this.job2.next = true;
                    this.job2.action = true;
                    localStorage.setItem("job2",JSON.stringify(result));
                }
            }
        },
        async job_save(tt,empl,sd,ed,dsc)
        {
            let resume = localStorage.getItem("resume");
            let r = JSON.parse(resume);
            let result = await axios.post("http://localhost:3000/job/add", {
                    job_title: tt,
                    company: empl,
                    sdate: sd,
                    edate: ed,
                    desc: dsc,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                if(result.status==201)
                {
                    let r = result.data.generatedMaps[0].id;
                    return r;
                }
        },
        job_edit()
        {
            this.v$.job.title.$touch();this.v$.job.employer.$touch();this.v$.job.sdate.$touch();this.v$.job.edate.$touch();this.v$.job.desc.$touch();
            if (!this.v$.job.title.$error && !this.v$.job.employer.$error && !this.v$.job.sdate.$error && !this.v$.job.edate.$error && !this.v$.job.desc.$error)
            {
                let id = localStorage.getItem("job");
                this.job_update(this.job.title,this.job.employer,this.job.sdate,this.job.edate,this.job.desc,id);
            }
        },
        job1_edit()
        {
            this.v$.job1.title.$touch();this.v$.job1.employer.$touch();this.v$.job1.sdate.$touch();this.v$.job1.edate.$touch();this.v$.job1.desc.$touch();
            if (!this.v$.job1.title.$error && !this.v$.job1.employer.$error && !this.v$.job1.sdate.$error && !this.v$.job1.edate.$error && !this.v$.job1.desc.$error)
            {
                let id = localStorage.getItem("job1");
                this.job_update(this.job1.title,this.job1.employer,this.job1.sdate,this.job1.edate,this.job1.desc,id);
            }
        },
        job2_edit()
        {
            this.v$.job2.title.$touch();this.v$.job2.employer.$touch();this.v$.job2.sdate.$touch();this.v$.job2.edate.$touch();this.v$.job2.desc.$touch();
            if (!this.v$.job2.title.$error && !this.v$.job2.employer.$error && !this.v$.job2.sdate.$error && !this.v$.job2.edate.$error && !this.v$.job2.desc.$error)
            {
                let id = localStorage.getItem("job2");
                this.job_update(this.job2.title,this.job2.employer,this.job2.sdate,this.job2.edate,this.job2.desc,id);
            }
        },
        async job_update(tt,empl,sd,ed,dsc,id)
        {
            let resume = localStorage.getItem("resume");
            let r = JSON.parse(resume);
            let result = await axios.put("http://localhost:3000/job/"+id, {
                    job_title: tt,
                    company: empl,
                    sdate: sd,
                    edate: ed,
                    desc: dsc,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                console.log(result)
                if(result.status==200)
                 {
                    const $toast = useToast();
                    $toast.success('Updated Successfully!!!!', {
                                        position: 'top'
                                    });
                 }
        },
        async job_delete()
        {
            let id = localStorage.getItem("job");
            let result = await axios.delete("http://localhost:3000/job/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.job.title = "";
                this.job.employer= "";
                this.job.sdate = "";
                this.job.edate= "";
                this.job.desc="";
                this.job.isActive =false;
                this.job.action = false;
                localStorage.removeItem("job");             
            }
        },
        async job1_delete()
        {
            let id = localStorage.getItem("job1");
            let result = await axios.delete("http://localhost:3000/job/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.job1.title = "";
                this.job1.employer= "";
                this.job1.sdate = "";
                this.job1.edate= "";
                this.job1.desc="";
                this.job1.isActive =false;
                this.job1.action = false;
                localStorage.removeItem("job1");              
            }
        },
        async job2_delete()
        {
            let id = localStorage.getItem("job2");
            let result = await axios.delete("http://localhost:3000/job/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.job2.title = "";
                this.job2.employer= "";
                this.job2.sdate = "";
                this.job2.edate= "";
                this.job2.desc="";
                this.job2.isActive =false;
                this.job2.action = false;
                localStorage.removeItem("job2");             
            }
        },
        async edu_fun()
        {
            this.v$.edu.clg.$touch();this.v$.edu.loc.$touch();this.v$.edu.deg.$touch();this.v$.edu.field.$touch();this.v$.edu.sdate.$touch();this.v$.edu.edate.$touch();
            if (!this.v$.edu.clg.$error && !this.v$.edu.loc.$error && !this.v$.edu.deg.$error && !this.v$.edu.field.$error && !this.v$.edu.sdate.$error && !this.v$.edu.edate.$error)
            {
                let result = await this.edu_save(this.edu.clg,this.edu.loc,this.edu.deg,this.edu.field,this.edu.sdate,this.edu.edate);
                if(result)
                {
                    this.edu.isActive =true;
                    this.edu.next = true;
                    this.edu.action = true;
                    localStorage.setItem("edu",JSON.stringify(result));
                }
            }
        },
        async edu1_fun()
        {
            this.v$.edu1.clg.$touch();this.v$.edu1.loc.$touch();this.v$.edu1.deg.$touch();this.v$.edu1.field.$touch();this.v$.edu1.sdate.$touch();this.v$.edu1.edate.$touch();
            if (!this.v$.edu1.clg.$error && !this.v$.edu1.loc.$error && !this.v$.edu1.deg.$error && !this.v$.edu1.field.$error && !this.v$.edu1.sdate.$error && !this.v$.edu1.edate.$error)
            {
                let result = await this.edu_save(this.edu1.clg,this.edu1.loc,this.edu1.deg,this.edu1.field,this.edu1.sdate,this.edu1.edate);
                if(result)
                {
                    this.edu1.isActive =true;
                    this.edu1.next = true;
                    this.edu1.action = true;
                    localStorage.setItem("edu1",JSON.stringify(result));
                }
            }
        },
        async edu_save(clg,loc,deg,field,sd,ed)
        {
            let resume = localStorage.getItem("resume");
            let r = JSON.parse(resume);
            let result = await axios.post("http://localhost:3000/edu/add", {
                    clg_name: clg,
                    location: loc,
                    degree: deg,
                    field: field,
                    sdate: sd,
                    edate: ed,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                if(result.status==201)
                {
                    let r = result.data.generatedMaps[0].id;
                    return r;
                }
        },
        edu_edit()
        {
            this.v$.edu.clg.$touch();this.v$.edu.loc.$touch();this.v$.edu.deg.$touch();this.v$.edu.field.$touch();this.v$.edu.sdate.$touch();this.v$.edu.edate.$touch();
            if (!this.v$.edu.clg.$error && !this.v$.edu.loc.$error && !this.v$.edu.deg.$error && !this.v$.edu.field.$error && !this.v$.edu.sdate.$error && !this.v$.edu.edate.$error)
            { 
                let id = localStorage.getItem("edu");
                this.edu_update(this.edu.clg,this.edu.loc,this.edu.deg,this.edu.field,this.edu.sdate,this.edu.edate,id);
            }
        },
        edu1_edit()
        {
            this.v$.edu1.clg.$touch();this.v$.edu1.loc.$touch();this.v$.edu1.deg.$touch();this.v$.edu1.field.$touch();this.v$.edu1.sdate.$touch();this.v$.edu1.edate.$touch();
            if (!this.v$.edu1.clg.$error && !this.v$.edu1.loc.$error && !this.v$.edu1.deg.$error && !this.v$.edu1.field.$error && !this.v$.edu1.sdate.$error && !this.v$.edu1.edate.$error)
            {
                let id = localStorage.getItem("edu1");
                this.edu_update(this.edu1.clg,this.edu1.loc,this.edu1.deg,this.edu1.field,this.edu1.sdate,this.edu1.edate,id);
            }
        },
        async edu_update(clg,loc,deg,field,sd,ed,id)
        {
            let resume = localStorage.getItem("resume");
            let r = JSON.parse(resume);
            let result = await axios.put("http://localhost:3000/edu/"+id, {
                    clg_name: clg,
                    location: loc,
                    degree: deg,
                    field: field,
                    sdate: sd,
                    edate: ed,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                console.log(result)
                if(result.status==200)
                 {
                    const $toast = useToast();
                    $toast.success('Updated Successfully!!!!', {
                                        position: 'top'
                                    });
                 }
        },
        async edu_delete()
        {
            let id = localStorage.getItem("edu");
            let result = await axios.delete("http://localhost:3000/edu/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.edu.clg = "";
                this.edu.loc= "";
                this.edu.deg= "";
                this.edu.field= "";
                this.edu.sdate = "";
                this.edu.edate= "";
                this.edu.isActive =false;
                this.edu.action = false; 
                localStorage.removeItem("edu");             
            }
        },
        async edu1_delete()
        {
            let id = localStorage.getItem("edu1");
            let result = await axios.delete("http://localhost:3000/edu/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.edu1.clg = "";
                this.edu1.loc= "";
                this.edu1.deg= "";
                this.edu1.field= "";
                this.edu1.sdate = "";
                this.edu1.edate= "";
                this.edu1.isActive =false;
                this.edu1.action = false; 
                localStorage.removeItem("edu1");             
            }
        },
        async skill_fun()
        {
            this.v$.skill.name.$touch();this.v$.skill.level.$touch();
            if (!this.v$.skill.name.$error && !this.v$.skill.level.$error)
            {
                let result = await this.skill_save(this.skill.name,this.skill.level);
                if(result)
                {
                    this.skill.isActive =true;
                    this.skill.next = true;
                    this.skill.action = true;
                    localStorage.setItem("skill",JSON.stringify(result));
                }
            }
        },
        async skill1_fun()
        {
            this.v$.skill1.name.$touch();this.v$.skill1.level.$touch();
            if (!this.v$.skill1.name.$error && !this.v$.skill1.level.$error)
            {
                let result = await this.skill_save(this.skill1.name,this.skill1.level);
                if(result)
                {
                    this.skill1.isActive =true;
                    this.skill1.next = true;
                    this.skill1.action = true;
                    localStorage.setItem("skill1",JSON.stringify(result));
                }
            }
        },
        async skill2_fun()
        {
            this.v$.skill2.name.$touch();this.v$.skill2.level.$touch();
            if (!this.v$.skill2.name.$error && !this.v$.skill2.level.$error)
            {
                let result = await this.skill_save(this.skill2.name,this.skill2.level);
                if(result)
                {
                    this.skill2.isActive =true;
                    this.skill2.next = true;
                    this.skill2.action = true;
                    localStorage.setItem("skill2",JSON.stringify(result));
                }
            }
        },
        async skill_save(name,level)
        {
            let resume = localStorage.getItem("resume");
            let r = JSON.parse(resume);
            console.log(r);
            let result = await axios.post("http://localhost:3000/skill/add", {
                    name: name,
                    level: level,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                if(result.status==201)
                {
                    let r = result.data.generatedMaps[0].id;
                    return r;
                }
        },
        skill_edit()
        {
            this.v$.skill.name.$touch();this.v$.skill.level.$touch();
            if (!this.v$.skill.name.$error && !this.v$.skill.level.$error)
            {
                let id = localStorage.getItem("skill");
                this.skill_update(this.skill.name,this.skill.level,id);
            }
        },
        skill1_edit()
        {
            this.v$.skill1.name.$touch();this.v$.skill1.level.$touch();
            if (!this.v$.skill1.name.$error && !this.v$.skill1.level.$error)
            {
                let id = localStorage.getItem("skill1");
                this.skill_update(this.skill1.name,this.skill1.level,id);
            }
        },
        skill2_edit()
        {
            this.v$.skill2.name.$touch();this.v$.skill2.level.$touch();
            if (!this.v$.skill2.name.$error && !this.v$.skill2.level.$error)
            {
                let id = localStorage.getItem("skill2");
                this.skill_update(this.skill2.name,this.skill2.level,id);
            }
        },
        async skill_update(name,level,id)
        {
            let resume = localStorage.getItem("resume");
            let r = JSON.parse(resume);
            let result = await axios.put("http://localhost:3000/skill/"+id, {
                    name: name,
                    level: level,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                console.log(result)
                if(result.status==200)
                 {
                    const $toast = useToast();
                    $toast.success('Updated Successfully!!!!', {
                                        position: 'top'
                                    });
                 }
        },
        async skill_delete()
        {
            let id = localStorage.getItem("skill");
            let result = await axios.delete("http://localhost:3000/skill/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.skill.name = "";
                this.skill.level= "";
                this.skill.isActive =false;
                this.skill.action = false; 
                localStorage.removeItem("skill");             
            }
        },
        async skill1_delete()
        {
            let id = localStorage.getItem("skill1");
            let result = await axios.delete("http://localhost:3000/skill/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.skill1.name = "";
                this.skill1.level= "";
                this.skill1.isActive =false;
                this.skill1.action = false; 
                localStorage.removeItem("skill1");             
            }
        },
        async skill2_delete()
        {
            let id = localStorage.getItem("skill2");
            let result = await axios.delete("http://localhost:3000/skill/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.skill2.name = "";
                this.skill2.level= "";
                this.skill2.isActive =false;
                this.skill2.action = false; 
                localStorage.removeItem("skill2");             
            }
        },
        async lang_fun()
        {
            this.v$.lang.name.$touch();this.v$.lang.level.$touch();
            if (!this.v$.lang.name.$error && !this.v$.lang.level.$error)
            {
                let result = await this.lang_save(this.lang.name,this.lang.level);
                if(result)
                {
                    this.lang.isActive =true;
                    this.lang.next = true;
                    this.lang.action = true;
                    localStorage.setItem("lang",JSON.stringify(result));
                }
            }
        },
        async lang1_fun()
        {
            this.v$.lang1.name.$touch();this.v$.lang1.level.$touch();
            if (!this.v$.lang1.name.$error && !this.v$.lang1.level.$error)
            {
                let result = await this.lang_save(this.lang1.name,this.lang1.level);
                if(result)
                {
                    this.lang1.isActive =true;
                    this.lang1.next = true;
                    this.lang1.action = true;
                    localStorage.setItem("lang1",JSON.stringify(result));
                }
            }
        },
        async lang_save(name,level)
        {
            let resume = localStorage.getItem("resume");
            let r = JSON.parse(resume);
            console.log(r);
            let result = await axios.post("http://localhost:3000/language/add", {
                    name: name,
                    level: level,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                if(result.status==201)
                {
                    let r = result.data.generatedMaps[0].id;
                    return r;
                }
        },
        lang_edit()
        {
            this.v$.lang.name.$touch();this.v$.lang.level.$touch();
            if (!this.v$.lang.name.$error && !this.v$.lang.level.$error)
            {
                let id = localStorage.getItem("lang");
                this.lang_update(this.lang.name,this.lang.level,id);
            }
        },
        lang1_edit()
        {
            this.v$.lang1.name.$touch();this.v$.lang1.level.$touch();
            if (!this.v$.lang1.name.$error && !this.v$.lang1.level.$error)
            {
                let id = localStorage.getItem("lang1");
                this.lang_update(this.lang1.name,this.lang1.level,id);
            }
        },
        async lang_update(name,level,id)
        {
            let resume = localStorage.getItem("resume");
            let r = JSON.parse(resume);
            let result = await axios.put("http://localhost:3000/language/"+id, {
                    name: name,
                    level: level,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                console.log(result)
                if(result.status==200)
                 {
                    const $toast = useToast();
                    $toast.success('Updated Successfully!!!!', {
                                        position: 'top'
                                    });
                 }
        },
        async lang_delete()
        {
            let id = localStorage.getItem("lang");
            let result = await axios.delete("http://localhost:3000/language/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.lang.name = "";
                this.lang.level= "";
                this.lang.isActive =false;
                this.lang.action = false; 
                localStorage.removeItem("lang");             
            }
        },
        async lang1_delete()
        {
            let id = localStorage.getItem("lang1");
            let result = await axios.delete("http://localhost:3000/language/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.lang1.name = "";
                this.lang1.level= "";
                this.lang1.isActive =false;
                this.lang1.action = false; 
                localStorage.removeItem("lang1");             
            }
        },
        async rest_fun()
        {
            this.v$.rest.name.$touch();this.v$.rest.level.$touch();
            if (!this.v$.rest.name.$error && !this.v$.rest.level.$error)
            {
                let result = await this.rest_save(this.rest.name,this.rest.level);
                if(result)
                {
                    this.rest.isActive =true;
                    this.rest.next = true;
                    this.rest.action = true;
                    localStorage.setItem("rest",JSON.stringify(result));
                }
            }
        },
        async rest1_fun()
        {
            this.v$.rest1.name.$touch();this.v$.rest1.level.$touch();
            if (!this.v$.rest1.name.$error && !this.v$.rest1.level.$error)
            {
                let result = await this.rest_save(this.rest1.name,this.rest1.level);
                if(result)
                {
                    this.rest1.isActive =true;
                    this.rest1.next = true;
                    this.rest1.action = true;
                    localStorage.setItem("rest1",JSON.stringify(result));
                }
            }
        },
        async rest_save(name,level)
        {
            let resume = localStorage.getItem("resume");
            let r = JSON.parse(resume);
            console.log(r);
            let result = await axios.post("http://localhost:3000/interest/add", {
                    name: name,
                    level: level,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                if(result.status==201)
                {
                    let r = result.data.generatedMaps[0].id;
                    return r;
                }
        },
        rest_edit()
        {
            this.v$.rest.name.$touch();this.v$.rest.level.$touch();
            if (!this.v$.rest.name.$error && !this.v$.rest.level.$error)
            {
                let id = localStorage.getItem("rest");
                this.rest_update(this.rest.name,this.rest.level,id);
            }
        },
        rest1_edit()
        {
            this.v$.rest1.name.$touch();this.v$.rest1.level.$touch();
            if (!this.v$.rest1.name.$error && !this.v$.rest1.level.$error)
            {
                let id = localStorage.getItem("rest1");
                this.rest_update(this.rest1.name,this.rest1.level,id);
            }
        },
        async rest_update(name,level,id)
        {
            let resume = localStorage.getItem("resume");
            let r = JSON.parse(resume);
            let result = await axios.put("http://localhost:3000/interest/"+id, {
                    name: name,
                    level: level,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                console.log(result)
                if(result.status==200)
                 {
                    const $toast = useToast();
                    $toast.success('Updated Successfully!!!!', {
                                        position: 'top'
                                    });
                 }
        },
        async rest_delete()
        {
            let id = localStorage.getItem("rest");
            let result = await axios.delete("http://localhost:3000/interest/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.rest.name = "";
                this.rest.level= "";
                this.rest.isActive =false;
                this.rest.action = false; 
                localStorage.removeItem("rest");             
            }
        },
        async rest1_delete()
        {
            let id = localStorage.getItem("rest1");
            let result = await axios.delete("http://localhost:3000/interest/"+id);
            if(result.status==200)
            {
                console.log(result);
                this.rest1.name = "";
                this.rest1.level= "";
                this.rest1.isActive =false;
                this.rest1.action = false; 
                localStorage.removeItem("rest1");             
            }
        },
        async sum_fun() {
            this.v$.sum.desc.$touch();
            if (!this.v$.sum.desc.$error)
            {
                let resume = localStorage.getItem("resume");
                let r = JSON.parse(resume);
                let result = await axios.post("http://localhost:3000/summary/add", {
                    desc: this.sum.desc,
                    resume: r
                }).catch(error => {
                    this.errorMessage = error.message;
                    console.error("There was an error!", error);
                });
                if(result.status==201)
                 {
                      localStorage.setItem("sum",JSON.stringify(result.data.generatedMaps[0].id));
                      this.sum.isActive = true;
                      this.sum.action = true;
                }
            }
        },
        async sum_edit() {
            this.v$.sum.desc.$touch();
            if (!this.v$.sum.desc.$error)
            {
                let id = localStorage.getItem("sum");
                let resume = localStorage.getItem("resume");
                let r = JSON.parse(resume);
                console.log(r);
                let result = await axios.put("http://localhost:3000/summary/"+id, {
                     desc: this.sum.desc,
                     resume: r
                 }).catch(error => {
                     this.errorMessage = error.message;
                     console.error("There was an error!", error);
                  });
                 if(result.status==200)
                 {
                    const $toast = useToast();
                    $toast.success('Updated Successfully!!!!', {
                                        position: 'top'
                                    });
                 }
            }
        },
        async sum_delete()
        {
            let id = localStorage.getItem("sum");
            let result = await axios.delete("http://localhost:3000/summary/"+id);
            if(result.status==200)
            {
                this.sum.desc = "";
                this.sum.isActive = false;
                this.sum.action = false;
                localStorage.removeItem("sum");              
            }
        }
    },
    async mounted()
    {
        const reloaded = localStorage.getItem('reloadinput');
        if (reloaded !== 'true') {
            localStorage.setItem('reloadinput', 'true');
            location.reload();
        }
    },
    components: { HeaderPage, FooterPage }
}
$(document).ready(function(){
    
var current_fs, next_fs, previous_fs; //fieldsets
var opacity;

$(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            next_fs.css({'opacity': opacity});
        }, 
        duration: 600
    });
});

$(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();

    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
        step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;

            current_fs.css({
                'display': 'none',
                'position': 'relative'
            });
            previous_fs.css({'opacity': opacity});
        }, 
        duration: 600
    });
});

$('.radio-group .radio').click(function(){
    $(this).parent().find('.radio').removeClass('selected');
    $(this).addClass('selected');
});

$(".submit").click(function(){
    return false;
})
    
});
</script>
<style scoped>
@import '../assets/css/input.css';
</style>
