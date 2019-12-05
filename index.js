module.exports = multiply;

function multiply(a, b) {
  if (!a || !b) {
    throw new Error('Missing parameters');
  }
  return a * b;
}
