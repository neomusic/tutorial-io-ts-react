module.exports = () => {
  const configJson = require(`./../config/${process.env.NODE_ENV}.json`);
  process.env = Object.assign({}, process.env, configJson);
};
