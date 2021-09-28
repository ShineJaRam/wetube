const join = (req, res) => {
  return res.send("Join");
};

const edit = (req, res) => {
  return res.send("Edit User");
};

const remove = (req, res) => {
  return res.send("Remove User");
};

const login = (req, res) => {
  return res.send("Login");
}

const logout = (req, res) => {
  return res.send("Log Out")
}

const see = (req, res) => {
  return res.send("See")
}

export { join, edit, remove, login, logout, see };
