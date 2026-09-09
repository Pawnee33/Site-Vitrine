import Pauline_hero from "../assets/images/Pauline_hero.jpg"

function Hero() {
    return(
     <section className="relative" id="hero">
      {/* Image de fond du Hero */}
      <img className="w-full aspect-[19/9] lg:aspect-video object-[100%_30%] object-cover" src={Pauline_hero} alt="Pauline au piano" />
      {/* Texte du Hero */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-3 lg:pb-10 lg:gap-2">
        <h1 className="text-white/90 font-cursive text-lg lg:text-9xl">Pauline Defize Martos</h1>
        <div className="w-10 lg:w-60 border-t-2 lg:border-t-2 border-white m-3"></div>
        <p className="text-white/95 font-subtitle3 font-medium italic text-xs lg:text-6xl">Pianiste & Compositrice</p>
      </div>
     </section> 
    )
}

export default Hero
