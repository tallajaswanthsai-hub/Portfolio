import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faRepeat} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faGraduationCap);


const About = () => {
  return (
   <div id="about" className=' ml-5  w-[90vw]   flex p-10 rounded-3xl '>
        <div className='w-60vw  flex flex-col '>
      <h3>About</h3>
      <p>Hi, I’m Jaswanth Sai a Frontend Developer who enjoys building clean, responsive, and user-friendly web applications. I work mainly with HTML, CSS, JavaScript, and React. I love experimenting with UI components, fixing bugs, and making websites look and feel smooth. I’m constantly learning new technologies and improving my skills to build real-world, impactful projects.</p>

<div className=' flex gap-3 '>
    <div className=' border-2  flex flex-col   p-3 border-[#C0C0C0] rounded-3xl' ><FontAwesomeIcon icon={['fas', 'graduation-cap']} style={{ color: '#183153' }} /><h4>Education</h4>
    <p>B.tech CSE (Data science) completed</p></div>
    <div className=' border-2  flex flex-col   p-3 border-[#C0C0C0] rounded-3xl' ><FontAwesomeIcon icon={faRepeat} /><h4>Hobbies</h4>
    <p>learning new things from youtube,<br></br>browsing etc</p></div>
</div>
</div>
<div className='hidden  md:flex md:w-600 md:h-100 xl:ml-0  lg:w-500 lg:ml-10'>
<img  className='' src="https://static.vecteezy.com/system/resources/thumbnails/004/491/062/small_2x/programmer-working-concept-for-web-banner-man-work-with-code-and-programming-at-computer-creates-software-modern-person-scene-illustration-in-flat-cartoon-design-with-people-characters-vector.jpg"></img>
</div>
    </div>
    
  )
}

export default About
