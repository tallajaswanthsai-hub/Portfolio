

const Projects = () => {
  let projects=[{name:"Netflix Clone",
    p:"I created Netflix clone using HTML,CSS,JS.it recreates the modern Netflix homepage layout with responsive design.",
    img:"https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    link:"https://tallajaswanthsai-hub.github.io/Netflixclone/newnetflix.html"
  },{name:"Youtube Clone",
    p:"Developed  Youtube clone using HTML,CSS,JS.it recreates the video page and homepage layout with clean UI and fully responsive design.",
    img:"https://static.vecteezy.com/system/resources/previews/018/930/572/non_2x/youtube-logo-youtube-icon-transparent-free-png.png",
    link:"https://tallajaswanthsai-hub.github.io/youtube-clone/you.html"
  },{name:"Weather App",
    p:"Built a Weather application using javascript  and a real-time weather API.It fetches live temperature,humidity,wind speedandlocation-based weather Data.",
    img:"https://allthingsdev-production.s3.ap-south-1.amazonaws.com/uploads/project/logo/SAQU2NEO1723182051689.jpeg",
    link:"https://tallajaswanthsai-hub.github.io/weatherAPIproject/project.html"
  }
];

  return (
    <div id="projects" className="mb-[100px]">

      
      <h2 className="flex justify-center mb-5">Projects</h2>
      <div className="flex  flex-col  lg:w-100vw  lg:flex-row  lg:ml-0  gap-2 items-center justify-center p-3 ">
       { projects.map((elem,idx)=>{
          return  <div key={idx} className="flex flex-col w-[90vw] lg:h-130 lg:w-200 gap-2  items-center border-2 border-[#C0C0C0] rounded-3xl w-1/3  p-5 "> <img className="w-[200px] h-[200px]  rounded-2xl overflow-auto   " src={elem.img}></img>
      <h4>{elem.name}</h4>
      <p className=" flex ">{elem.p} </p><button onClick={()=> window.open(elem.link)} className="bg-black text-white p-2  w-[200px] rounded">LINK</button>
      </div>
        })}
      
      
      </div>
      
      
    </div>
  )
}

export default Projects
