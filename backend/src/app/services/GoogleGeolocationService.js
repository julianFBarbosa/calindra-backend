require("dotenv").config();
const euclideanDistanceAlgorithm = require("./utils/euclideanDistanceAlgorithm");
const HttpClient = require("./utils/HttpClient");
const httpClient = new HttpClient("https://maps.googleapis.com");

const API_KEY = process.env.GOOGLE_API_KEY;

class GoogleGeolocationService {
  async getLocation(locations) {
    const addressList = locations.split(";");
    const geocodedAddressList = [];
    const resolvedAddresList = [];

    for (let i = 0; i < addressList.length; i++) {
      const address = addressList[i];
      const addressData = await this.parseAddress(address);
      const city_name = await addressData.address_components[0].short_name;
      const { lat, lng } = await addressData.geometry.location;

      geocodedAddressList.push({
        city_name,
        lat,
        lng,
      });
    }

    for (let i = 0; i < geocodedAddressList.length - 1; i++) {
      for (let j = i + 1; j < geocodedAddressList.length; j++) {
        const {
          lat: latitude_1,
          lng: longitude_1,
          city_name: city_name_1,
        } = geocodedAddressList[i];
        const {
          lat: latitude_2,
          lng: longitude_2,
          city_name: city_name_2,
        } = geocodedAddressList[j];

        const distanceBetween = euclideanDistanceAlgorithm(
          latitude_1,
          longitude_1,
          latitude_2,
          longitude_2
        );

        resolvedAddresList.push({
          city_from: city_name_1,
          city_to: city_name_2,
          distance_between: distanceBetween,
        });
      }
    }

    const sortedAddresList = [...resolvedAddresList].sort((a, b) => {
      if (a.distance_between < b.distance_between) {
        return -1;
      }

      if (a.distance_between > b.distance_between) {
        return 1;
      }

      return 0;
    });

    const nearestCity = sortedAddresList[0];
    const furthestCity = sortedAddresList[sortedAddresList.length - 1];

    return {
      address_list: resolvedAddresList,
      nearest_city: nearestCity,
      furthest_city: furthestCity,
    };
  }

  async parseAddress(address) {
    const request = await httpClient.get(
      `/maps/api/geocode/json?address=${address}&key=${API_KEY}`
    );
    return request.results[0];
  }
}

module.exports = new GoogleGeolocationService();
