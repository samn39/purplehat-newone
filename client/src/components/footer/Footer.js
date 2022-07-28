import React from 'react'

const Footer = () => {
  return (
    <div>
            <footer className="footer">
      <div className="links">
        <div className="partners">
          <a href="https://www.dontshake.org/new-jersey ">
            <img src="https://cdn.glitch.global/c6f964c0-1500-4649-8e07-5d6a0ae4f4b1/IMG_0326-removebg-preview.png?v=1648335732988" />
          </a>
          {/*           <a href= */}
          <a href="https://www.clickforbabies.org/ ">     
            <img src="https://cdn.glitch.global/c6f964c0-1500-4649-8e07-5d6a0ae4f4b1/IMG_0328-removebg-preview.png?v=1648335864725" />
          </a>
          <a href="https://www.preventchildabusenj.org/what-we-do/programs/period-of-purple-crying/"> 
            <img src="https://cdn.glitch.global/c6f964c0-1500-4649-8e07-5d6a0ae4f4b1/IMG_0327-removebg-preview.png?v=1648335943763" />
          </a>
        </div>
        <div>
          <a className="footer-icons" href="purplehatproject@gmail.com"><span className="iconify" data-icon="clarity:email-line" style={{color: 'white'}} data-width={40} /> purplehatproject@gmail.com
          </a>
        </div>
        <div>
          <a className="footer-icons" href="https://www.instagram.com/purplehats.pcanj/">
            <span className="iconify" data-icon="fa6-brands:instagram" style={{color: 'white'}} data-width={34} />@purplehats.pcanj</a>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer