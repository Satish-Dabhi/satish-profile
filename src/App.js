import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./section/About";
import Header from "./section/Header";
import './style/style.css';
import './style/default.css';
import Contact from "./section/Contact";
import Profile from "./section/Profile";
import Resume from "./section/Resume";
import Skills from './section/Skills';
import Footer from './section/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
      <Profile />
      <Resume />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
