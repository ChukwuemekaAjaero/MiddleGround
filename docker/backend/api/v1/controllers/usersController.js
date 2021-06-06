// --------------------- THIS MODULE IS TO STORE THE CONTROLLERS FOR THE USERS API ROUTES ---------------------

//Get all users
exports.users_list = (req, res) => {
    res.send('NOT IMPLEMENTED: users GET');
};

//Get a user by ID
exports.user_by_id = (req, res) => {
    res.send('NOT IMPLEMENTED:  users GET by Id');
};

//Register a new user
exports.register_user = (req, res) => {
    res.send('NOT IMPLEMENTED: user POST');
};

//Delete an existing user
exports.delete_user = (req, res) => {
    res.send('NOT IMPLEMENTED: user DELETE');
};

//Change an existing user's role
exports.update_user_role = (req, res) => {
    res.send('NOT IMPLEMENTED: user PUT role');
};

//Change an existing user's
exports.update_user_status = (req, res) => {
    res.send('NOT IMPLEMENTED: user PUT status');
};

//Change an existing user's password
exports.update_user_password = (req, res) => {
    res.send('NOT IMPLEMENTED: user PUT password');
};

//Change a user's username
exports.update_user_username = (req, res) => {
    res.send('NOT IMPLEMENTED: user PUT username');
};

//Change a user's first name
exports.update_user_first_name = (req, res) => {
    res.send('NOT IMPLEMENTED: user PUT first name');
};

//Change a user's last name
exports.update_user_last_name = (req, res) => {
    res.send('NOT IMPLEMENTED: user PUT last name');
};