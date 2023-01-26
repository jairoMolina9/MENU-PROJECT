export default function Test(props) {
    const message = props.message;
    return (
<div>
<h1> {message.name} </h1>
<h1> {message.cuisine} </h1>
<h1> {message.borough} </h1>
</div>
    );
}