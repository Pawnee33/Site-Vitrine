import Pauline_contact from "../../assets/images/Pauline_contact.jpg"
function Contact() {
  return (
    <section>
      <div className="flex justify-center items-center bg-sky-50 rounded-2xl m-10 gap-6">
        <img className="max-w-2xl m-20 rounded-2xl" src={Pauline_contact} alt="Pauline entrain de jouer au piano" />
        <div className="flex flex-col items-center gap-3 bg-white/80 rounded-2xl p-10">
          <p className="text-xl text-blue-950 font-subtitle font-bold">Entrer en contact</p>
          <a className="text-2xl font-titre hover:opacity-30 transition" href="mailto:paulinemartos@hotmail.fr">paulinemartos@hotmail.fr</a>
          <div className="w-60 border-t-2 border-black m-3"></div>
        </div>
      </div>
    </section>
  )
}

export default Contact
