const layout = [
  [
    { type: "VIP", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "VIP", booked: true },
    { type: "VIP", booked: false },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "NORMAL", booked: false },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: true },
    { type: "NORMAL", booked: true },
    { type: "NORMAL", booked: true },
    { type: "ECONOMIC", booked: false },
  ],
  [
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: true },
    { type: "ECONOMIC", booked: false },
    { type: "ECONOMIC", booked: false },
  ],
];

function getSeat(str, num) {
  var rowIndex = getRowNumber(str); //indice fila
  var columns = layout[rowIndex]; //columnas de la fila
  var seat = columns[num]; //silla en la columna especifica

  return seat; //devuelve la silla
}

function checkSeatStatus(str, num) {
  if (typeof str !== "string")
    throw new TypeError("First parameter is not a string");

  if (typeof num !== "number")
    throw new TypeError("Second parameter is not a number");

  var seat = getSeat(str, num);

  return seat.booked; //true - false
}

function getRowNumber(letter) {
  return letter.charCodeAt() - 65; //0 - 4
}

function book(str, num) {
  if (checkSeatStatus(str, num))
    return "Seat in " + str + num + " already booked";

  var seat = getSeat(str, num);
  seat.booked = true; //reservamos la silla

  return "Seat in " + str + num + " successfully booked";
}

module.exports = {
  checkSeatStatus,
  getRowNumber,
  book,
};
