import React from "react";
import { createClient } from "@supabase/supabase-js";
import { StyledRegisterVideo } from "./styles";

function useForm(propsDoForm) {
    const [values, setValues] = React.useState(propsDoForm.initialValues);

    return {
        values,
        handleChange: (event) => {
            console.log(event.target);
            const value = event.target.value;
            const name = event.target.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({});
        }
    };
}

const PROJECT_URL = 'https://sykiwanugavjntexbtyd.supabase.co'
const PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5a2l3YW51Z2F2am50ZXhidHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkwMzcxNjMsImV4cCI6MTk4NDYxMzE2M30.23gBUyUtHHmjT55-7HbaV4agnE6SqN-AI7lShnECGog'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

// get youtube thumbnail from video url
function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1].split("&ab")[0]}/hqdefault.jpg`;
}

export default function RegisterVideo() {

    const refreshPage = () => { window.location.reload(); };
    const formRegister = useForm({
        initialValues: { titulo: "", url: "" }
    });
    const [formVisible, setFormVisible] = React.useState(false);

    return(
        <StyledRegisterVideo>
            <button className="add-video" onClick={()=> setFormVisible(true)}>+</button>
            {formVisible ? (
                <form onSubmit={(event) => {
                    event.preventDefault();
                    console.log(formRegister.values);

                    supabase.from('video').insert({
                        title: formRegister.values.titulo,
                        url: formRegister.values.url,
                        thumb: getThumbnail(formRegister.values.url),
                        playlist: "Favorites",
                    })
                    .then((whatcames)=>{console.log(whatcames);})
                    .catch((err)=>{console.log(err);})
                    setFormVisible(false);
                    formRegister.clearForm();
                }}>
                    <div>
                        <button type="button" className="close-modal" onClick={() => setFormVisible(false)}>X</button>
                        <input placeholder="Titulo do video" name="titulo"
                            value={formRegister.values.titulo}
                            onChange={formRegister.handleChange} />
                        <input placeholder="URL" name="url"
                            value={formRegister.values.url}
                            onChange={formRegister.handleChange} />
                        <button type="submit" onClick={refreshPage}>Cadastrar</button>
                    </div>
                </form>
            ): false}
        </StyledRegisterVideo>
    )
}