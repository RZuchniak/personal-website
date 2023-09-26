import './Project.css'

export type ProjectData = {
    title: string,
    description: string,
    link: string
}
export default function Project(project: ProjectData) {
    return (
        <>
        <a className='card-box' href={project.link}>
        <h2 className='Project-title'>
        {project.title}
        </h2>
        <p className='description'>
        {project.description}
        </p>
        </a>
        </>
  )
}
  