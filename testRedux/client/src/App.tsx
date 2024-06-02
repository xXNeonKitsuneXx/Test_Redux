import DisplayLogs from "./DisplayLogs";
import { log, toggle } from "./app/logger/loggerSlice";
import { useAppDispatch } from "./app/store"

function App() {

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(log("Hello, Redux!"));
  }

  const toggleClick = () => {
    dispatch(toggle());
  }



  return (
    <>
    <DisplayLogs />
    <button onClick={handleClick}> Add log</button>
    <button onClick={toggleClick}>Show/Hide</button>
    </>
  )
}

export default App
