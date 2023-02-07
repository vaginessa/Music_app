
// similar structure to the top charts file 

import axios from 'axios';
import {Error, Loader, ArtistCard} from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopArtists = () => {

    const {data, isFetching, error} = useGetTopChartsQuery();



    if (isFetching) return <Loader title='Loading Top Global Artists' />;

    if (error) return <Error />;

    return (

        <div className='flex flex-col'>

            <h2 className='text-4xl font-bold text-red-50 text-left mt-4 mb-10'>Find Top Artists</h2>

            {/* wrapper div for actual songs  */}

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>

                {/* no longer a song but a track */}

                {data?.map((track) => (
                    <ArtistCard 
                        track = {track} 
                        key  = {track.key}
                
                    />
                ))}

            </div>

        </div>
    );
};

export default TopArtists;
