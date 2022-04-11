const GoogleGeolocationService = require("../services/GoogleGeolocationService");

class LocationController {
  async index(request, response) {
    const { locations } = request.params;

    if (!locations) {
      return response.status(400).json({ error: "Locations are required" });
    }
    if (locations.split(";").length < 1) {
      return response
        .status(400)
        .json({ error: "At least two locations are required" });
    }

    const data = await GoogleGeolocationService.getLocation(locations);

    response.json({ data });
  }
}

module.exports = new LocationController();
