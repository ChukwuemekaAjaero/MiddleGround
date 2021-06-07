// --------------------- THIS MODULE IS TO STORE THE CONTROLLERS FOR THE MEETING MESSAGES API ROUTES ---------------------

//Get all meeting messages
exports.meeting_messages_list = (req, res) => {
    res.send('NOT IMPLEMENTED: meeting messages GET');
};

//Get all the messages from a meeting using its id
exports.get_meeting_messages_list = (req, res) => {
    res.send('NOT IMPLEMENTED: meeting_id messages GET');
};

//Create a new message from one user to the meeting chat
exports.create_new_meeting_message = (req, res) => {
    res.send('NOT IMPLEMENTED: meeting_id POST from message_from_id');
};

//Get a specific message from the meeting chat
exports.get_meeting_message = (req, res) => {
    res.send('NOT IMPLEMENTED: meeting_id GET message_id');
};

//Delete a specific message from the meeting chat
exports.delete_meeting_message = (req, res) => {
    res.send('NOT IMPLEMENTED: meeting_id DELETE message_id');
};

//Get a specific message's status
exports.get_meeting_message_status = (req, res) => {
    res.send('NOT IMPLEMENTED: meeting_id GET message_id status');
};

//Update a specific message's status
exports.update_meeting_message_status = (req, res) => {
    res.send('NOT IMPLEMENTED: meeting_id PUT message_id status');
};


