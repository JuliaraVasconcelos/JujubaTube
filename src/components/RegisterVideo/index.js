import React from "react";
import { StyledRegisterVideo } from "./styles";

export default function RegisterVideo() {
    const [formVisible, setFormVisible] = React.useState(false);

    return(
        <StyledRegisterVideo>
            <button className="add-video" onClick={()=> setFormVisible(true)}>+</button>
            {formVisible ? (
                <form>
                    <div>
                        <button className="close-modal" onClick={() => setFormVisible(true)}>X</button>
                        <input placeholder="Titulo do video" />
                        <input placeholder="URL" />
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            ): false}
        </StyledRegisterVideo>
    )
}