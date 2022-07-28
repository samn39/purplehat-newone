import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import Accordion from '../components/accordion/Accordion'
import Footer from '../components/footer/Footer'
import Form from '../components/form/Form'

const Aboutus = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <h2 className='thank'>Common Questions</h2>
        <Accordion head = "Who are we?" body = "Purple Hats Project works to hand-craft purple hats for the organization Prevent Child Abuse New Jersey. This organization delivers these hats to hospitals where they are handed out to new parents to raise awareness of Shaken Baby Syndrome. For more information visit: " link= "https://honorscollege.rutgers.edu/features/mira-yin-sarah-velez-why-we-give"/>
        <Accordion head = "What is Shaken Baby Syndrome and why is it so important?" body = "“Shaken Baby Syndrome/Abusive Head Trauma (SBS/AHT) is a term used to describe the constellation of signs and symptoms resulting from violent shaking or shaking and impacting of the head of an infant or small child. The American Academy of Pediatrics (AAP) describes SBS as a subset of AHT with injuries having the potential to result in death or permanent neurologic disability.” For more information go to:" link= "https://www.dontshake.org/learn-more"/>
        <Accordion head = "How can you contact us?" body = "You can sign up for our mailing list and GroupMe under the contact info bar below. You can also email us at purplehatproject@gmail.com and DM us on our instagram page: @purplehats.pcanj . We look forward to hearing your thoughts and perspectives abour expanding the Purple Hat Project!"/>
        <Accordion head = "How can you get involved in or donate to the Purple Hat Project?" body = "You can donate any purple hats to our Purple Hat Project center at Rutgers - New Brunswick or donate money directly! We also encourage you to share our instragram stories and posts to help spread awareness. Join our mailing for more opportunities to stay involved!"/>
        <Accordion head = "Which are some other resources to charities and organizations involved in this project?" body = "The main charities involved are Prevent Child Abuse, Click For Babies, and National Center of Shaken Baby Syndrome. We partner with this charities and organizations to facilitate our distribution of purple hats to local hospitals. We also help raise awareness for this important cause and support the work of these charities. To find out more, please visit to our GetInvolved page!"/>
        
        <Form/>
        <Footer/>

    </div>
  )
}

export default Aboutus