import React from "react";
import config from "../config.json"
import Header from "../src/components/Header";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/StyleTimeline";

function HomePage() {

    const [filterValue, setfilterValue] = React.useState('');

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
                    <Timeline searchValue={filterValue} playlists={config.playlists} />
                </StyledTimeline>
            </div>
        </>
    )
}

export default HomePage