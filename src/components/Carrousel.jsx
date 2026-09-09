import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

function Carrousel({ titre, items }) {
  const carrouselRef = useRef(null)

  const defilerGauche = () => {
    carrouselRef.current.scrollBy({ left: -300, behavior: "smooth" })
  }

  const defilerDroite = () => {
    carrouselRef.current.scrollBy({ left: 300, behavior: "smooth" })
  }

  return (
    <div>
      <div className="m-6">
        <h2 className="font-musique2 text-2xl lg:text-4xl">{titre}</h2>
      </div>

      {/* Boutons de défilement gauche */}
      <div className="relative mx-2 lg:mx-16">
        <button onClick={defilerGauche} className="absolute left-5 lg:left-10 top-[40%] lg:top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 lg:p-4 hover:bg-gray-100 transition">
          <ChevronLeft className="w-7 h-7 lg:w-12 lg:h-12" />
        </button>

        {/* Conteneur des éléments du carrousel */}
        <div ref={carrouselRef} className="flex flex-row overflow-x-auto gap-6 lg:gap-20 scrollbar-hide items-start m-2 lg:m-10 p-2 lg:p-10">
          {items.map((item) => (
            <article key={item.id} className="max-w-xs shrink-0 rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col">
              <img className="w-full" src={item.image} alt={item.titre} />
              <div className="flex flex-col gap-2 p-5">
                <p className="font-bold text-black">{item.date}</p>
                <h2 className="text-xl font-bold text-blue-700">{item.titre}</h2>
                <p className="text-gray-600">{item.extrait}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Boutons de défilement droite */}
        <button onClick={defilerDroite} className="absolute right-5 lg:right-10 top-[40%] lg:top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow-lg p-2 lg:p-4 hover:bg-gray-100 transition">
          <ChevronRight className="w-7 h-7 lg:w-12 lg:h-12" />
        </button>
      </div>
    </div>
  )
}

export default Carrousel
