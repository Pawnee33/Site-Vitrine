import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

function Header() {
  const location = useLocation()
  const surAccueil = location.pathname === "/"
  const surBiographie = location.pathname === "/biographie"
  const [menuOuvert, setMenuOuvert] = useState(false)
  const [aspectScrolle, setAspectScrolle] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero")
      const hauteurHero = hero ? hero.offsetHeight : 0
      setAspectScrolle(window.scrollY > hauteurHero - 80)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

    return(
        <header className={`top-0 left-0 w-full fixed py-3 px-6 z-50 transition ${surAccueil && !aspectScrolle ? "bg-transparent" : "bg-nuit"} ${surBiographie ? "bg-nuit lg:bg-transparent" : "bg-nuit"}`}>
          {/* Nom de l'artiste à gauche */}
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <span className="text-4xl font-cursive text-white mt-2 hover:opacity-70">Pauline Defize Martos</span>
            </Link>

            {menuOuvert &&(
              // Lien des pages
              <ul className="flex flex-col lg:flex-row gap-6 text-white text-2xl font-subtitle2 font-light absolute lg:static top-full left-0 w-full lg:w-auto bg-nuit lg:bg-transparent p-6 lg:p-0 items-center max-h-[calc(100vh-80px)] overflow-y-auto lg:max-h-none lg:overflow-visible">
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
