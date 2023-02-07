// search component similar structure to top charts component / page

import axios from 'axios';
import { useSelector } from 'react-redux';
import {Error, Loader, SongCard} from '../components';
import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

import { useParams } from 'react-router-dom';

const Search = () => {

    const { searchTerm } = useParams(); 


    const{activeSong, isPlaying} = useSelector((state) => state.player);


    

    const {data, isFetching, error} = useGetSongsBySearchQuery(searchTerm);

    // get song and song.track for each song
    const songs = data?.tracks?.hits?.map((song)  => song.track);



    if (isFetching) return <Loader title='Fetching Top Charting Songs!'/>;

    if (error) return <Error />;

    return (

        <div className='flex flex-col'>

            <h2 className='text-4xl font-bold text-red-50 text-left mt-4 mb-10'>Search results for <span className='text-red-500'>{searchTerm}</span></h2>

            {/* wrapper div for actual songs  */}

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>

                {/* getting song data near you */}
                {/* for each song returning a song card component  */}
                {songs?.map((song, i) => (
                    <SongCard 
                        data = {data}
                        i = {i}
                        song = {song}
                        key  = {song.key}
                        activeSong = {activeSong}
                        isPlaying = {isPlaying}
                        

                    />
                ))}

            </div>

        </div>
    );
};

export default Search;
