const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const roles = await tables.role.readAll();
    res.json(roles);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const role = await tables.role.read(req.params.id);
    if (role == null) {
      res.sendStatus(404);
    } else {
      res.json(role);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res, next) => {
  try {
    const affectedRows = await tables.role.edit(req.params.id, req.body);
    if (affectedRows > 0) {
      res.json({ message: "Role updated successfully" });
    } else {
      res.status(404).json({ message: "Role not found" });
    }
  } catch (error) {
    next(error);
  }
};

const add = async (req, res, next) => {
  const role = req.body;
  try {
    const insertId = await tables.item.create(role);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const deleteRole = async (req, res, next) => {
  const { id } = req.params;
  try {
    const success = await tables.role.delete(id);
    if (success) {
      res.json({ message: "Role deleted successfully" });
    } else {
      res.status(404).json({ message: "Role not found" });
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
  deleteRole,
};
