import './Projects.css'
import Navbar from '../../components/Navbar/Navbar'
import Project from '../../components/Project/Project'
import type { ProjectData } from '../../components/Project/Project'

function Projects() {

    const projects: ProjectData[] = [
        {
            title: 'Personal Website',
            description: 'My first attempt at creating a personal website. Built with react and vite, with the intent of being improved and expanded down the road',
            link: 'https://github.com/RZuchniak/personal-website',
            background: 'url("https://www.forbes.com/advisor/wp-content/uploads/2022/09/Image_-_How_to_design_a_website_.jpeg.jpg")'
        },
        {
            title: 'Mosaic',
            description: 'Based off of r/Place, Mosaic allows users to place individual tiles on a board to slowly create art. Built with react for the front-end, with express and postgress for the back-end',
            link: 'https://github.com/RZuchniak/mosaic_front-end',
            background: 'url("https://i0.wp.com/www.michigandaily.com/wp-content/uploads/2022/04/r_place-copy.jpg?fit=2400%2C1600&ssl=1")'
        },
        {
            title: 'A* Maze Visualizer',
            description: 'Using the A* algorithm this program visualizes the shortest path possible to solve a maze. It was built in Python and uses Pygame to display graphics.',
            link: 'https://github.com/RZuchniak/maze-visualizer',
            background: 'url(./maze.png)'
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

                   return <Project title={project.title} description={project.description} link={project.link} background={project.background}/>
                })
            }
         </ul>
        
         </div>
      </a>
        </>
    )
}

export default Projects