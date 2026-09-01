import Pauline_Bio from "../../assets/images/Pauline_Bio.jpg"

function Biographie() {
  return (
    <section className="relative">
    <img className="w-full  object-contain" src={Pauline_Bio} alt="Pauline au piano" />
    <div className="absolute top-80 left-32 bg-gray-400/30 rounded-2xl shadow-[-50px_50px_10px_rgba(0,0,0,0.40)] py-10 px-12">
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl text-white  font-musique2">Biographie</h1>
      <div className="max-w-md flex flex-col gap-4 text-white text-xl font-lien">
        <p>
          Pianiste et compositrice,
          Pauline Defize Martos façonne une musique où se rencontrent la rigueur classique et la liberté de l'improvisation.
          Formée dès l'enfance au piano,
          elle développe très tôt un langage personnel,
          à la croisée de la musique contemporaine,
          du jazz et des musiques de film.
        </p>
        <p>
          Diplômée du Conservatoire,
          elle se produit aujourd'hui sur les scènes françaises et européennes,
          en solo comme en formation.
          Ses compositions, oscillant entre ombre et lumière,
          explorent les émotions les plus intimes et invitent l'auditeur à un voyage introspectif.
        </p>
        <p>
          Au-delà de la scène, Pauline consacre une part essentielle de son travail à la transmission.
          Professeure passionnée,
          elle accompagne ses élèves dans la découverte de l'instrument et l'éveil de leur propre sensibilité musicale.
        </p>
        <p>
          Son premier album, mêlant pièces originales et arrangements,
          témoigne d'une artiste en quête constante de sincérité,
          pour qui la musique commence là où les mots s'arrêtent.
        </p>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Biographie
