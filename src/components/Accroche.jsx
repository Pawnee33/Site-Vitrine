import ligne_ornement from "../assets/images/sous-titre2.png"
import maVideo from "../assets/video/Vitrine_compresse.mp4"


function Accroche() {
    return(
      <section>
        <div className="flex flex-col items-center bg-sky-100 h-72 relative">
            <p className="font-cursive font-normal text-black text-5xl mt-25">Entre Ombre & Lumière, là où mes paroles s'arrêtent, ma musique continue de vivre.</p>
            <img className="w-96 absolute pt-18" src={ligne_ornement}  alt="ornement décoratif" />
        </div>
        <div className="relative w-full aspect-video object-cover">
          <video className="w-full aspect-video object-cover" src={maVideo} autoPlay muted loop></video>
          <div className="absolute inset-0"></div>
        </div>
      </section>
    )
}

export default Accroche
