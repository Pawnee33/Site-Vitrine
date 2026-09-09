import { useState } from "react"
import useOnScreen from "../../hooks/useOnScreen"

function Video() {
  const [ videoRef, videoVisible ] = useOnScreen()
  const [videoOuverte, setVideoOuverte] = useState(null)

  const videos = [
    { id: "XF_Xh-nsLlM", titre: "Ombre et Lumière - Neige éternelle" },
    { id: "f2GA7VPGDGU", titre: "Ombre et Lumière - Voir en soi" },
    { id: "CIGiA0M3zPs", titre: "Ombre et Lumière - Ensemble" },
    { id: "F3RW3mtiaKI", titre: "Concert Pauline Defize Martos à l'Impromptu" },
    { id: "9X9u86gMyhk", titre: "Pauline Defize Martos Live Bordeaux" },
  ]

  return (
    <section className="pt-28 pb-16">
      <div
        className={`grid grid-cols-2 gap-10 justify-center items-center m-20 px-72 transition-all duration-700 ${videoVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24"}`}
        ref={videoRef}
      >
        {videos.map((video) => (
          <div
            key={video.id}
            className="group max-w-xl rounded relative mx-auto h-auto overflow-hidden cursor-pointer "
            onClick={() => setVideoOuverte(video)}
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.titre}
              className="w-full aspect-video object-cover relative z-0 scale-110 transition-all duration-300 group-hover:scale-100"
            />
            <div className="absolute inset-0 z-10"></div>
            <p className="absolute bottom-0 left-0 w-full h-12 flex items-center font-lien font-bold text-white bg-nuit px-3 py-2">
              {video.titre}
            </p>
          </div>
        ))}
      </div>

      {videoOuverte && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex flex-col justify-center items-center gap-4"
          onClick={() => setVideoOuverte(null)}
        >
          <iframe
            width="960"
            height="540"
            src={`https://www.youtube.com/embed/${videoOuverte.id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[80vh]"
          ></iframe>
          <p className="font-lien font-bold text-white text-xl">{videoOuverte.titre}</p>
        </div>
      )}
    </section>
  )
}

export default Video
