// imports
//components are divs that say component name
import {Error, Loader, SongCard} from '../components';
import{genres} from '../assets/constants';


const Discover = () => {
    //console logg
    console.log(genres);

    //hardcoding genre title
    const genreTitle = 'Electric';


    return(
        <div className='flex flex-col'>

            <div className='w-full flex justify-between items-center sm:flex-row
            flex-col mt-4 mb-10'>

                <h2 className='font-bold text-3xl text-red-100 text-left'>Discover {genreTitle}</h2>
                {/* genre select */}
                <select
                    onChange={()    =>  {}}
                    value = ''
                    className='bg-black text-gray-200 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5'
                >
                    {genres.map((genre) =>  <option>{genre.title}</option>)}
                </select>

            </div>

        </div>
    );
};

export default Discover;
