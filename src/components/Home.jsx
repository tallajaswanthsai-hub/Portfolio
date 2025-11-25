
import Homelcontent from "./HomeLcontent"
import HomeRcontent from "./HomeRcontent"



 
const Home = () => {
  return (
    <div className=" xl:h-[70vh] xl:w-[80vw]  mx-auto flex flex-col items-center   p-5 md:flex-row " >
      <Homelcontent/>
     <HomeRcontent/>


      
    </div>
  )
}

export default Home
