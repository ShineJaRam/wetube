const join = (req, res) => {
  return res.send("Join");
};

const edit = (req, res) => {
  return res.send("Edit User");
};

const remove = (req, res) => {
  return res.send("Remove User");
};

export { join, edit, remove };
