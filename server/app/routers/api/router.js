const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");

router.use("/items", itemsRouter);

const rolesRouter = require("./roles/router");

router.use("/roles", rolesRouter);

const servicesRouter = require("./services/router");

router.use("/services", servicesRouter);

const activitytypesRouter = require("./activitytypes/router");

router.use("/activitytypes", activitytypesRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);

const activitiesRouter = require("./activities/router");

router.use("/activities", activitiesRouter);

const participationsRouter = require("./participations/router");

router.use("/participations", participationsRouter);

/* ************************************************************************* */

module.exports = router;
