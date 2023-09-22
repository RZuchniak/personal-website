import './Project.css'

export type ProjectData = {
    title: string,
    description: string
}
export default function Project(project: ProjectData) {
    return (
        <>
        <div className='card-box'>
        <h2 className='Project-title'>
        {project.title}
        </h2>
        <p className='description'>
        {project.description}
        </p>
        </div>
        </>
  )
}
  