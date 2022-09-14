import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import { SearchProvider } from './contexts/SearchContext';
import Navbar from './components/NavBar/Navbar';
import CourseDetails from './pages/CoursePage/CourseDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <SearchProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:topic/:id" element={<CourseDetails />} />
            </Routes>
          </Router>
      </SearchProvider>
      <Footer />
    </>
  );
}
export default App;
