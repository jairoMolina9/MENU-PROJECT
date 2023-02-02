const db = require('../mongoConfig');
const mongoose = require('mongoose');

/** RETURNS Name,Address,Date of a single Event */
async function getEventInfo(eventID) {
    
    var objectEventID = -1;

    try{
        objectEventID = mongoose.Types.ObjectId(eventID);
    } catch {
        return ("error");
    }

    const result = await db.get().collection('Events').find({_id: objectEventID}).project({Vendors: false}).toArray();

    return result[0];
}

/* RETURNS Name,Address,Date of all Events */
async function getAllEventsInfo() {

    const result = await db.get().collection('Events').find().project({Vendors: false}).toArray();

    return result;
}

async function getAllVendorsFromEvent(eventID) {
    var objectEventID = -1;

    try{
        objectEventID = mongoose.Types.ObjectId(eventID);
    } catch {
        return ("error");
    }
    
    const result = await db.get().collection('Events').find({_id: objectEventID}).project({Vendors: true}).toArray();
 
    return result[0];
}

async function getMenuFromVendor(eventID, vendorID) {

    var objectEventID = -1;
    var objectVendorID = -1;
    var Menu = null;

    try{
        objectEventID = mongoose.Types.ObjectId(eventID);
        objectVendorID = mongoose.Types.ObjectId(vendorID);
    } catch {
        return ("error");
    }

    const result = await db.get().collection('Events').find({_id: objectEventID}).project({Vendors: true}).toArray();

    for(var i = 0; i < result[0].Vendors.length; i++) {
        if(result[0].Vendors[i]._id.equals(objectVendorID)){
            Menu = result[0].Vendors[i].Menu;
        }
    }
    
    return Menu;
}

module.exports = {
    
    getEventInfo,
    getAllEventsInfo,
    getAllVendorsFromEvent,
    getMenuFromVendor

}