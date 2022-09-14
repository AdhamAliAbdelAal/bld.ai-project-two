import { createContext, useState ,useEffect} from "react";

const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
    const [courses, setCourses] = useState(null);
    useEffect(() => {
        setTimeout(()=>{
            fetch("http://localhost:7000/courses").then(response => response.json()).then(data => setCourses(data));
        },2000);
        
    }, []);
    return <GlobalContext.Provider value={{ courses }}>
        {children}
    </GlobalContext.Provider>
}
export default GlobalContext;
