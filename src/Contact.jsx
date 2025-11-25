import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPhone);


import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(faEnvelope);



const contact = () => {
  return (
    <div id="contacts">
     <h2 className="flex justify-center mb-5">contacts</h2>
<div className=' flex flex-col items-center'>
   <p id="contact" className=' p-2 border-2  border-[#C0C0C0] rounded'> <FontAwesomeIcon icon="phone" /> Phone:<a href="tel:91900000000">91+900000000</a></p> 
   <p id='contact' className=' p-2 border-2  border-[#C0C0C0] rounded'><FontAwesomeIcon icon="envelope" />  Gmail:<a href="mailto:tallajaswanthsai@gmail.com">Tallajaswanthsai@gmail.com</a></p> 
</div>


    </div>
  )
}

export default contact
