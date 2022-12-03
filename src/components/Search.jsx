import { React, useState } from 'react';
import { useGlobalContext } from '../context';

export const Search = ({ changeResults }) => {
  const context = useGlobalContext();
  const [text, setText] = useState('');

  const { setSearchQuery } = useGlobalContext();


  //Handles the change of the search input element
  const handleChange = (e) => {
    setText(e.target.value)
  }

  //On search we will set the searchQuery state to whatever value was in text.
  //This then will set the fetch data only relating to what was searched
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text) {
      setSearchQuery(text);
      console.log(text);
    }


  }




  return (
    <header className="search-container">

      <input type="text" placeholder='type favorite meal' value={text} onChange={handleChange} className='form-input' />
      <button type="submit" onClick={handleSubmit} className='btn'>search</button>

    </header>
  );

};


export default Search;