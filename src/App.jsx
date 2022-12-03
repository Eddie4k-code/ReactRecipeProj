import './App.css'
import Search from "./components/Search"
import Modal from "./components/Modal"
import Meals from "./components/Meals"
import { useGlobalContext } from './context'

export default function App() {

  const { showModal } = useGlobalContext()




  return (

    <main>
      <Search />
      <Meals />
      {/*showModal && <Modal/> */}
      <Modal />
    </main>
  )
}
