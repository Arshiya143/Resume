import HomePage from './components/HomePage.vue'
import ResumeInput from './components/ResumeInput.vue'
import ResumeFormat from './components/ResumeFormat.vue'
import CredentialPage from './components/CredentialPage.vue'
import ShowResume from './components/ShowResume.vue'
import ResumePrint from './components/ResumePrint.vue'
import ResumePrint2 from './components/ResumePrint2.vue'

import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'Home',
        component: HomePage,
        path: '/'
    },
    {
        name:'CredentialPage',
        component: CredentialPage,
        path: '/register'
    },
    {
        name:'ResumeFormat',
        component: ResumeFormat,
        path: '/ResumeFormat'
    },
    {
        name:'ResumeInput',
        component: ResumeInput,
        path: '/ResumeInput'
    },
    {
        name:'ShowResume',
        component: ShowResume,
        path: '/ShowResume'
    },
    {
        name:'ResumePrint',
        component: ResumePrint,
        path: '/resume'
    },
    {
        name:'ResumePrint2',
        component: ResumePrint2,
        path: '/resume2'
    }
]

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router