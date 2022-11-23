import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import classNames from 'classnames';
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const {
    light,
    dark,
    isLightTheme
  } = useContext(ThemeContext);

  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  const classes = classNames(
    'p-5 mb-5',
    `bg-[${theme.bg}]`,
    // theme === light ? 'bg-[#eee] text-[#555]' : 'bg-[#555] text-[#ddd]',
    `text-[${theme.syntax}]`,
    
  );

  const liClasses = classNames(
    'p-2.5 my-2.5 mx-auto rounded-lg',
    `bg-[${theme.ui}]`,
  );

  return ( 
    <div className={classes}>
      <ul className="p-0 list-none">
      {books.map(book => {
        return (
        <li className={liClasses} key={book.id}>{ book.title }</li>

        )
      })}
      </ul>
    </div>
   );
}
 
export default BookList;