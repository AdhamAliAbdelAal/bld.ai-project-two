import Home from './pages/Home/Home';
import Footer from './components/Footer.js/Footer';
import { SearchProvider } from './context/SearchContext';
import Navbar from './components/NavBar/Navbar';
import CourseDetails from './pages/CoursePage/CourseDetails';
function App() {
  return (
    <>
      <SearchProvider>
        <Navbar />
        {/* <Home /> */}
        <CourseDetails />
      </SearchProvider>
      <Footer />
    </>
  );
}
export default App;
