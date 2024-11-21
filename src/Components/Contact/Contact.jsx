import React from 'react'
import { GrLocation } from "react-icons/gr";
import { LuContact } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div id='contact'>
    <section className="contact-sec sec-pad" >
  <div className="container">
    <div className="row">
      <div className="col-md-6">
        <div className="contact-detail">
          <h1 className="section-title">Contact us</h1>

          <ul className="contact-ul">
            <li className='d-flex items-center'><GrLocation style={{marginRight:"2px",color:"blue"}}/> 91, Ram Nagar, Ram Mandir, Delhi</li>

            <li className='d-flex items-center'>
              <LuContact style={{marginRight:"2px",color:"blue"}} />
              <a href="tel:6202669551"><b>6202669551</b></a>,
              
            </li>

            <li className='d-flex items-center'>
             <MdOutlineEmail style={{marginRight:"2px",color:"blue"}}/>
              <a href="mailto:abhishekak753@gmail.com"><b> abhishekak753@gmail.com</b></a>
            </li>
          </ul>

          <span>
            <a href="www.linkedin.com/in/abhishek-kumar-6b0156131" target='_blank' className="fb"><FaLinkedin  style={{background:"blue",color:"white",fontSize:"30px"}}/></a>
            <a href="https://gist.github.com/AbhishekSamrat/9f3d4c6542eb20a019118fd09d44bbc2" className="insta" target='_blank'><FaGithubSquare style={{background:"blue",color:"white",fontSize:"30px"}} /></a>
            <a href="https://api.whatsapp.com/send?phone=916202669551&text=Hello" target='_blank' className="twitter"><FaWhatsappSquare style={{background:"blue",color:"white",fontSize:"30px"}}/></a>
          </span>
        </div>
      </div>

      <div className="col-md-6">
        <form action="#" className="contFrm" method="POST">
          <div className="row">
            <div className="col-sm-6">
              <input type="text" name="name" placeholder="Your Name" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="email" name="email" placeholder="Email Address" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="tel" name="phone" placeholder="Phone Number" className="inptFld" required />
            </div>

            <div className="col-sm-6">
              <input type="text" name="sub" placeholder="Subject" className="inptFld" required />
            </div>

            <div className="col-12">
              <textarea className="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
            </div>

            <div className="col-12" style={{marginBottom:"10px"}}>
              <center><input type="submit" name="submit" value="SUBMIT" className="inptBtn" /></center>
            </div>
          </div>
        </form>
      </div>
    </div>

    

  </div>
</section>
    </div>
  )
}

export default Contact