import './Projects.css'
import Navbar from '../../components/Navbar/Navbar'
import Project from '../../components/Project/Project'
import type { ProjectData } from '../../components/Project/Project'

function Projects() {

    const projects: ProjectData[] = [
        {
            title: 'first',
            description: 'first'
        },
        {
            title: 'second',
            description: 'first'
        }
    ]

    
    return(
        <>
        <div className='layout'>
         <Navbar/>
         <div className='project-container'>
         <ul>
            {
                projects.map((project) => {

                   return <Project title={project.title} description={project.description} />
                })
            }
         </ul>
        
         </div>
      </div>
        </>
    )
}

export default Projects