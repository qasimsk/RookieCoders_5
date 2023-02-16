import './App.css';
import NavbarComponent from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import SearchPage from './search';

function App() {
  return (
    <>
      <NavbarComponent />
      <SearchPage />
    </>
  );
}

export default App;
