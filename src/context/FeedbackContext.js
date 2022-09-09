import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [rating, setRating] = useState(-1);
    return (
        <FeedbackContext.Provider value={{
            rating,
            setRating
        }}>
            {children}
        </FeedbackContext.Provider>
    );
}
export default FeedbackContext;