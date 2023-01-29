export default async function getAllEvents() {

    const result = await fetch("http://localhost:3002/getAllEvents").then((response) => response.json());

    return result;
}