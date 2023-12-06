import Todos from "./pages/Todos"
import Footer from "./pages/Footer";
import { useMyContext } from "./Context";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";
const App: React.FC = () => {
  const { data, add, edit, setAdd, setEdit } = useMyContext()

  return (
    <div className="w-[768px] h-screen">
      {
        add || edit
          ?
          <Header2
            add={add}
            setAdd={setAdd}
            setEdit={setEdit}
          />
          :
          <Header1 />
      }
      {
        add ?
          <AddTask />
          :
          edit ?
            <EditTask />
            :
            <Todos
              data={data}
              setEdit={setEdit}
            />
      }
      {
        !(add || edit) ?
          <Footer setAdd={setAdd} />
          :
          null
      }
    </div>
  )
}

interface Props {
  add: boolean;
  setAdd: React.Dispatch<React.SetStateAction<boolean>>,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>
}

const Header2: React.FC<Props> = ({ add, setAdd, setEdit }) => {
  return (
    <header className="w-full h-[100px] bg-purple-500 p-[20px] flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="24" viewBox="0 0 27 24" fill="none" onClick={() => { setAdd(false); setEdit(false) }}>
        <path d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM27 10.5L2 10.5V13.5L27 13.5V10.5Z" fill="white" />
      </svg>
      <h1 className="text-[24px] font-[600] text-[#FFF] ml-[37px] ">{add ? "Add Task" : "Edit Task"}</h1>
    </header>
  )
}


function Header1() {
  return (
    <header className="w-full h-[100px] bg-purple-500 p-[20px] flex justify-between items-center">
      <h1 className="text-[24px] font-[600] text-[#FFF]">TODO APP</h1>
      <img src="/assets/logo.svg" alt="" />
    </header>
  )
}

export default App
