import { useNavigate } from "react-router-dom";


export default function Error() {
    const navigate = useNavigate();

    return(
        <div id="Error">
            <button onClick={() => navigate("/")}> Home </button>
            <h1>ERROR NO URL FOUND</h1>
        </div>
    );
}

