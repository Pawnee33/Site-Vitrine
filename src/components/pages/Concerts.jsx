import Article_1 from "../../assets/images/articles_piano_1.jpg"
import Article_2 from "../../assets/images/articles-piano-2.jpg"
import Article_3 from "../../assets/images/articles-piano-3.jpg"
import Article_4 from "../../assets/images/projet-artistique-1.jpg"
import Article_5 from "../../assets/images/Tom-et-Pauline-concert.jpg"
import Article_6 from "../../assets/images/Article_6.jpg"
import Concert_9 from "../../assets/images/affiches-piano_2.jpg"
import Concert_8 from "../../assets/images/affiche-20-Mai.jpg"
import Concert_7 from "../../assets/images/concert_1.jpg"
import Concert_6 from "../../assets/images/concert-11-Juin.jpg"
import Concert_5 from "../../assets/images/Affiche_pulsatile.png"
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
      date: "26 août 2026",
      titre: "Récital à Bordeaux",
      extrait: "Une soirée entre ombre et lumière, où Pauline interprète ses compositions originales.",
    },
    {
      id: 2,
      image: Article_2,
      date: "24 août 2026",
      titre: "Concert au conservatoire",
      extrait: "Un programme mêlant grands classiques et créations personnelles.",
    },
    {
      id: 3,
      image: Article_3,
      date: "20 août 2026",
      titre: "Soirée piano-jazz",
      extrait: "Pauline explore les frontières entre musique classique et improvisation jazz.",
    },
    {
      id: 4,
      image: Article_4,
      date: "15 août 2026",
      titre: "Projet artistique",
      extrait: "Une rencontre inédite entre le piano et d'autres disciplines artistiques.",
    },
    {
      id: 5,
      image: Article_5,
      date: "15 août 2026",
      titre: "Projet artistique",
      extrait: "Une rencontre inédite entre le piano et d'autres disciplines artistiques.",
    },
    {
      id: 6,
      image: Article_6,
      date: "15 août 2026",
      titre: "Projet artistique",
      extrait: "Une rencontre inédite entre le piano et d'autres disciplines artistiques.",
    },
  ]

  const concerts = [
    {
      id: 1,
      image: Concert_1,
      date: "26 août 2026",
      titre: "Récital à Bordeaux",
      extrait: "Une soirée entre ombre et lumière, où Pauline interprète ses compositions originales.",
    },
    {
      id: 2,
      image: Concert_2,
      date: "24 août 2026",
      titre: "Concert au conservatoire",
      extrait: "Un programme mêlant grands classiques et créations personnelles.",
    },
    {
      id: 3,
      image: Concert_3,
      date: "20 août 2026",
      titre: "Soirée piano-jazz",
      extrait: "Pauline explore les frontières entre musique classique et improvisation jazz.",
    },
    {
      id: 4,
      image: Concert_4,
      date: "15 août 2026",
      titre: "Projet artistique",
      extrait: "Une rencontre inédite entre le piano et d'autres disciplines artistiques.",
    },
    {
      id: 5,
      image: Concert_5,
      date: "15 août 2026",
      titre: "Projet artistique",
      extrait: "Une rencontre inédite entre le piano et d'autres disciplines artistiques.",
    },
    {
      id: 6,
      image: Concert_6,
      date: "15 août 2026",
      titre: "Projet artistique",
      extrait: "Une rencontre inédite entre le piano et d'autres disciplines artistiques.",
    },
    {
      id: 7,
      image: Concert_7,
      date: "15 août 2026",
      titre: "Projet artistique",
      extrait: "Une rencontre inédite entre le piano et d'autres disciplines artistiques.",
    },
    {
      id: 8,
      image: Concert_8,
      date: "15 août 2026",
      titre: "Projet artistique",
      extrait: "Une rencontre inédite entre le piano et d'autres disciplines artistiques.",
    },
    {
      id: 9,
      image: Concert_9,
      date: "15 août 2026",
      titre: "Projet artistique",
      extrait: "Une rencontre inédite entre le piano et d'autres disciplines artistiques.",
    },
  ]

  return (
    <section className="bg-amber-50/30 pt-24">
      <div className="flex flex-col m-6">
        <h1 className="font-musique2 text-4xl">Événements à venir :</h1>
        <p className="m-3">D’autres représentations à venir bientôt, restez à l’écoute !</p>
      </div>

      <Carrousel titre="Articles :" items={articles} />

      <Carrousel titre="Concerts passés :" items={concerts} />
    </section>
  )
}

export default Concerts
