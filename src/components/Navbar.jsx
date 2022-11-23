import { ThemeContext } from "../contexts/ThemeContext";
import classNames from 'classnames';
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

const Navbar = () => {
  const {
    light,
    dark,
    isLightTheme
    } = useContext(ThemeContext);

    const {
      isAuthenticated,
      toggleAuth,
    } = useContext(AuthContext);

    const theme = isLightTheme ? light : dark;
    const classes = classNames(
      'p-1.5',
      `bg-[${theme.ui}] text-[${theme.syntax}]`,
      // theme === 'light' ? 'bg-[#ddd] text-[#555]' : 'bg-[#333] text-[#ddd]'

    );

  return ( 
    <nav className={classes}>
      <h1 className="text-xl font-bold">Context App</h1>
      <div onClick={() => toggleAuth()}>
        { isAuthenticated ? 'Logged In' : 'Logged Out' }
      </div>
      <ul className="p-0">
        <li className="inline-block my-0 mx-2">Home</li>
        <li className="inline-block my-0 mx-2">About</li>
        <li className="inline-block my-0 mx-2">Contact</li>
      </ul>
    </nav>
      );
}
 
export default Navbar;
