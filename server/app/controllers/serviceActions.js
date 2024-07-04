const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const services = await tables.service.readAll();
    res.json(services);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const service = await tables.service.read(req.params.id);

    if (service == null) {
      res.sendStatus(404);
    } else {
      res.json(service);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const affectedRows = await tables.service.update(req.params.id, req.body);
    if (affectedRows > 0) {
      res.json({ message: "Service updated successfully" });
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const service = req.body;

  try {
    const insertId = await tables.service.create(service);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const deleteService = async (req, res, next) => {
  const { id } = req.params;
  try {
    const success = await tables.service.delete(id);
    if (success) {
      res.json({ message: "Service deleted successfully" });
    } else {
      res.status(404).json({ message: "Service not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  deleteService,
};
