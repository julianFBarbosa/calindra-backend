const axios = require("axios");

class HttpClient {
  constructor(url) {
    this.url = url;
  }

  async get(path) {
    const encodedURI = encodeURI(`${this.url}${path}`);

    return axios
      .get(encodedURI)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(`API Error: ${error}`);
      });
  }
}

module.exports = HttpClient;
