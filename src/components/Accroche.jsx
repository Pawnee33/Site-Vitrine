import Portrait from "../assets/images/DSCF8139.jpg"


function Accroche() {
    return(
      <section>
        <div className="flex justify-center items-center bg-sky-100 h-64">
            <p className="font-cursive font-normal text-black text-5xl">Entre Ombre & Lumière, là où mes paroles s'arrêtent, ma musique continue de vivre.</p>
        </div>
        <div className="relative w-full aspect-video object-cover">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/42J3Lvkz-j8?autoplay=1&mute=1&loop=1&playlist=42J3Lvkz-j8&controls=0&rel=0"
            title="Bande démo Pauline Defize"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute inset-0"></div>
        </div>
      </section>
    )
}

export default Accroche
