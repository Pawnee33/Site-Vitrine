function Header() {
    return(
        <header>
          <div className="flex justify-between items-center py-4 px-3">
            <span className="text-xl font-bold text-blue-800">Pauline MARTOS</span>
            <ul className="flex gap-6">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#musiques">Musiques</a></li>
              <li><a href="#videos">Vidéos</a></li>
              <li><a href="#concerts">Concerts</a></li>
              <li><a href="#cours">Cours</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </header>
    )
}

export default Header
