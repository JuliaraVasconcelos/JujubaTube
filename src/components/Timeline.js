import React from "react"; 

function Timeline({searchValue, ...props}) {

    const playlistNames = Object.keys(props.playlists);
    // const favorites = Object.keys(props.favorites);
    const filterValue = 'frost'
    return (
        <div>
            {playlistNames.map((playlistNames)=>{
            const videos = props.playlists[playlistNames]
            return (
                <section key={playlistNames}>
                    <h2>{playlistNames}</h2>
                    <div>
                        {videos.filter((video)=> {
                            const titleNormalized = video.title.toLowerCase()
                            const searchValueNormalized = searchValue.toLowerCase()
                            return titleNormalized.includes(searchValueNormalized)
                        }).map((videos) => {
                            return (
                                <a key={videos.url} href={videos.url}>
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
        })},
    
        </div>
    )
}

export default Timeline