// Import access to database tables
const tables = require("../../database/tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all activitys from the database
    const activities = await tables.activity.readAll();

    // Respond with the activitys in JSON format
    res.json(activities);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific activity from the database based on the provided ID
    const activity = await tables.activity.read(req.params.id);

    // If the activity is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the activity in JSON format
    if (activity == null) {
      res.sendStatus(404);
    } else {
      res.json(activity);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const affectedRows = await tables.activity.edit(req.params.id, req.body);
    if (affectedRows > 0) {
      res.json({ message: "Activity updated successfully" });
    } else {
      res.status(404).json({ message: "Activity not found" });
    }
  } catch (error) {
    next(error);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the activity data from the request body
  const activity = req.body;

  try {
    // Insert the activity into the database
    const insertId = await tables.activity.create(activity);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted activity
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const deleteActivity = async (req, res, next) => {
  const { id } = req.params;
  try {
    const success = await tables.activity.delete(id);
    if (success) {
      res.json({ message: "Activity deleted successfully" });
    } else {
      res.status(404).json({ message: "Activity not found" });
    }
  } catch (error) {
    next(error);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  deleteActivity,
};
