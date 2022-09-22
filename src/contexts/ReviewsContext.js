import { createContext } from "react";

const ReviewsContext=createContext();

export const ReviewsProvider=({children,value})=>{
    return <ReviewsContext.Provider value={value}>
        {children}
    </ReviewsContext.Provider>
}
export default ReviewsContext