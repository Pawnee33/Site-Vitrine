import useOnScreen from "../../hooks/useOnScreen"
import Luna_Pauline from "../../assets/images/Luna_Pauline.jpg"
import Lisa_Pauline from "../../assets/images/Lisa_Pauline.jpg"

function Cours() {
  const [ cardRef, cardVisible ] = useOnScreen()
  const [ lunaRef, lunaVisible ] = useOnScreen()
  const [ lisaRef, lisaVisible ] = useOnScreen()
  return (
    <section className="pt-24">
      <div className="flex flex-row justify-center items-center m-6 gap-6">
        {/* Image des cours */}
        <img className={`max-w-sm object-contain rounded-2xl transition-all duration-700 ${lisaVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-52"}`} ref={lisaRef} src={Lisa_Pauline} alt="Pauine entrain de donner des cours de piano"/>
        <img className={`max-w-sm object-contain rounded-2xl transition-all duration-700 ${lunaVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-52"}`} ref={lunaRef} src={Luna_Pauline} alt="Pauine entrain de donner des cours de piano"/>
        <div className={`bg-white rounded-2xl py-10 px-12  transition-all duration-700 ${cardVisible ? "opacity-100 -translate-x-0" : "opacity-0 translate-x-52"}`} ref={cardRef}>
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl text-black  font-musique2">Enseignante Piano / Pédagogie</h1>
            {/* Card texte des cours */}
            <div className="max-w-5xl flex flex-col gap-4 text-black text-xl font-lien">
              <p>
                Pauline Defize Martos
              </p>
              <p>
                Pauline enseigne très vite le piano en tant qu'assistante de ses professeurs dès l'âge de 18 ans pour aider à soutenir les élèves débutants dans leur travail quotidien.
                Elle transmet les méthodes d'apprentissage, la motivation et teinte ses cours d'une bonne humeur communicative !
              </p>
              <p>
                À 19 ans, elle obtient son premier poste de professeur de piano à l'école de quartier Chantecler à Bordeaux et
                à l'école de musique de municipale de Parempuyre.
              </p>
              <p>
                Pauline donne aussi des cours de Formation Musicale (CFPM), de Culture musicale (3is),
                d'éveil musical (Ambarès) et propose ses services en tant que remplaçante dans de nombreux établissements de la région bordelaise.
              </p>
              <p>
                Elle a occupé le poste de professeur de Piano dans diverses structures municipales comme l'école de musique de Cenon et
                l'école de musique de Bruges où elle est titularisée en 2018.
              </p>
              <p>
                Parallèlement à cela, elle est appelée pour proposer des Masterclass sur le bassin d'Arcachon pour la COBAS.
                Elle est aussi sollicitée en tant que jury pour différents établissements (Arcachon,Pessac, Ambarès, Lormont).
              </p>
              <p>
                Volontaire de proposer des cours pour tous les niveaux et tous les âges, Pauline donne aussi des cours privés en passant le service des CESU.
              </p>
              <p>
                Enfin, elle demande sa mutation pour le Conservatoire de Bordeaux en tant que Titulaire pour prendre son poste en Septembre 2025 où
                elle enseigne aujourd'hui le Piano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cours
