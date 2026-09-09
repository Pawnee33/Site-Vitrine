import Pauline_contact from "../../assets/images/Pauline_contact.jpg"
function Contact() {
  return (
    <section className="pt-24 overflow-x-hidden">
      <div className="flex flex-col lg:flex-row justify-center items-center rounded-2xl m-3 lg:m-10 gap-6">
        {/* Image de contact */}
        <img className="max-w-sm lg:max-w-2xl m-10 lg:m-20 rounded-2xl" src={Pauline_contact} alt="Pauline entrain de jouer au piano" />
        {/* Card contact */}
        <div className="flex flex-col items-center gap-3 bg-white/80 rounded-2xl p-10">
          <p className="text-sm lg:text-xl text-blue-950 font-subtitle font-bold">Entrer en contact</p>
          <a className="text-sm lg:text-2xl font-titre hover:opacity-30 transition" href="mailto:paulinemartos@hotmail.fr">paulinemartos@hotmail.fr</a>
          <div className="w-[180px] lg:w-60 border-t-[1px] border-black m-3"></div>
        </div>
      </div>
    </section>
  )
}

export default Contact
