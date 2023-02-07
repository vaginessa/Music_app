
import axios from 'axios';
import { useSelector } from 'react-redux';
import {Error, Loader, SongCard} from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const TopCharts = () => {


    const{activeSong, isPlaying} = useSelector((state) => state.player);


    

    const {data, isFetching, error} = useGetTopChartsQuery();



    if (isFetching) return <Loader title='Getting top of the charts song' />;

    if (error) return <Error />;

    return (

        <div className='flex flex-col'>

            <h2 className='text-4xl font-bold text-red-50 text-left mt-4 mb-10'>Find Top Charts</h2>

            {/* wrapper div for actual songs  */}

            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>

                {/* getting song data near you */}
                {/* for each song returning a song card component  */}
                {data?.map((song, i) => (
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

export default TopCharts;
