# Site vitrine : Pauline Defize Martos

Site vitrine de Pauline Defize Martos, pianiste et compositrice.
Il présente sa biographie, ses musiques, ses vidéos, ses concerts et son activité
d'enseignement, et permet de la contacter pour des réservations.

🔗 **En ligne :** [pauline-defize-martos.vercel.app](https://pauline-defize-martos.vercel.app)

## Fonctionnalités

- **Accueil** : image plein cadre, vidéo de fond, header transparent qui se colore au scroll
- **Biographie** : parcours de l'artiste
- **Musiques** : lecteur audio intégré (WaveSurfer.js) avec sélection des morceaux
- **Vidéos** : galerie de clips YouTube, ouverture en grand au clic (modale)
- **Concerts** : événements à venir et passés en carrousel
- **Cours** : présentation de l'activité d'enseignement
- **Contact** : pour les demandes de réservation
- Lecteur audio persistant en bas de page, sur toutes les pages
- Entièrement responsive (mobile, tablette, ordinateur)

## Technologies

- **React 19** + **Vite**
- **Tailwind CSS v4**
- **React Router** (`react-router-dom`) : navigation entre les pages
- **WaveSurfer.js** (`@wavesurfer/react`) : lecteur audio avec forme d'onde
- **lucide-react** : icônes
- Déployé sur **Vercel**

## Installation et lancement en local

Prérequis : [Node.js](https://nodejs.org) (version 20 ou plus).

```bash
# 1. Cloner le dépôt
git clone https://github.com/Pawnee33/Site-Vitrine.git
cd Site-Vitrine

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site est alors accessible sur `http://localhost:5173` (l'adresse s'affiche dans le terminal).

## Autres commandes

```bash
npm run build     # construit la version de production (dossier dist/)
npm run preview   # prévisualise la version de production en local
```

## Déploiement

Le site est hébergé sur Vercel. Chaque `git push` sur la branche `main` déclenche
automatiquement un nouveau déploiement.

Le fichier `vercel.json` redirige toutes les routes vers `index.html`, ce qui est
nécessaire pour que React Router fonctionne en accès direct sur une sous-page.

## Auteur

Développé par **Pawnee DEFIZE** : [github.com/Pawnee33](https://github.com/Pawnee33)
