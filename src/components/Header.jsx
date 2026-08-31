import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

function Header() {
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
        <header className={`top-0 left-0 w-full fixed py-3 px-6 z-50 transition ${aspectScrolle ? "bg-nuit" : "bg-transparent"}`}>
          {/* Nom de l'artiste à gauche */}
          <div className="flex justify-between items-center">
            <span className="text-4xl font-cursive text-white mt-2">Pauline Defize Martos</span>

            {menuOuvert &&(
              // Lien des pages
              <ul className="flex gap-6 text-white text-2xl font-subtitle font-semiboldbold">
                <li className="hover:scale-110 transition"><a href="#home">ACCUEIL</a></li>
                <li className="hover:scale-110 transition"><a href="#about">BIOGRAPHIE</a></li>
                <li className="hover:scale-110 transition"><a href="#musiques">MUSIQUES</a></li>
                <li className="hover:scale-110 transition"><a href="#videos">VIDÉOS</a></li>
                <li className="hover:scale-110 transition"><a href="#concerts">CONCERTS</a></li>
                <li className="hover:scale-110 transition"><a href="#cours">COURS</a></li>
                <li className="hover:scale-110 transition"><a href="#contact">CONTACT</a></li>
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
