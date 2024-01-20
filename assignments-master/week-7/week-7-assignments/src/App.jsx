import "./App.css"
import Profile from "./pages/Profile"
import {Routes , Route} from "react-router-dom"
import ColorChanger from "./pages/ColorChanger"
import Github from "./pages/Github"
import ParaGenerator from "./pages/ParaGenerator"

function App() {


  return (
    <>
    <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/color" element={<ColorChanger />} />
        <Route path="/github" element={<Github />} />
        <Route path="/para" element={<ParaGenerator />} />
    </Routes>
    </>
  )
}

export default App
