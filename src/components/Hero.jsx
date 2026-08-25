import Pauline_hero from "../assets/images/Pauline_hero.jpg"

function Hero() {
    return(
     <section className="relative">
      <img className="w-full  aspect-video object-[100%_30%] object-cover" src={Pauline_hero} alt="Pauline au piano" />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 gap-2">
        <h1 className="text-white/90 font-cursive text-9xl">Pauline Defize Martos</h1>
        <div className="w-60 border-t-2 border-white m-3"></div>
        <p className="text-white/95 font-subtitle3 font-medium italic text-6xl">Pianiste & Compositrice</p>
      </div>
     </section> 
    )
}

export default Hero
