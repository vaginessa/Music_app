import {Link} from 'react-router-dom';



const DetailsHeader = ({artistId, songData, artistData}) => {

  const artist = artistData?.artists[artistId]?.attributes;

return (
  <div className='relative w-full flex flex-col'>

    <div className='w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28'/>

    <div className='absolute inset-0 flex items-center'>

      <img
      className='sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-blue-300' 
      alt = 'artist img'
      src={artistId ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500')
      :songData?.images?.coverart}
      />

      <div className='ml-5'>

        <p className='sm:text-2xl text-xl text-red-100 font-bold'>{artistId ? artist?.name : songData?.title}</p>

        {/* below is only if in song details page not artist details page */}
        {!artistId && (
          
          <Link to={`/artists/${songData?.artists[0].adamid}`}>

            <p className='text-gray-300 mt-2 text-base'>{songData?.subtitle}</p>         
          
          </Link>
        
        )}

        <p className='text-gray-300 mt-2 text-base'>
          {artistId
            ? artist?.genreNames[0]
            : songData?.genres?.primary
          }
        </p>

      </div>

    </div>

    <div className='sm:h-44 h-23 w-full'/>

  </div>
)
}

export default DetailsHeader;
