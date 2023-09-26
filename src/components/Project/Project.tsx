import './Project.css'

export type ProjectData = {
    title: string,
    description: string,
    link: string,
    background: string
}
export default function Project(project: ProjectData) {
    return (
        <a className='card-box' href={project.link}>
        <figure id='background-container'>
            <img id='background' style={{'background-image': project.background} as React.CSSProperties}></img>
        </figure>    
        <h2 id='project-title'>
        {project.title}
        </h2>
        <p id='description'>
        {project.description}
        </p>
        </a>
  )
}
  