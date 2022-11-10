import React from "react"; 

function Timeline(props) {

    const playlistNames = Object.keys(props.playlists)
    return (
        <div>
            {playlistNames.map((playlistNames)=>{
            const videos = props.playlists[playlistNames]
            return (
                <section>
                    <h2>{playlistNames}</h2>
                    <div>
                        {videos.map((videos) => {
                            return (
                                <a href={videos.url}>
                                    <img src={videos.thumb} />
                                    <span>
                                        {videos.title}
                                    </span>
                                </a>
                            )
                        })}
                    </div>
                </section>
            )
        })}
        </div>
    )
}

export default Timeline