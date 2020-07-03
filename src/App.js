import React, { useState, useEffect } from 'react';
import lastfmService from './services/lastfm';

const Track = ({track}) => {
    const artist = track.artist.name
    const name = track.name
    const imageObj = track.image[0]
    const image = imageObj["#text"]


    return (
        <div>
            {`${name} - ${artist}`}
            <img src={image}></img>
        </div>
    )
}

function App() {
    const [topTracks, setTopTracks] = useState([])
    
    useEffect(() => {
        lastfmService.getTopTracks()
            .then((response) => {
                setTopTracks((response.toptracks.track))
            })
    }, [])

    return (
        <div>
            <h1>Top tracks for</h1>
            {
                topTracks.map((track) => <Track track={track} key={track.mbid}/>)
            }
        </div>
    );
}

export default App;
