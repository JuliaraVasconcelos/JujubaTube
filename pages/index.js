import React from "react";
import config from "../config.json"
import Header from "../components/Header";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";
import { CSSReset } from "../components/CSSReset";
import { StyledTimeline } from "../components/StyleTimeline";

function HomePage() {
    const estilosHomePage = { 
        display: "flex",
        flexDirection: "column",
        flex: 1,
    };
    return (
        <>
        <CSSReset/>
        <div style={estilosHomePage}>
        <Menu/>
        <Header/>
        <StyledTimeline>

        <Timeline playlists={config.playlists}/>
        </StyledTimeline>
        </div>
        </>
    )
}

export default HomePage