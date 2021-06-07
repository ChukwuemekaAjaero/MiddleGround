// --------------------- THIS MODULE IS TO STORE THE CONTROLLERS FOR THE QUESTIONS API ROUTES ---------------------

//Home Path
exports.get_questions_list = (req, res) => {
    res.send('NOT IMPLEMENTED: questions GET');
};

//Get question by ID
exports.get_question = (req, res) => {
    res.send('NOT IMPLEMENTED: questions GET by id');
};

//Create a question
exports.create_new_question = (req, res) => {
    res.send('NOT IMPLEMENTED: question POST created');
};

//Update a question
exports.update_question = (req, res) => {
    res.send('NOT IMPLEMENTED: question PUT updated');
};

//Delete a question
exports.delete_question = (req, res) => {
    res.send('NOT IMPLEMENTED: question DELETE');
};

//Get tags relating to a question
exports.get_question_tags = (req, res) => {
    res.send('NOT IMPLEMENTED: questions GET tags');
};

//Update a question's tag
exports.update_question_tags  = (req, res) => {
    res.send('NOT IMPLEMENTED: questions POST tags');
};