import './Home.css';
import Navbar from '../../components/NavBar/Navbar';
import Header from '../../components/Header/Header';
import Main from '../../components/Main';
import { SearchProvider } from '../../context/SearchContext';
function Home() {
    return (
        <>
            <SearchProvider>
                <Navbar />
                <Header />
                <Main />
            </SearchProvider>
        </>
    );
}

export default Home;
