import Navbar from '../../components/Navbar/Navbar'
import Description from '../../components/Description/Description'
import Links from '../../components/Links/Links'
import './Home.css';

function Home() {
  return (
    <>
      <div className='wrap' >
        <div className='layout'>
          <Navbar/>
          <Description/>
          <Links/>
        </div>
      </div>
    </>
  );
}

export default Home
