import Navbar from '../../components/Navbar/Navbar'
import Description from '../../components/Description/Description'
import Links from '../../components/Links/Links'

function Home() {
  return (
    <>
      <div className='wrap' style={{backgroundImage: 'url(https://wallpaper-house.com/data/out/9/wallpaper2you_363894.jpg)'}}>
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
