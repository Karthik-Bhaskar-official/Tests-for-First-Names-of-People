const result = require("../country/state/city/index.js");
const final = require("../utilities/utils/index.js");

const getPeopleInCity = (result) => {
  return final(result);
};

module.exports = getPeopleInCity;
