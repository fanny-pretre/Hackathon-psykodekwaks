// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all participations from the database
    const participations = await tables.participation.readAll();

    // Respond with the participations in JSON format
    res.json(participations);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific participation from the database based on the provided ID
    const participation = await tables.participation.read(req.params.id);

    // If the participation is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the participation in JSON format
    if (participation == null) {
      res.sendStatus(404);
    } else {
      res.json(participation);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the participation data from the request body
  const participation = req.body;

  try {
    // Insert the participation into the database
    const insertId = await tables.participation.create(participation);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted participation
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
