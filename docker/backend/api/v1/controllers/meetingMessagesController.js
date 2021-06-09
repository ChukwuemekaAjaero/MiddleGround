// --------------------- THIS MODULE IS TO STORE THE CONTROLLERS FOR THE MEETING MESSAGES API ROUTES ---------------------

// Get all meeting messages
exports.meetingMessagesList = (req, res) => {
  res.send('NOT IMPLEMENTED: meeting messages GET')
}

// Get all the messages from a meeting using its id
exports.getMeetingMessagesList = (req, res) => {
  res.send('NOT IMPLEMENTED: meeting_id messages GET')
}

// Create a new message from one user to the meeting chat
exports.createNewMeetingMessage = (req, res) => {
  res.send('NOT IMPLEMENTED: meeting_id POST from message_from_id')
}

// Get a specific message from the meeting chat
exports.getMeetingMessage = (req, res) => {
  res.send('NOT IMPLEMENTED: meeting_id GET message_id')
}

// Delete a specific message from the meeting chat
exports.deleteMeetingMessage = (req, res) => {
  res.send('NOT IMPLEMENTED: meeting_id DELETE message_id')
}

// Get a specific message's status
exports.getMeetingMessageStatus = (req, res) => {
  res.send('NOT IMPLEMENTED: meeting_id GET message_id status')
}

// Update a specific message's status
exports.updateMeetingMessageStatus = (req, res) => {
  res.send('NOT IMPLEMENTED: meeting_id PUT message_id status')
}
