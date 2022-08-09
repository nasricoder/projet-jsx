import './App.css';
import ProfilName from './componnent/profil/ProfilPhoto';
import FullName from './componnent/profil/FullName';
import Adresse from './componnent/profil/Adresse';

function App() {
  return (
    <div >
      {/* hello */}
     <ProfilName />
     <FullName />
     <Adresse />
    </div>
  );
}

export default App;
