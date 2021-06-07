// --------------------- THIS MODULE IS TO STORE THE CONTROLLERS FOR THE DIRECT MESSAGES API ROUTES ---------------------

//Get all group messages
exports.group_messages_list = (req, res) => {
    res.send('NOT IMPLEMENTED: group messages GET');
};

//Get all the messages from a group using its id
exports.get_group_messages_list = (req, res) => {
    /*
  * An interesting thing to think about here is how to "lazy load" the messages. You wouldn't want to load every single
  * message all at once when that's not what's needed.
  * https://stackoverflow.com/questions/53241157/how-to-add-query-parameters-to-router-get
  * */
    res.send('NOT IMPLEMENTED: group_id messages GET');
};

//Create a new message from one user to the group
exports.create_new_group_message = (req, res) => {
    res.send('NOT IMPLEMENTED: group_id POST from message_from_id');
};

//Get a specific message from the group
exports.get_group_message = (req, res) => {
    res.send('NOT IMPLEMENTED: group_id GET message_id');
};

//Delete a specific message from the group
exports.delete_group_message = (req, res) => {
    res.send('NOT IMPLEMENTED: group_id DELETE message_id');
};

////Get a specific message's status
exports.get_group_message_status = (req, res) => {
    res.send('NOT IMPLEMENTED: group_id GET message_id status')
}

//Update a specific message's status
exports.update_group_message_status = (req, res) => {
    res.send('NOT IMPLEMENTED: group_id PUT message_id status');
};



