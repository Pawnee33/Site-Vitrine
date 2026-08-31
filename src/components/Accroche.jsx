import useOnScreen from "../hooks/useOnScreen"
import ligne_ornement from "../assets/images/sous-titre2.png"
import maVideo from "../assets/video/Vitrine_compresse.mp4"


function Accroche() {
  const [accrocheRef, accrocheVisible] = useOnScreen()
  const [ornementRef, ornementVisible] = useOnScreen()
  const [videoRef, videoVisible] = useOnScreen()

    return(
      <section>
        {/* Phrase d'accroche et ornement */}
        <div className="flex flex-col items-center bg-sky-050 h-72 gap-6">
            <p className={`font-cursive font-normal text-black text-5xl mt-24 transition-all duration-700 ${accrocheVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-52"}`} ref={accrocheRef}>Entre Ombre & Lumière, là où mes paroles s'arrêtent, ma musique continue de vivre.</p>
            <img className={`w-96 transition-all duration-700 ${ornementVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24"}`} ref={ornementRef} src={ligne_ornement}  alt="ornement décoratif" />
        </div>

        {/* Vidéo clip qui boucle */}
        <div className="relative w-full aspect-video object-cover">
          <video className={`w-full aspect-video object-cover transition-all duration-700 ${videoVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`} ref={videoRef} src={maVideo} autoPlay muted loop></video>
        </div>
      </section>
    )
}

export default Accroche
