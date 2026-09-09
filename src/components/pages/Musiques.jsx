import ensemble from "../../assets/audio/01-ensemble.mp3"
import verite from "../../assets/audio/03-verite.mp3"
import neige_eternelle from "../../assets/audio/Neige-eternelle-4.mp3"
import ombre_lumiere from "../../assets/audio/Ombre-et-Lumiere-MIX03.mp3"
import opus_100 from "../../assets/audio/opus-n100-02.mp3"
import voir_en_soi from "../../assets/audio/Pauline-Martos-02-Voir-en-soi.mp3"
import croire from "../../assets/audio/Projet-Croire-02.mp3"
import horizon from "../../assets/audio/02-HORIZON.mp3"
import pochette_album from "../../assets/images/Pauline_hero.jpg"
import { useState, useEffect } from "react"
import WavesurferPlayer from "@wavesurfer/react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import useOnScreen from "../../hooks/useOnScreen"

function Musiques() {
  const [cardRef, cardVisible] = useOnScreen()
  const [selectionMorceaux, setSelectionMorceaux] = useState(0);
  const [wavesurfer, setWavesurfer] = useState(null);
  const [enLecture, setEnLecture] = useState(false);
  const [doitJouer, setDoitJouer] = useState(false)

  const OmbreetLumiere = {
    image: pochette_album,
    artiste: "Pauline Defize Martos",
    titre: "Ombre et Lumière",
    style: "Musique de film, Méditatif, Instrumental, Chanson",
    morceaux: [
      { titre: "Neige éternelle", fichier: neige_eternelle },
      { titre: "Opus 100", fichier: opus_100 },
      { titre: "Croire", fichier: croire },
      { titre: "Ombre et Lumière", fichier: ombre_lumiere },
      { titre: "Horizon", fichier: horizon },
      { titre: "Voir en soi", fichier: voir_en_soi },
      { titre: "Ensemble", fichier: ensemble },
      { titre: "Vérité", fichier: verite },
    ]
  }

  const gererLecture = (index) => {
    if (index === selectionMorceaux) {
      // même morceau : on bascule play/pause
      wavesurfer &&wavesurfer.playPause()
    } else {
      // autre morceau : on change la sélection
      setDoitJouer(true)
      setSelectionMorceaux(index)
    }
  }

  return (
    <section 
      className="bg-linear-to-b from-fond to-nuit pt-36 pb-36">
      <div className="flex flex-col justify-center items-center m-6">
        <h1 className="font-musique2 text-4xl text-white">Album : <span className="text-amber-400">{OmbreetLumiere.titre}</span></h1>
        <div className={`flex flex-row items-center bg-gray-900 w-max rounded-2xl shadow-amber-900 shadow-lg m-10 gap-6 transition-all duration-700 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-52"}`} ref={cardRef}>
          <img className="aspect-square object-cover rounded-xl max-w-lg" src={OmbreetLumiere.image} alt="Pauline au piano album" />
          <div className="flex flex-col gap-2 p-5">
            <p className="font-musique2 text-xl text-white">Artiste : <span className="text-amber-400">{OmbreetLumiere.artiste}</span></p>
            <p className="font-musique2 text-xl text-white">Titre : <span className="text-amber-400">{OmbreetLumiere.titre}</span></p>
            <p className="font-musique2 text-xl text-white">Style : <span className="text-amber-400">{OmbreetLumiere.style}</span></p>
            {OmbreetLumiere.morceaux.map((morceau, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-2 cursor-pointer select-none"
                onClick={() => gererLecture(index)}
              >
                {selectionMorceaux === index && enLecture
                  ? <Pause className="hover:scale-115 transition"size={20} fill="#f59e0b" color="#f59e0b" />
                  : <Play className="hover:scale-115 transition" size={20} fill="#f59e0b" color="#f59e0b" />}
                <p className="font-musique2 text-xl text-white hover:scale-105 transition">{morceau.titre}</p>
              </div>  
            ))}
            <WavesurferPlayer
                height={60}
                waveColor="#ffffff"
                progressColor="#f59e0b"
                url={OmbreetLumiere.morceaux[selectionMorceaux].fichier}
                onReady={(ws) => {
                  setWavesurfer(ws)
                  if (doitJouer) {
                    ws.play()
                    setDoitJouer(false)
                  }
                }}
                onPlay={() => setEnLecture(true)}
                onPause={() => setEnLecture(false)}
                onFinish={() => setSelectionMorceaux((selectionMorceaux + 1) % OmbreetLumiere.morceaux.length)}
              />
          </div>
        </div>
      <div className="flex flex-col justify-center items-left  bg-gray-900 shadow-amber-900 shadow-lg rounded-2xl w-4xl p-6 m-6">
        <p className="font-musique2 text-2xl text-white">Enregistrement et mixage : <span className="text-amber-400">Guillaume Thevenin et Flavien Popin, Cryogène Studios </span></p>
        <p className="font-musique2 text-2xl text-white">Photographie : <span className="text-amber-400">Pascal Calmettes </span></p>
      </div>
      </div>
    </section>
  )
}

export default Musiques
