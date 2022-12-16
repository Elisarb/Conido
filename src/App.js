import logo from './logo.svg';
import './App.scss';
import Main from './components/main/main';
import Locations from './components/locations/locations';
import Apartments from './components/apartments/apartments';
import Installations from './components/installations/installations';
import Gallery from './components/gallery/gallery';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
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
