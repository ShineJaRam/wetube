const trending = (req, res) => {
  return res.send("Home Page Videos");
};

const watch = (req, res) => {
  return res.send("Watch");
};

const edit = (req, res) => {
  return res.send("Edit");
};

export { trending, watch, edit };
