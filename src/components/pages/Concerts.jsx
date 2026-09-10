import Article_1 from "../../assets/images/Article_6.jpg"
import Article_2 from "../../assets/images/Tom-et-Pauline-concert.jpg"
import Article_3 from "../../assets/images/projet-artistique-1.jpg"
import Article_4 from "../../assets/images/articles-piano-2.jpg"
import Article_5 from "../../assets/images/articles-piano-3.jpg"
import Article_6 from "../../assets/images/articles_piano_1.jpg"
import Concert_12 from "../../assets/images/jeunestalents.jpg"
import Concert_11 from "../../assets/images/affiches-piano_2.jpg"
import Concert_10 from "../../assets/images/concert_auzone.jpg"
import Concert_9 from "../../assets/images/affiche-20-Mai.jpg"
import Concert_8 from "../../assets/images/concert_1.jpg"
import Concert_7 from "../../assets/images/concert-11-Juin.jpg"
import Concert_6 from "../../assets/images/Affiche_pulsatile.png"
import Concert_5 from "../../assets/images/Copie-de-rencontre.png"
import Concert_4 from "../../assets/images/Pulsatile_Impromptu.jpg"
import Concert_3 from "../../assets/images/Affiche002_L'impromptu_29_03_25.jpg"
import Concert_2 from "../../assets/images/Affiche_L'impromptu_17_05_25.jpg"
import Concert_1 from "../../assets/images/Affiche_Annecy.jpg"
import Carrousel from "../Carrousel"



function Concerts() {
  const articles = [
    {
      id: 1,
      image: Article_1,
      date: "30 octobre 2020 à Bruges",
      titre: "Pauline Martos, Professeur de piano à l'École de Musique Municipale de Bruges",
      extrait: "Cours de piano, Nous gardons au maximum le contact avec les élèves.",
    },
    {
      id: 2,
      image: Article_2,
      date: "29 juillet 2017 à Gruissant",
      titre: "Concert Pour Hautbois et Piano avec Tom Camus",
      extrait: "Pièces pour Hautbois et Piano.",
    },
    {
      id: 3,
      image: Article_3,
      date: "7 novembre 2015 à Cenon",
      titre: "Des Cordes en Metal",
      extrait: "Pauline Martos, Compositrice pour un concert de métal symphonique avec le groupe Dunam et un Orchestre à cordes.",
    },
    {
      id: 4,
      image: Article_4,
      date: "17 mars 2013 à Lège Cap Ferret",
      titre: "Concert Cap ferret Music Festival, Tournoi international de Musique",
      extrait: "Concourt de piano.",
    },
    {
      id: 5,
      image: Article_5,
      date: "23 avril 2012 à Bassens",
      titre: "Concert en trio et Oeuvres en solo avec Vincent Martos et Audrey Fernandez",
      extrait: "Concert en après-midi aux Jardins d'Ombeline avec Bach, Mozart, Schubert, Fauré et Ravel.",
    },
    {
      id: 6,
      image: Article_6,
      date: "Décembre 2009 à Agen",
      titre: "Récital solo",
      extrait: "Un concert classique où vous sont proposées les oeuvres de Chopin, Liszt, Debussy et Granados.",
    },
  ]

  const concerts = [
    {
      id: 1,
      image: Concert_1,
      date: "4 Juillet 2025",
      titre: "Festival d'Avignon programmation Off",
      extrait: "Une soirée entre ombre et lumière, où Pauline interprète ses compositions originales.",
    },
    {
      id: 2,
      image: Concert_2,
      date: "17 Mai 2025",
      titre: "Concert à Bordeaux",
      extrait: "Un programme mêlant des compositions au piano avec quelques chansons toutes issues de créations personnelles.",
    },
    {
      id: 3,
      image: Concert_3,
      date: "29 Mars 2025",
      titre: "Concert à Bordeaux",
      extrait: "Pauline explore les frontières entre le calme et la passion. Lors de ce concert, vous entendrez pour la première fois ses compositions originales à l'Impromptu.",
    },
    {
      id: 4,
      image: Concert_4,
      date: "16 Février 2024 & 8 Mars 2024 à Bordeaux",
      titre: "Duo Pulsatile",
      extrait: "Une rencontre inédite entre Paulne Martos (Piano) et Elisa Dignac (Violoncelle) pour un programme dédié aux oeuvres de Faure, Messiaen, Debussy et Schumann.",
    },
    {
      id: 5,
      image: Concert_5,
      date: "17 Mars 2023",
      titre: "Printemps des Poètes à Bruges",
      extrait: "Une rencontre merveilleuse entre le piano et les lectures de Christine Saint-Geours.",
    },
    {
      id: 6,
      image: Concert_6,
      date: "2 Juin 2023",
      titre: "Concert du Duo Pulsatile à Lanton",
      extrait: "Premier concert de ce Duo Pulsatile avec Elisa Dignac au Violoncelle et Pauline Martos au Piano, une aventure musicale, amicale et envoutante autour d'un programme qui vous enchantera.",
    },
    {
      id: 7,
      image: Concert_7,
      date: "11 Juin 2022 à Lanton",
      titre: "Clarinette et Piano",
      extrait: "Audrey Fernandez (Clarinette) et Pauline Martos (Piano) se retrouvent à nouveau pour un concert dynamique et jovial. Au programme : des pièces de Gade, Schumann, Brahms, mais aussi des mélodies Klezmer.",
    },
    {
      id: 8,
      image: Concert_8,
      date: "30 & 31 Mars 2019 à Bègles",
      titre: "Projet artistiqueAliaga Trio",
      extrait: "Trio pour Saxophone, Piano et Percussions alternant choros, rumbas et danses cubanes.",
    },
    {
      id: 9,
      image: Concert_9,
      date: "20 Mai 2017",
      titre: "Concert à Talence",
      extrait: "Audrey Fernandez et Pauline Martos vous proposent un concert pour Clarinette et Piano, en duo et en solo autour d'un répertoire haut en couleur.",
    },
    {
      id: 10,
      image: Concert_10,
      date: "11 Mai 2017 à Bordeaux",
      titre: "Concert de Piano Station Ausone",
      extrait: "Dans le cadre de leurs études au PESMD Bordeaux Aquitaine, Pauline Martos et Alice Laguerre se produiront en solistes. Au programme \: Bach, Chopin, Schubert, Beethoven et Ginastera.",
    },
    {
      id: 11,
      image: Concert_11,
      date: "Pêle-Mêle",
      titre: "Projet artistique",
      extrait: "Programmation de concerts et évènments année 2017.",
    },
    {
      id: 12,
      image: Concert_12,
      date: "5 février 2011 à Bordeaux",
      titre: "Concert jeunes talents",
      extrait: "Ce concert jeunes talents est dédié à de jeunes pianistes et harpistes venant de France, Suisse et Italie.",
    },
  ]

  return (
    <section className="pt-24">
      {/* Section où il y aura les événements à venir */}
      <div className="flex flex-col m-6">
        <h1 className="font-musique2 text-2xl lg:text-4xl">Événements à venir :</h1>
        <p className="m-3">D’autres représentations à venir bientôt, restez à l’écoute !</p>
      </div>
      {/* Carrousel d'articles */}
      <Carrousel titre="Articles :" items={articles} />
      
      {/* Carrousel de concerts */}
      <Carrousel titre="Concerts passés :" items={concerts} />
    </section>
  )
}

export default Concerts
