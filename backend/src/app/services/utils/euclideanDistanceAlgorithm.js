module.exports = function (y1, x1, y2, x2) {
  if (y1 == x2 && x1 == y2) {
    return 0;
  }

  const deltaY = y2 - y1; // latitude
  const deltaX = x2 - x1; // longitude

  const LATITUDE_IN_KM = 110.574;
  const LONGITUDE_IN_KM = 111.32 * Math.cos(deltaY);

  const newDeltaY = deltaY * LATITUDE_IN_KM;
  const newDeltaX = deltaX * LONGITUDE_IN_KM;

  console.log("newDeltaX", newDeltaX);
  console.log("newDeltaY", newDeltaY);

  const result = Math.sqrt(Math.pow(newDeltaX, 2) + Math.pow(newDeltaY, 2));

  return result;
};
