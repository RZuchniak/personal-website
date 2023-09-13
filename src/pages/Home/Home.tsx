import Navbar from '../../components/Navbar/Navbar'
import Description from '../../components/Description/Description'
import Links from '../../components/Links/Links'

function Home() {
  return (
    <>
      <div className='layout'>
      <Navbar/>
      <Description/>
      <Links/>
      </div>
    </>
  )
}

export default Home
