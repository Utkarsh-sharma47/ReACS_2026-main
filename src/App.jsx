import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import Schedule from "./pages/Schedule"
import Submission from "./pages/Submission"
import CFP from "./pages/CFP"
import { Layout1 } from "./layouts"
import Committee from "./pages/Committee"
import AdvisoryCommittee from "./pages/AdvisoryCommittee"
import About from "./pages/About"
import ScrollToTop from "./components/ScrollToTop"
import CRS from "./pages/CRS"
import Speakers from "./pages/Speakers"
import Attende from "./pages/Attende"
import Oversight from "./pages/Oversight"
import Keynote from "./pages/Keynote"
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/cfp" element={<CFP />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/advisory-committee" element={<AdvisoryCommittee />} />
        <Route path="/about" element={<About />} />
        <Route path="/crs" element={<CRS />} />
        {/* <Route path="/speakers" element={<Speakers />} /> */}
        <Route path="/attende" element={<Attende/>}/>
        <Route path="//oversight-committee" element={<Oversight/>}/>
        <Route path="/keynote" element={<Keynote/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
