module.exports = (type) => (req, res, next) => {
  let time = new Date();
  let utcTime = time.toUTCString();

  if (type === "long") {
    console.log(`
        ${req.method}\n
        ${req.url}\n
        ${utcTime}\n
        ${req.ip}\n   
        ${req.params}     
        `);
    next();
  } else {
    console.log(req);
    return;
  }
};
