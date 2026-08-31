import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import LecteurAudio from "./components/LecteurAudio"
import Accueil from "./components/pages/Accueil"
import Biographie from "./components/pages/Biographie"
import Concerts from "./components/pages/Concerts"
import Contact from "./components/pages/Contact"
import Cours from "./components/pages/Cours"
import Musiques from "./components/pages/Musiques"
import Video from "./components/pages/Video"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/biographie" element={<Biographie />} />
        <Route path="/concerts" element={<Concerts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cours" element={<Cours />} />
        <Route path="/musiques" element={<Musiques />} />
        <Route path="/videos" element={<Video />} />
      </Routes>
      <LecteurAudio />
    </BrowserRouter>
  )
}

export default App
