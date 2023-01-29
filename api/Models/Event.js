const db = require('../mongoConfig');
const mongoose = require('mongoose');

/* RETURNS Name,Address,Date of a single Event */
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

module.exports = {
    
    getEventInfo,
    getAllEventsInfo

}