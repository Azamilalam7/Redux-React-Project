import { Link } from 'react-router-dom'
import Booklist from '../components/Booklist'


const Home = () => {
  return (
    <div className="text-center mt-0 min-h-screen">
      {/* <h2 className="text-3xl text-blue-600 font-semibold ">Popular Book</h2> */}
      

    <Booklist/>

    </div>
  )
}

export default Home
