import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
   <nav className="flex    h-15 p-[5] px-10 items-center justify-between bg-blue-400  m-2 font-semibold rounded">
 <h4>Portfolio</h4>
 
 <div className="dropdown flex sm:hidden  ">
  <button className="btn btn-primary " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   <FontAwesomeIcon icon={faBars} className="text-black" />
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#about">About</a></li>
    <li><a className="dropdown-item" href="#skill">Skills</a></li>
    <li><a className="dropdown-item" href="#projects">Projects</a></li>
    <li><a className="dropdown-item" href="#contacts">Contacts</a></li>
  </ul>

 </div>
 <div className=" flex gap-5 hidden sm:flex ">
   <a href="#about"> About</a>
   <a href="#skill"> Skills</a>
   <a href="#projects"> Projects</a>
   <a href="#contacts"> Contacts</a>
 </div>
   </nav>
  )
}

export default Navbar

