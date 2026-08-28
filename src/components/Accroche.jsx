import Portrait from "../assets/images/DSCF8139.jpg"
import maVideo from "../assets/video/Vitrine_compresse.mp4"


function Accroche() {
    return(
      <section>
        <div className="flex justify-center items-center bg-sky-100 h-64">
            <p className="font-cursive font-normal text-black text-5xl">Entre Ombre & Lumière, là où mes paroles s'arrêtent, ma musique continue de vivre.</p>
        </div>
        <div className="relative w-full aspect-video object-cover">
          <video className="w-full aspect-video object-cover" src={maVideo} autoPlay muted loop></video>
          <div className="absolute inset-0"></div>
        </div>
      </section>
    )
}

export default Accroche
