import './Project.css'

export type ProjectData = {
    title: string,
    description: string,
    link: string,
    background: string
}
export default function Project(project: ProjectData) {
    return (
        <a className='card-box' href={project.link} style={{'background-image': project.background} as React.CSSProperties}>
        <h2 className='Project-title'>
        {project.title}
        </h2>
        <p className='description'>
        {project.description}
        </p>
        </a>
  )
}
  