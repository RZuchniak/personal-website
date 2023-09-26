import './Projects.css'
import Navbar from '../../components/Navbar/Navbar'
import Project from '../../components/Project/Project'
import type { ProjectData } from '../../components/Project/Project'

function Projects() {

    const projects: ProjectData[] = [
        {
            title: 'Personal Website',
            description: 'My first attempt at creating a personal website. Built with react and vite, with the intent of being improved and expanded down the road',
            link: 'https://github.com/RZuchniak/personal-website'
        },
        {
            title: 'Mosaic',
            description: 'Based off of r/Place, Mosaic allows users to place individual tiles on a board to slowly create art. Built with react for the front-end, with express and postgress for the back-end',
            link: 'https://github.com/RZuchniak/mosaic_front-end'
        },
        {
            title: 'A* Maze Visualizer',
            description: 'Using the A* algorithm this program visualizes the shortest path possible to solve a maze. It was built in Python and uses Pygame to display graphics.',
            link: 'https://github.com/RZuchniak/maze-visualizer'
        }
    ]

    
    return(
        <>
        <a className='layout'>
         <Navbar/>
         <div >
         <ul className='project-container'>
            {
                projects.map((project) => {

                   return <Project title={project.title} description={project.description} link={project.link} />
                })
            }
         </ul>
        
         </div>
      </a>
        </>
    )
}

export default Projects