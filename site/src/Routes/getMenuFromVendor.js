export default async function getAllVendors(params) {

    const result = await fetch("http://localhost:3002/getMenuFromVendor?vendorid="+params.vendorid+"&eventid="+params.eventid).then((response) => response.json());
    console.log(result);
    return result;
}