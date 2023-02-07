// importing utility functions from redux toolkit
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'e7882ad2b5mshceaaab4037b7993p1c08c0jsn3c2a8a5cb7c2',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };

// //   base: https://shazam-core.p.rapidapi.com/v1 
// //   endpoint: /charts/world
//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

    // API needs reducer path (same name as api)
    //with below, can now cann in store.js!
    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            // prepares headers before api call
            prepareHeaders: (headers)  =>  { 

                headers.set('X-RapidAPI-Key', 'e7882ad2b5mshceaaab4037b7993p1c08c0jsn3c2a8a5cb7c2');
                return headers;

            },
        }),
        // endpoints below base query. query in endpoint is arrow function that returns string. not string
        endpoints: (builder) => ({
            getTopCharts: builder.query({ query: () =>  '/charts/world'}),
            // adding second api endpoint
            getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        }),
    });

    export const{
        useGetTopChartsQuery,
        useGetSongDetailsQuery,
    } = shazamCoreApi;