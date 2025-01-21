import { createContext, useState, useEffect } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [response, setResponse] = useState(null); 
    const [loading, setLoading] = useState(false);  
    const [error, setError] = useState(null);       

    const onSent = async (prompt) => {
        setLoading(true);
        setError(null);

        try {
            const result = await run(prompt);  
            setResponse(result);
        } catch (err) {
            setError("Error fetching data.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        
        onSent("What is react js ?");
    }, []);

    const contextValue = {
        response,
        loading,
        error,
        onSent,  // Providing the function so it can be used by consumers
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
