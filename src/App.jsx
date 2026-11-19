import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import CustomerExperience from './pages/CustomerExperience.jsx'
import ClinicDashboard from './pages/ClinicDashboard.jsx'
import { mockLeads } from './data/mockLeads.js'
export default function App(){const [view,setView]=useState('customer');const [leads,setLeads]=useState(mockLeads)
const addEnquiry=form=>{const lead={id:String(Date.now()),name:form.name.trim(),treatment:form.treatment,clinic:form.clinic.split(',')[0],fullClinic:form.clinic, time:'Just now',aiStatus:'Callback Pending',bookingStatus:'Pending',language:form.language,preferredTime:form.callback,mobile:form.mobile.startsWith('+91')?form.mobile:`+91 ${form.mobile}`,summary:'A new enquiry was received through the HappySmile callback form. The AI assistant is queued to make the initial callback and can hand over to a clinic representative whenever requested.',timeline:[['Just now','Enquiry received'],['Just now','Added to clinic queue'],['Pending','AI callback pending']],booking:null};setLeads(all=>[lead,...all])}
return <><Navbar view={view} setView={setView}/>{view==='customer'?<CustomerExperience onSubmit={addEnquiry}/>:<ClinicDashboard leads={leads} setLeads={setLeads}/>}</>}
