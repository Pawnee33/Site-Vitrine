import Article_1 from "../../assets/images/articles_piano_1.jpg"
import Article_2 from "../../assets/images/articles-piano-2.jpg"
import Article_3 from "../../assets/images/articles-piano-3.jpg"
import Article_4 from "../../assets/images/projet-artistique-1.jpg"
import Article_5 from "../../assets/images/Tom-et-Pauline-concert.jpg"
import Article_6 from "../../assets/images/Article_6.jpg"
import Concert_1 from "../../assets/images/affiches-piano_2.jpg"
import Concert_2 from "../../assets/images/affiche-20-Mai.jpg"
import Concert_3 from "../../assets/images/concert_1.jpg"
import Concert_4 from "../../assets/images/concert-11-Juin.jpg"
import Concert_5 from "../../assets/images/Affiche_pulsatile.png"
import Concert_6 from "../../assets/images/Pulsatile_Impromptu.jpg"
import Concert_7 from "../../assets/images/Affiche002_L'impromptu_29_03_25.jpg"
import Concert_8 from "../../assets/images/Affiche_L'impromptu_17_05_25.jpg"
import Concert_9 from "../../assets/images/Affiche_Annecy.jpg"



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
    <section>
      <h1 className="text-6xl text-blue-950 m-8">Concerts</h1>

      <div className="m-6">
        <h2 className="font-musique2 text-4xl">Articles :</h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {articles.map((article) => (
          <article
            key={article.id}
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col"
          >
            <img className="w-full" src={article.image} alt={article.titre} />
            <div className="flex flex-col gap-2 p-5">
              <p className="font-bold text-black">{article.date}</p>
              <h2 className="text-xl font-bold text-blue-700">{article.titre}</h2>
              <p className="text-gray-600">{article.extrait}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="m-6">
        <h2 className="font-musique2 text-4xl">Concerts :</h2>
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-10">
        {concerts.map((concert) => (
          <article
            key={concert.id}
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white flex flex-col"
          >
            <img className="w-full" src={concert.image} alt={concert.titre} />
            <div className="flex flex-col gap-2 p-5">
              <p className="font-bold text-black">{concert.date}</p>
              <h2 className="text-xl font-bold text-blue-700">{concert.titre}</h2>
              <p className="text-gray-600">{concert.extrait}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Concerts
