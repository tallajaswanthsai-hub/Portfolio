import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faHtml5, faCss3, faJs, faReact, faBootstrap, faPython, faCss3Alt, faGitAlt, faSquareGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, faHtml5, faCss3, faJs, faReact, faBootstrap, faPython, faCss3Alt, faGitAlt, faSquareGithub);

const skills = () => {
  return (
    <div id='skill' className='mb-20 '>
      <h2 className='flex justify-center'>Skills</h2>
    <div className="w-[85vw]  flex  md:flex-row md:p-3 flex-col items-center gap-15 mx-auto justify-center border-2 border-[#C0C0C0] rounded-3xl " >
     
      <div className='flex flex-col gap-3 mt-3 md:w-[30%]   lg:w-[25%]'>
        <h3 className='flex justify-center'>Technical Skills</h3>
      <h5 className=' w-auto border-1 border-black p-3 rounded-2xl flex justify-center items-center '> <FontAwesomeIcon icon={['fab', 'html5']} 
  
  style={{color: "#f55600",}} />
 HTML</h5>
      <h5 className='w-auto border-1 border-black p-3 rounded-2xl  flex justify-center items-center'> 
        <FontAwesomeIcon icon={['fab','css']} style={{color: "#B197FC",}} /> CSS</h5>
      <h5 className='w-auto border-1 border-black p-3 rounded-2xl  flex justify-center items-center'>
        <FontAwesomeIcon icon={['fab', 'js']} style={{color: "#FFD43B",}}  /> JavaScript</h5>
      <h5 className='w-auto border-1 border-black p-3 rounded-2xl  flex justify-center items-center'>
        <FontAwesomeIcon icon={['fab', 'react']} style={{color: "#74C0FC",}}  /> ReactJS</h5></div>
      <div className='flex gap-3  flex-col  lg:pt-0   md:w-[30%]  md:pt-4  lg:w-[25%]'>
        
      <h5 className='w-auto border-1 border-black p-3 rounded-2xl  flex justify-center items-center'>
         <FontAwesomeIcon icon={['fab', 'python']}  style={{color: "#083268",}}  /> Python(Basics)</h5>
      <h5 className='w-auto border-1 border-black p-3 rounded-2xl  flex justify-center items-center'>
        <FontAwesomeIcon icon={['fab', 'bootstrap']}  style={{color: "#B197FC",}} /> Bootstrap</h5>
      <h5 className='w-auto border-1 border-black p-3 rounded-2xl  flex justify-center items-center'>
        <FontAwesomeIcon icon={['fab', 'css3-alt']} /> Tailwind CSS</h5></div>
      
       <div className='flex gap-3  flex-col lg:mt-5 md:w-[30%] md:mr-3 md:mb-35 lg:mb-40   lg:w-[25%]  ' >
        <h3 className='flex justify-center   '>Version control</h3>
        <h5 className='w-auto border-1 border-black p-3 rounded-2xl  flex justify-center items-center'>  <FontAwesomeIcon icon={['fab', 'git-alt']}style={{color: "#ff0000",}} /> Git</h5>
        <h5 className='w-auto border-1 border-black p-3 rounded-2xl  flex justify-center items-center'> <FontAwesomeIcon icon={['fab', 'square-github']} /> Git hub</h5>
        
      </div>
      </div>
      
    </div>
  )
}

export default skills
