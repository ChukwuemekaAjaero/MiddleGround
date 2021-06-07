// --------------------- THIS MODULE IS TO STORE THE CONTROLLERS FOR THE DIRECT MESSAGES API ROUTES ---------------------

exports.direct_messages_list = (req, res) => {
    //This should check who's making the request and if they have authorisation.
    res.send('NOT IMPLEMENTED: direct messages GET');
};

//Get all the messages from a user to another user
exports.direct_messages_user_to_user_list = (req, res) => {
    /*
   * An interesting thing to think about here is how to "lazy load" the messages. You wouldn't want to load every single
   * message all at once when that's not what's needed.
   * https://stackoverflow.com/questions/53241157/how-to-add-query-parameters-to-router-get
   * */
    res.send('NOT IMPLEMENTED: message from -> to GET');
};

//Create a new message from one user to another
exports.create_new_direct_message = (req, res) => {
    res.send('NOT IMPLEMENTED: message from -> to POST');
};

//Get a specific message from its ID.
exports.get_direct_message = (req, res) => {
    res.send('NOT IMPLEMENTED: message_id GET');
};

//Delete a specific message
exports.delete_direct_message = (req, res) => {
    res.send('NOT IMPLEMENTED: message_id DELETE');
};

//Get a message's status
exports.get_direct_message_status = (req, res) => {
    res.send('NOT IMPLEMENTED: message_id GET status');
};

//Update a message's status
exports.update_direct_message_status = (req, res) => {
    res.send('NOT IMPLEMENTED: message_id PUT status');
};


