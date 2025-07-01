// A new way of creating a context  

import { createContext, useContext } from "react";
import React from "react";

const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {} 
});

export const ThemeProvider = ThemeContext.Provider  // wrapper is created 

// Building and exporting custom hooks

export default function useTheme(){ 
    return useContext(ThemeContext); 
}