import { Component } from "react";
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';

export default class ComponentFotter extends Component
{
    constructor()
    {
        super();
    }
    render()
    {
        return (
        <>
           <div id="foot">
           <div >
           <p><FaEnvelope title="wwwgmail.com" className="icons"/>wwwgmail.com</p>
           <p><FaPhone title="wwwgmail.com" className="icons"/>0125664645</p>
           </div>
           <div className="buttom">
            <button >Contact Us</button>
           </div>
           <div >
           <FaLinkedin title="linkedin.com" className="icons"/>
           <FaFacebook title="facebook.com" className="icons"/>
           <FaTwitter title="twwiter.com" className="icons"/>
           <p>coywrite@2020eg</p>
           </div>
           </div>
        </>
        )
    }
}