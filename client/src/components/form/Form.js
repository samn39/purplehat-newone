import React from 'react'

const Form = () => {
  return (
    <div  className="wrapper">
        <form className="w3-container w3-card-4 forminput" method="POST" action="http://localhost:3001/contact" >
          <h2 className="formCol">Contact Info</h2>
          <p>Sign up for our mailing list and GroupMe to find out about our upcoming events and news.</p>
          <p>      
            <label className="formCol"><b>Name</b></label>
            <input className="w3-input w3-border" name="name" type="text" required/></p>
          <p>      
            <label className="formCol"><b>Email</b></label>
            <input className="w3-input w3-border" name="email" type="text" required/></p>
          <p>     
            <label className="formCol"><b>Phone Number</b></label>
            <input className="w3-input w3-border" name="phone" type="text" required/></p>
          <p>      
            <button className="formColB">Sign Up</button></p>
        </form>
    </div>
  )
}

export default Form