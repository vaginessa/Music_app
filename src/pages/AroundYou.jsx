import {useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {Error, Loader, SongCard} from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
    const [country, setCountry] = useState('');
    // loading state
    const [loading, setLoading] = useState(true);

    const{activeSong, isPlaying} = useSelector((state) => state.player);


    console.log(country);

    const {data, isFetching, error} = useGetSongsByCountryQuery(country);

    // use effect hook ran once around you page gets visited 
    useEffect(() => {
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_DOWIXmkG3lUTAuZwAt7z7ZTgiX0nW`)
            .then((res) =>  setCountry(res?.data?.location?.country))
            .catch((err)    =>  console.log(err))
            .finally(() =>  setLoading(false));
        
            //at_DOWIXmkG3lUTAuZwAt7z7ZTgiX0nW

    }, [country]);

    if (isFetching && loading) return <Loader title='finding songs near you' />;

    if (error && country) return <Error />;

    return (

        <div className='flex flex-col'>

            <h2 className='text-4xl font-bold text-red-50 text-left mt-4 mb-10'>Near you
            <span className='font-black'> in the {country}</span></h2>

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
    )
}

export default AroundYou;
