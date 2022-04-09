const LocationRepository = require("../repositories/LocationRepository");
const GoogleGeolocationService = require("../services/GoogleGeolocationService");

class LocationController {
  async index(request, response) {
    const { locations } = request.params;
    const locationList = locations.split(",");

    GoogleGeolocationService.getLocation(locations);
    response.json({ locationList });
  }
}

module.exports = new LocationController();
