import './Projects.css'
import Navbar from '../../components/Navbar/Navbar'
import Project from '../../components/Project/Project'

function Projects() {
    return(
        <>
        <div className='layout'>
         <Navbar/>
         <div className='project-container'>
         <Project/>
         <Project/>
         <Project/>
         <Project/>
         <Project/>
         </div>
      </div>
        </>
    )
}

export default Projects