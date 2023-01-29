export default async function aaa(eventid) {

    const result = await fetch("http://localhost:3002/getEvent?eventid="+eventid).then((response) => response.json());

    return result;
}