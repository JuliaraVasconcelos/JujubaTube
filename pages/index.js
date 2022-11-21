import React from "react";
import config from "../config.json"
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import { StyledTimeline } from "../src/components/StyleTimeline";
import { videoService } from "../src/services/videoService";



function HomePage() {
    const service = videoService();
    const [filterValue, setfilterValue] = React.useState('');
    const [playlists, setPlaylists] = React.useState({});

    React.useEffect(()=> {
        console.log('useeffect');
        service
        .getAllVideos()
        .then((data) => {
             console.log(data.data);
             const newPlaylists = { };
             data.data.forEach((video) => {
                 if (!newPlaylists[video.playlist]) newPlaylists[video.playlist] = [];
                 newPlaylists[video.playlist] = [video, ...newPlaylists[video.playlist], ];
             });
             setPlaylists(newPlaylists)
         });
    }, [])
    console.log('playlist pronto', playlists);


    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
}}>
                <Menu filterValue={filterValue} setfilterValue={setfilterValue}/>
                <Header />
                <StyledTimeline>
                    <Timeline searchValue={filterValue} playlists={playlists} />
                </StyledTimeline>
            </div>
        </>
    )
}

export default HomePage