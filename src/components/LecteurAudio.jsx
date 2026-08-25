import { useState } from "react"
import ensemble from "../assets/audio/01-ensemble.mp3"
import verite from "../assets/audio/03-verite.mp3"
import neige_eternelle from "../assets/audio/Neige-eternelle-4.mp3"
import ombre_lumiere from "../assets/audio/Ombre-et-Lumiere-MIX03.mp3"
import opus_100 from "../assets/audio/opus-n100-02.mp3"
import voir_en_soi from "../assets/audio/Pauline-Martos-02-Voir-en-soi.mp3"
import croire from "../assets/audio/Projet-Croire-02.mp3"
import pochette_album from "../assets/images/Pauline_hero.jpg"
import { SkipBack, SkipForward, Play, Pause, Volume2, VolumeX, ChevronDown, ChevronUp } from "lucide-react"
import WavesurferPlayer from "@wavesurfer/react"

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
  const [enLecture, setEnLecture] = useState(false)
  const [wavesurfer, setWavesurfer] = useState(null)
  const [estMuet, setEstMuet] = useState(false)
  const [tempsActuel, setTempsActuel] = useState(0)
  const [duree, setDuree] = useState(0)
  const [afficheLecteur, setAfficheLecteur] = useState(true)

  const formatTemps = (secondes) => {
    const min = Math.floor(secondes / 60)
    const sec = Math.floor(secondes % 60)
    return `${min}:${sec.toString().padStart(2, "0")}`
  }

    return(
      <div className="bottom-0 left-0 w-full fixed bg-nuit border-white border-t-4 relative">
        <div className="absolute bottom-full right-8">
          <button 
            onClick={() => setAfficheLecteur(!afficheLecteur)}
            className="bg-nuit px-4 py-1 rounded-t-lg"
          >
            {afficheLecteur ? <ChevronDown color="white"/> : <ChevronUp color="white"/>}
          </button>
        </div>

        <div className={`flex flex-row items-center m-2 gap-4 ${afficheLecteur ? "" : "hidden"}`}>
          <div className="flex items-center gap-4">
            <img className="aspect-square object-cover w-20" src={pochette_album} alt="Pauline au piano album" />
            <div className="flex flex-col">
              <p className="text-white text-2xl font-musique2 font-semibold w-64 truncate px-3">Ombre & Lumière</p>
              <p className="text-white/80 text-xl font-musique2 font-light w-64 truncate px-3">{playlist[indexStart].titre}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-white" onClick={() => setIndexStart((indexStart - 1 + playlist.length) % playlist.length)}><SkipBack fill="white" color="white" size={32}/></button>
            <button className="text-white" onClick={() => wavesurfer && wavesurfer.playPause()}>
              {enLecture ? <Pause fill="white" color="white" size={36}/> : <Play fill="white" color="white" size={36}/>}
            </button>
            <button onClick={() => setIndexStart((indexStart + 1) % playlist.length)}><SkipForward fill="white" color="white" size={32}/></button>
          </div>
          <div className="flex-1">
            <WavesurferPlayer
              height={60}
              waveColor="#888888"
              progressColor="#ffffff"
              url={playlist[indexStart].fichier}
              onReady={(ws) => {
                setWavesurfer(ws)
                setDuree(ws.getDuration())
              }}
              onPlay={() => setEnLecture(true)}
              onPause={() => setEnLecture(false)}
              onFinish={() => setIndexStart((indexStart + 1) % playlist.length)}
              autoplay={true}
              onTimeupdate={(ws) => setTempsActuel(ws.getCurrentTime())}
            />
          </div>
          <p className="text-white">{formatTemps(tempsActuel)}</p>
          <button
            className="text-white"
            onClick={() => {
              if (!wavesurfer) return
              if (estMuet) {
                wavesurfer.setVolume(1)
              } else {
                wavesurfer.setVolume(0)
              }
              setEstMuet(!estMuet)
            }}
          >
            {estMuet ? <VolumeX color="white" size={28} /> : <Volume2 color="white" size={28} />}
          </button>
        </div>
      </div>
    )
}

export default LecteurAudio
