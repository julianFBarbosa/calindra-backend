const LocationRepository = require("../repositories/LocationRepository");
require("dotenv").config();

class GoogleGeolocationService {
  API_KEY = process.env.GOOGLE_API_KEY;

  async getLocation(locations) {
    const locationList = locations.split(",");
    const locationCombinationList = [];

    // for (const i in locationList) {

    // }

    for (let i = 0; i < locationList.length - 1; i++) {
      console.log("i =>", i, "\n");
      for (let j = i + 1; j < locationList.length; j++) {
        locationCombinationList.push({
          primary: locationList[i],
          secondary: locationList[j],
        });
      }
    }

    console.log("locationCombinationList", locationCombinationList);
    console.log("this.API_KEY", this.API_KEY);

    return { API_KEY: this.API_KEY, locationList };
  }
}

module.exports = new GoogleGeolocationService();
