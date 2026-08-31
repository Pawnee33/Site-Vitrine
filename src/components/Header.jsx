import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

function Header() {
  const location = useLocation()
  const surAccueil = location.pathname === "/"
  const [menuOuvert, setMenuOuvert] = useState(false)
  const [aspectScrolle, setAspectScrolle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setAspectScrolle(window.scrollY > window.innerHeight - 80)
    }
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)  // ← le nettoyage
  }, [])

    return(
        <header className={`top-0 left-0 w-full fixed py-3 px-6 z-50 transition ${surAccueil && !aspectScrolle ? "bg-transparent" : "bg-nuit"}`}>
          {/* Nom de l'artiste à gauche */}
          <div className="flex justify-between items-center">
            <span className="text-4xl font-cursive text-white mt-2">Pauline Defize Martos</span>

            {menuOuvert &&(
              // Lien des pages
              <ul className="flex gap-6 text-white text-2xl font-subtitle font-semiboldbold">
                <li className="hover:scale-110 transition"><Link to="/">ACCUEIL</Link></li>
                <li className="hover:scale-110 transition"><Link to="/biographie">BIOGRAPHIE</Link></li>
                <li className="hover:scale-110 transition"><Link to="/musiques">MUSIQUES</Link></li>
                <li className="hover:scale-110 transition"><Link to="/videos">VIDÉOS</Link></li>
                <li className="hover:scale-110 transition"><Link to="/concerts">CONCERTS</Link></li>
                <li className="hover:scale-110 transition"><Link to="/cours">COURS</Link></li>
                <li className="hover:scale-110 transition"><Link to="/contact">CONTACT</Link></li>
              </ul>
            )}

            {/* Menu burger et la croix pour fermer */}
            <button
              onClick={() => setMenuOuvert(!menuOuvert)}
              className="hover:scale-115 transition"
            >
              {menuOuvert ? <X color="white" /> : <Menu color="white"/>}
            </button>
          </div>
        </header>
    )
}

export default Header
