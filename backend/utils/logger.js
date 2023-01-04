const NODE_ENV = process.env.NODE_ENV || 'development';

const info = (...params) => {
  if (NODE_ENV === 'development') {
    console.log(...params);
  }
  return
}
const error = (...params) => {
  if (NODE_ENV === 'development') {
    console.error(...params);
  }
  return
}
module.exports = {
  info,
  error
}