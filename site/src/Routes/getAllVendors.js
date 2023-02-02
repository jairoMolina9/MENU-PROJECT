export default async function getAllVendors(eventid) {

    const result = await fetch("http://localhost:3002/getAllVendorsFromEvent?eventid="+eventid).then((response) => response.json());

    return result;
}