import { useState } from "react"
import { Menu, X } from "lucide-react"

function Header() {
  const [menuOuvert, setMenuOuvert] = useState(false)
    return(
        <header className="top-0 left-0 w-full fixed bg-nuit py-3 px-6 z-50">
          <div className="flex justify-between items-center">
            <span className="text-4xl font-cursive text-white mt-2">Pauline Martos</span>

            {menuOuvert &&(
              <ul className="flex gap-6 text-white text-2xl font-yesteryear">
                <li className="hover:scale-110 transition"><a href="#home">Home</a></li>
                <li className="hover:scale-110 transition"><a href="#about">About</a></li>
                <li className="hover:scale-110 transition"><a href="#musiques">Musiques</a></li>
                <li className="hover:scale-110 transition"><a href="#videos">Vidéos</a></li>
                <li className="hover:scale-110 transition"><a href="#concerts">Concerts</a></li>
                <li className="hover:scale-110 transition"><a href="#cours">Cours</a></li>
                <li className="hover:scale-110 transition"><a href="#contact">Contact</a></li>
              </ul>
            )}

            <button
              onClick={() => setMenuOuvert(!menuOuvert)}
              className="hover:scale-115 transition"
            >
              {menuOuvert ? <X color="White" /> : <Menu color="white"/>}
            </button>
          </div>
        </header>
    )
}

export default Header
