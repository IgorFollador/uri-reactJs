
export default function LoginForm({setUserName}) {

    let login = (event) => {
        event.preventDefault();
        console.log('Submit...');
    }
 
    return (
        <div>
            <form id="loginFake" onSubmit={login}>

                <div className="el">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" name="name" onChange={(event)=>{setUserName(event.target.value)}}/>
                </div>
                <div className="el">
                    <label for="game">Jogo:</label>
                    <input type="text" id="game" name="game" />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}