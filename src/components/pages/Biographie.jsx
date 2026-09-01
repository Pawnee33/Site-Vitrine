import useOnScreen from "../../hooks/useOnScreen"
import Pauline_Bio from "../../assets/images/Pauline_Bio.jpg"

function Biographie() {
  const [ cardRef, cardVisible ] = useOnScreen()
  return (
    <section className="relative">
    <img className="w-full h-full object-contain" src={Pauline_Bio} />
    <div className={`absolute top-30 left-16 bg-gray-400/30 rounded-2xl shadow-[-50px_50px_10px_rgba(0,0,0,0.40)] py-10 px-12 transition-all duration-700 ${cardVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-52"}`} ref={cardRef}>
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl text-white  font-musique2">Biographie</h1>
      <div className="max-w-5xl flex flex-col gap-4 text-white text-xl font-lien">
        <p>
          Pauline Defize Martos
        </p>
        <p>
          Pauline commence le piano à l'âge de 5 ans,
          qui très vite devient pour elle une passion.
          Elle rejoint le Conservatoire de Bordeaux Jacques Thibault à l'âge de 10 ans où elle s'oriente rapidement vers un cursus professionnel.
          Elle suit des cours de Piano, de Musique de chambre,
          d'écriture, d'analyse et de formation musicale.
          Chaque été elle suit des cours privés intensifs auprès de Madame Cornu Obliger qui lui propose son premier concerto pour Piano à l'âge de 12 ans.
        </p>
        <p>
          Pauline fait également partie des choeurs d'enfants de l'Opéra National de Bordeaux et de la Jeune Académie Vocale d'Aquitaine jusqu' à ses 18 ans.
          Avec ces ensembles elle aura l'occasion de chanter pour plusieurs productions d'Opéras en France et en Hongrie, et de participer à des concours Nationaux.
        </p>
        <p>
          En parallèle de ses études musicales elle poursuit un cursus général où elle obtient un Baccalauréat Littéraire au lycée Michel Montaigne en 2010.
        </p>
        <p>
          Elle valide ensuite son DEM de Formation Musicale et son DEM de Piano en 2012 au Conservatoire de Bordeaux.
        </p>
        <p>
          À la suite de cela, elle entre au PESMD de Bordeaux Aquitaine dans la classe de Monsieur Hervé N Kaoua.
          Elle participe également à des Masterclass auprès de François Frédéric Guy, Marie-Joseph Jude, Vanessa Wagner et Cédric Tiberghien.
          Elle obtient son Diplôme d’Etat de Professeur de Piano en 2017 ainsi que sa Licence de Musicologie, puis son DNSPM de Piano en 2018.
          La même année elle réussi le concours de la fonction publique territoriale qui lui permet d'être titulaire d'un poste de professeur de Piano ATEA dans les structures municipales.
        </p>
        <p>
          Tout au long de son parcours,
          Pauline a composé des musiques de films au piano,
          des chansons et a également écrit pour plusieurs groupes de musique actuelle.
          Cela lui permet d'être référencée en tant qu'auteur compositeur à la SACEM et de faire une passerelle entre le monde de la musique dite classique et les compositions plus populaires.
        </p>
        <p>
          Pauline se produit dans plusieurs groupes de musique de chambre,
          avec le Trio Aliaga (musiques latines),
          Duo Pulsatile (violoncelle/piano en musique classique orientée sur le répertoire français).
          Elle propose des concerts en solo ou en tant qu'accompagnatrice pour des chanteurs ou instrumentistes solistes.
          Elle participe aussi au Printemps des poètes pour mettre en musique des lectures de poésie.
        </p>
        <p>
          Actuellement professeure de Piano Titulaire au Conservatoire de Bordeaux Jacques Thibault depuis 2025,
          elle continue de se produire sur scène à diverses occasions.
        </p>
        <p>
          Ses compositions au piano sont aujourd'hui proposées pour des concerts autour de la région bordelaise et programmée en 2025 au festival d'Avignon (programmation Off).
        </p>
        <p>
          Les liens entre les concerts et l'enseignement restent pour elle très étroits,
          si complémentaires.
          Ils s'enrichissent mutuellement et permettent à Pauline Defize de se réaliser complètement en tant que pédagogue, artiste et musicienne.
        </p>
      </div>
    </div>
    </div>
    </section>
  )
}

export default Biographie
