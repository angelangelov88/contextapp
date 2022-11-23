import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  // const [isLightTheme, setIsLightTheme] = useState(false);
  const [light, setLight] = useState({ syntax: '#555', ui: '#ddd', bg: '#eee' });
  const [dark, setDark] = useState({ syntax: '#ddd', ui: '#333', bg: '#555' });

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  }
  return ( 
    <ThemeContext.Provider
      value={{
        light,
        dark,
        isLightTheme,
        toggleTheme
      }}
    >
      { children }
    </ThemeContext.Provider>
   );
}
 
export default ThemeContextProvider;