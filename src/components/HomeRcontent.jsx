
import MyComponent from "./MyComponent"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone);


import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope);






<FontAwesomeIcon icon={faLinkedin} />

const HomeRcontent = () => {
  return (
    <div  className=" mt-3 ml-8  xl:w-[50vw] h-full flex flex-col justify-center  md:ml-0 xl:ml-20 2xl:ml-0  ">
      <h4>Hello,I'm</h4>
      <h1>Jaswanth sai</h1>
      <MyComponent/>
       <div className="flex mb-2 mt-2 gap-2  " >
      <button type="button" className="btn btn-primary " onClick={()=>window.open("JASWANTHSAI.pdf","_blank")}>Show CV</button>
      
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Contacts
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Contacts</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      
       <div className=' model-body flex flex-col items-center p-3'>
   <p id="contact" className=' p-2 border-2  border-[#C0C0C0] rounded'> <FontAwesomeIcon icon="phone" /> Phone:<a href="tel:91900000000">91+900000000</a></p> 
   <p id='contact' className=' p-2 border-2  border-[#C0C0C0] rounded'><FontAwesomeIcon icon="envelope" />  Gmail:<a href="mailto:tallajaswanthsai@gmail.com">Tallajaswanthsai@gmail.com</a></p> 
</div>
      
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div></div>
      <div>
   

       <a href="https://www.linkedin.com/in/jaswanthsai-talla-8ba556377/" >
       <FontAwesomeIcon icon={faLinkedin}  style={{color: "#0a95ff",}}  className="text-[27px]"/></a>
  <a href="https://github.com/tallajaswanthsai-hub"><FontAwesomeIcon icon={faGithub} className="text-[27px] ml-2" /></a>


      </div>
       </div>
  )
}

export default HomeRcontent
