import {useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

// swiper for different artist profiles 
import {Swiper, SwiperSlide} from 'swiper/react';

// css modules for swiper
import 'swiper/css';
import 'swiper/css/free-mode';

import PlayPause from './PlayPause';
import {playPause, setActiveSong} from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { FreeMode } from 'swiper';

const TopChartCard = ({song, i}) => (

  <div className='w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2'>

    {/* rendering song title */}
    {song.title}

  </div>
);

const TopPlay = () => {
  // initializing states
  const dispatch = useDispatch();
  const {activeSong, isPlaying} = useSelector((state) => state.player);
  const {data} = useGetTopChartsQuery();
  const divRef = useRef(null);

  const topPlays = data?.slice(0,5);

  // when reloading the app it scrolls down so fix below:
  useEffect(() => {
    divRef.current.scrollIntoView({behavior: 'smooth' });
  });

  const handlePauseClick = () => {
    dispatch(playPause(false));

  };

  const handlePlayClick = ()  => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));

  };

  // creating jsx
  return(
    <div className='xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col' ref={divRef}>

      <div className='w-full flex flex-col'>

        <div className='flex flex-row justify-between items-center'>

          <h2 className='text-red-200 font-bold text-2xl'>Top Charts</h2>

          <Link to='/top-charts'>

            <p className='text-gray-200 text-base cursor-pointer'>See more</p>
          
          </Link>

        </div>

        <div className='mt-4 flex flex-col gap-1'>

          {/* mapping over the top songs/plays */}

          {topPlays?.map((song,i) => (
            <TopChartCard 
              song={song}
              key={song.key}
              i={i}
            />
          ))}

        </div>

      </div>


      <div className='w-full flex flex-col mt-8'>

        <div className='flex flex-row justify-between items-center'>

        <h2 className='text-red-200 font-bold text-2xl'>Top Artists</h2>

        <Link to='/top-artists'>

          <p className='text-gray-200 text-base cursor-pointer'>See more</p>

        </Link>

        </div>

        <Swiper slidesPerView='auto' spaceBetween={15} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]}
        className='mt-4'>

          {/* looping over top plays */}

          {topPlays?.map((song, i) => (
            <SwiperSlide
              key={song?.key}
              style={{width: '25%', height: 'auto'}}
              className='shadow-lg rounded-full animate-slideright'
            >
              <Link to={`/artists/${song?.artists[0].adamid}`}>
                <img src={song?.images.background} alt='name' className='rounded-full w-full object-cover'/>
              </Link>

            </SwiperSlide>
          ))}


        </Swiper>

      </div>

      
      
    </div>
  );
};

export default TopPlay;
