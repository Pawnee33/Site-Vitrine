import ensemble from "../assets/audio/01-ensemble.mp3"
import verite from "../assets/audio/03-verite.mp3"
import neige_eternelle from "../assets/audio/Neige-eternelle-4.mp3"
import ombre_lumiere from "../assets/audio/Ombre-et-Lumiere-MIX03.mp3"
import opus_100 from "../assets/audio/opus-n100-02.mp3"
import voir_en_soi from "../assets/audio/Pauline-Martos-02-Voir-en-soi.mp3"
import croire from "../assets/audio/Projet-Croire-02.mp3"

function LecteurAudio() {
    return(
      <audio className="bottom-0 left-0 w-full fixed" controls src={neige_eternelle} />
    )
}

export default LecteurAudio
