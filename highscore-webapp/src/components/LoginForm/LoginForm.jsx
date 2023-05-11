import { useState } from "react";

export default function LoginForm({userName, setUserName}) {

    const [inputName, setInputName] = useState(userName);

    let login = (event) => {
        event.preventDefault();
        setUserName(inputName);
        console.log('Submit...');

        let parent = event.target;
        parent.style.display = 'none';
    }
 
    return (
        <div>
            <form id="loginFake" onSubmit={login}>

                <div className="el">
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" name="name" onChange={(event)=>{setInputName(event.target.value)}}/>
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}