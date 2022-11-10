import React from "react";
import config from "../config.json";
import styled from "styled-components"


function Header() {
    const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info{
        margin-top: 4rem;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 1rem 2rem;
        gap: 1rem;
    }
`; 
    return (
        <StyledHeader>
        {/* <img src="banner"/> */}
        <section className="user-info">
        <img src={`https://github.com/${config.github}.png`}/>
        <div>
        <h2>
        {config.name}
        </h2>
        <p>
        {config.description}
        </p>
        </div>
        </section>
        </StyledHeader>
    )
}

export default Header