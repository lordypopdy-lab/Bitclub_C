import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const TokenContext = createContext({});

export function TokenContextProvider({ children }) {
    const [tokens, setToken] = useState(null);
    useEffect(() => {
        try {
            if (!tokens) {
                axios.get('/api/tokens').then(({ data }) => {
                    setToken(data);
                })
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }, [])

    return (
        <TokenContext.Provider value={{ tokens, setToken }}>
            {children}
        </TokenContext.Provider>
    )
}