import { useState, useRef } from "react"
import ensemble from "../assets/audio/01-ensemble.mp3"
import verite from "../assets/audio/03-verite.mp3"
import neige_eternelle from "../assets/audio/Neige-eternelle-4.mp3"
import ombre_lumiere from "../assets/audio/Ombre-et-Lumiere-MIX03.mp3"
import opus_100 from "../assets/audio/opus-n100-02.mp3"
import voir_en_soi from "../assets/audio/Pauline-Martos-02-Voir-en-soi.mp3"
import croire from "../assets/audio/Projet-Croire-02.mp3"

function LecteurAudio() {
  const playlist = [
    { titre: "Ensemble", fichier: ensemble },
    { titre: "Vérité", fichier: verite },
    { titre: "Neige éternelle", fichier: neige_eternelle },
    { titre: "Ombre et Lumière", fichier: ombre_lumiere },
    { titre: "Opus 20 n°100", fichier: opus_100 },
    { titre: "Voir en soi", fichier: voir_en_soi },
    { titre: "Croire", fichier: croire },
  ]

  const [indexStart, setIndexStart] = useState(0)
  const audioRef = useRef(null)
  const [enLecture, setEnLecture] = useState(false)

    return(
      <div className="bottom-0 left-0 w-full fixed">
        <audio ref={audioRef} src={playlist[indexStart].fichier} />
        <button onClick={() => {
          if (enLecture) {
            audioRef.current.pause()
          } else {
            audioRef.current.play()
          }
          setEnLecture(!enLecture)
        }}>
          {enLecture ? "Pause" : "Play"}
        </button>
        <button onClick={() => setIndexStart((indexStart - 1 + playlist.length) % playlist.length)}>Précédent</button>
        <button onClick={() => setIndexStart((indexStart + 1) % playlist.length)}>Suivant</button>
        <p>{playlist[indexStart].titre}</p>
      </div>
    )
}

export default LecteurAudio
