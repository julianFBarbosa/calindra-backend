const { Router } = require("express");

const LocationController = require("./app/controllers/LocationController");

const router = Router();

router.get("/v1/:locations/:locations", LocationController.index);

module.exports = router;
