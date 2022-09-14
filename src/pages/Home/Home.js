import './Home.css';
import Header from '../../components/Header/Header';
import Main from '../../components/Main';
import { useEffect } from 'react';

function Home() {
    useEffect(()=>{
        document.title="Online Courses - Learn Anything, On Your Schedule | Udemy";
    });
    return (
        <>
            <Header />
            <Main />
        </>
    );
}

export default Home;
