export function checkRestaurantOpen() {
  const data = new Date();
  const hora = data.getHours();
  return hora >= 9 && hora < 17;
}