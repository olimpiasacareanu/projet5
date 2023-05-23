import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './composants/NavBar/NavBar';
import './App.css';
import Accueil from "./containers/Accueil/Accueil"
import ListeEtablissement from "./containers/ListeEtablissement/ListeEtablissement";
import Contact from "./containers/Contact/Contact";
import "bootstrap/dist/css/bootstrap.min.css"
import Erreur404 from "./containers/Erreur404/Erreur404";


export default App;

function App() {
  return (
    <>
    {/* BrowserRouter Permet d'indiquer le chemin du site en l'indiquant dans basename */}
      <BrowserRouter > 
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<Accueil />} />
            <Route path="/recherche-etablissment-public" element={<ListeEtablissement />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Erreur404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}


