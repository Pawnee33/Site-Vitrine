import Youtube from "../assets/youtube.png"
import Spotify from "../assets/spotify.png"
import Facebook from "../assets/facebook.png"
import Deezer from "../assets/deezer.png"
import Apple from "../assets/musique.png"
import { Link } from "react-router-dom"

function Footer() {
  return(
    <footer className="flex flex-col lg:flex-row justify-between items-center rounded-2xl bg-sky-50 py-12 text-black text-center gap-10 m-8 p-6 pb-32">
      {/* Nom de l'artiste */}
      <p className="text-lg lg:text-4xl font-cursive text-black">Pauline Defize Martos</p>
      {/* Menu de navigation */}
      <div className="hidden lg:block h-28 border-r border-black m-10"></div>
        <ul className="flex flex-col lg:flex-row gap-2 lg:gap-6 items-center text-black text-xs lg:text-xl text-left font-lien font-semibold">
          <li className="hover:scale-110 transition"><Link to="/">ACCUEIL</Link></li>
          <li className="hover:scale-110 transition"><Link to="/biographie">BIOGRAPHIE</Link></li>
          <li className="hover:scale-110 transition"><Link to="/musiques">MUSIQUES</Link></li>
          <li className="hover:scale-110 transition"><Link to="/videos">VIDÉOS</Link></li>
          <li className="hover:scale-110 transition"><Link to="/concerts">CONCERTS</Link></li>
          <li className="hover:scale-110 transition"><Link to="/cours">COURS</Link></li>
          <li className="hover:scale-110 transition"><Link to="/contact">CONTACT</Link></li>
        </ul>

      <div className="hidden lg:block h-28 border-r border-black m-10"></div>
      <div className="flex flex-col gap-10">
        <p className="text-sm lg:text-xl font-lien font-bold">Suivez moi sur :</p>
        {/* Logos des réseaux sociaux et lien des réseaux sociaux */}
        <div className="flex flex-wrap md:flex-row lg:flex-row gap-6">
          <a href="https://www.youtube.com/@paulinedefizemartos" target="_blank" rel="noopener noreferrer">
            <img className="aspect-square h-6 lg:h-12 w-6 lg:w-12 hover:scale-115 transition" src={Youtube}  alt="Logo Youtube" />
          </a>
          <a href="https://www.deezer.com/fr/artist/293158931" target="_blank" rel="noopener noreferrer">
            <img className="aspect-square h-6 lg:h-12 w-6 lg:w-12 hover:scale-115 transition" src={Deezer}  alt="Logo Deezer" />
          </a>
          <a href="https://open.spotify.com/intl-fr/artist/5VccoAj507B6SvIsfc31Ue?si=JhGRPv3USp-MGNw8GiKr8g" target="_blank" rel="noopener noreferrer">
            <img className="aspect-square h-6 lg:h-12 w-6 lg:w-12 hover:scale-115 transition" src={Spotify}  alt="Logo Spotify" />
          </a>
          <a href="https://music.apple.com/fr/artist/pauline-martos/1784295595" target="_blank" rel="noopener noreferrer">
            <img className="aspect-square h-6 lg:h-12 w-6 lg:w-12 hover:scale-115 transition" src={Apple}  alt="Logo Apple musique" />
          </a>
          <a href="https://www.facebook.com/people/Pauline-Defize-Martos/pfbid0Ry5ebSikw3DstWHec33Ku8QFmrX6tyj9GfLimYXV26fa4KR8yS2DJqoZSqY7fknGl/?locale=fr_FR" target="_blank" rel="noopener noreferrer">
            <img className="aspect-square h-6 lg:h-12 w-6 lg:w-12 hover:scale-115 transition" src={Facebook}  alt="Logo Facebook" />
          </a>
        </div>
        <div>
          <p className="font-subtitle text-xs lg:text-sm">&copy; 2026 Pauline Defize Martos</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
