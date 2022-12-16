import logo from './logo.svg';
import './App.scss';
import Main from './page-components/main/main';
import Locations from './page-components/locations/locations';
import Apartments from './page-components/apartments/apartments';
import Installations from './page-components/installations/installations';
import Gallery from './page-components/gallery/gallery';
import Contact from './page-components/contact/contact';
import Footer from './page-components/footer/footer';
import Separator from './components/shared/separator/separator';

function App() {
  return (
    <div className="App">
      <Main></Main>
      <Locations></Locations>
      <Apartments></Apartments>
      <Separator></Separator>
      <Installations></Installations>
      <Separator></Separator>
      <Gallery></Gallery>
      <Separator></Separator>
      <Contact></Contact>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
