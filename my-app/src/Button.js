    // const handleClick = async (param1) => {
    //     await fetch("http://localhost:3002/getName?name="+param1)
    //     .then((response) => response.json())
    //     .then((data) => setMessage(data.message));
    //   }

export default function Button(props) {
    
    const setMessage = props.setName;

        const handleClick = async (param1) => {
        await fetch("http://localhost:3002/getName?name="+param1)
        .then((response) => response.json())
        .then((data) => setMessage(data.message));
      }

    return (
        <button onClick={()=>handleClick(props.value)}> {props.value} </button>
        //<button> {props.value}</button>
    );
}