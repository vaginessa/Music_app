import {useState} from 'react';

import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';


const Searchbar = () => {

  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const handleSubmit = (event)  => {
    event.preventDefault();

    navigate(`/search/${searchTerm}`);
  }
return (
  <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-300 focus-within:text-gray-500">

    <label htmlFor="search-field" className="sr-only">Searching all the songs</label>

    <div className="flex flex-row justify-start items-center">

      <FiSearch className='w-5 h-5 ml-4'/>

      <input
        name="search-field"
        autoComplete='off'
        placeholder='Search Here'
        id = "search-field"
        type = 'search'
        value = {searchTerm}
        onChange={(event)  =>  setSearchTerm(event.target.value)}
        className = 'flex-1 bg-transparent border-none outline-none placeholder-gray-400 text-base text-red-50 p-4'
      />

    </div>
  
  </form>
)
}

export default Searchbar;
