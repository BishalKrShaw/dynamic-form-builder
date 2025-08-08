import { Outlet } from "react-router-dom"

const App = () => {
  return (
    <>
      <h1>Dynamic Form Builder</h1>
      <Outlet/>
    </>
  )
}

export default App