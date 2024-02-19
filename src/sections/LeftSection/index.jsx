import Header from '../Header';
import Navber from '../Navber';
import Contact from '../Contact';
const LeftSection = () => {
    return (
        <div className='px-5'>
          <div className='sticky top-14 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[87vh]'>
            <Header />
            <Navber />
            <Contact/>
          </div>
      </div>
    )
}

export default LeftSection;