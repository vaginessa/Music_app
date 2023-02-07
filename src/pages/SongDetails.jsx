// gives access to song id in url bar 
import { useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {DetailsHeader, Loader, RelatedSongs, Error} from '../components';

// features from playerSlice
import { setActiveSong, playPause} from "../redux/features/playerSlice.js";

// importing song details query
import { useGetSongDetailsQuery } from "../redux/services/shazamCore.js";


const SongDetails = () => {

    const dispatch = useDispatch();

    // pulling data from state
    const { activeSong, isPlaying} = useSelector((state) => state.player);
    const { songid } = useParams();

    // songid because of route path in 'App.jsx'
    console.log(songid);

    // calling song details query as hook 
    const {data: songData, isFetching: isFetchingSongDetails} = useGetSongDetailsQuery({ songid });
    
    //  jsx
    return (
        
        <div className='flex flex-col'>

            {/* <DetailsHeader songData = {songData} artistId={artistId}/> */}

            <div className='mb-10'>

                <h2 className='text-red-50 text-3xl font-bold'>Lyrics:</h2>

                <div className='mt-5'>

                    {/* looping over the song data */}
                    
                    {/* if there are lyrics => map over them and show the p tags  */}
                    {/* if there are no lyrics => show no lyrics message */}

                   {songData?.sections[1].type === 'LYRICS' ?
                        songData?.sections[1].text.map((line, i)    =>  (
                            <p className="text-red-200 text-base my-1">{line}</p>
                        )) : <p className="text-red-400 text-base my-1">There are no lyrics for this song!</p>}



                </div>

            </div>

        </div>
    
    );
};

export default SongDetails;
