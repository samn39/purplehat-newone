import React from 'react'
import Footer from '../components/footer/Footer'
import Form from '../components/form/Form'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'

const Getinvolved = () => {
  return (
    <div>
  <link rel="icon" href="https://cdn.glitch.global/c6f964c0-1500-4649-8e07-5d6a0ae4f4b1/Screen_Shot_2022-03-26_at_4.35.49_PM-removebg-preview.png?v=1648327000189" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  <link rel="icon" href="https://cdn.glitch.global/c6f964c0-1500-4649-8e07-5d6a0ae4f4b1/Screen_Shot_2022-03-26_at_4.35.49_PM-removebg-preview.png?v=1648327000189" />
  <title> Get Involved | Purple Hat Project </title>
  <link rel="stylesheet" href="./getin.css" />
  

  <Header/>
  <Navbar/>
  <h2 className='thank'>
    Main Resources 
  </h2>
  <p id="resourcesHeader">
    Here are some important websites to check out!
  </p>
  <div className="card">
    <h2 className="links">        <a href="https://www.preventchildabusenj.org/what-we-do/programs/period-of-purple-crying/ "> Prevent Child Abuse In NJ Website </a> </h2>
    <h5 className="linkDescription">"Prevent Child Abuse - New Jersey builds a bright future for children by promoting Great Childhoods, positive parenting, and healthy reinforcements"</h5>
    <div>
      <img src="https://cdn.glitch.global/c6f964c0-1500-4649-8e07-5d6a0ae4f4b1/photo-1540479859555-17af45c78602.webp?v=1648351034328"  />
    </div>
    <p className="linkDescription2">Visit the website linked above for more information!</p>
  </div>  
  
  <div className="card">
    <h2 className="links">        <a href="https://www.clickforbabies.org/"> Click For Babies </a> </h2>
    <h5 className="linkDescription"> "Hats and booties are distributed to hospitals, maternity centers, etc. who deliver the Period of PURPLE Crying program to families of new babies."</h5>
    <div>
      <img  src="https://cdn.glitch.global/c6f964c0-1500-4649-8e07-5d6a0ae4f4b1/Screen%20Shot%202022-03-26%20at%2011.22.37%20PM.png?v=1648351366506"  />
    </div>
    <p className="linkDescription2">We will donate the purple hats to this organization in order to be distributed to hospitals!</p>
  </div>  
  
  <div className="card">
    <h2 className="links">        <a href="https://www.dontshake.org/new-jersey"> National Center on Shaken Baby Syndrome: Don't Shake New Jersey </a> </h2>
    <h5 className="linkDescription"> "We currently reach approximately 30,000 families annually with PURPLE program! Our partners include: Robert Wood Johnson University Hospital- New Brunswick, Saint Joseph’s Regional Medical Center, and more!"</h5>
    <div>
      <img src="https://cdn.glitch.global/c6f964c0-1500-4649-8e07-5d6a0ae4f4b1/photo-1583086762675-5a88bcc72548.webp?v=1648351037821"  />
    </div>
    <p className="linkDescription2">Explore this website to learn more about Shaken Baby Syndrome and the different hospitals that PCANJ reaches!</p>
  </div>  
 
  <div className="card">
    <h2 className="links">        <a href="https://honorscollege.rutgers.edu/features/mira-yin-sarah-velez-why-we-give "> Rutgers Honors College Website </a> </h2>
    <h5 className="linkDescription"> "Mira Yin (‘23, SOE/HC) and Sarah Velez (‘23, SEBS/HC) are Honors College students with a shared passion for service work. They co-founded a group called the Purple Hats Project, which works to hand-craft purple hats for the organization Prevent Child Abuse New Jersey."</h5>
    <div>
      <img src="https://cdn.glitch.global/c6f964c0-1500-4649-8e07-5d6a0ae4f4b1/Screen%20Shot%202022-03-26%20at%2011.15.39%20PM.png?v=1648350947599"   />
    </div>
    <p className="linkDescription2">Take a look at this Feature page on the Rutgers Honors College Website: "Mira Yin and Sarah Velez: Why We Give"</p>
  </div>  
  <br /> <br /> 

  <div className="video">
    <iframe width={1000} height={600} src="https://www.youtube.com/embed/bJXr7L1j6DM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
    </iframe>
  </div>
  
  <Form/>
  <Footer/>
</div>
  )
}

export default Getinvolved