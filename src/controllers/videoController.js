const trending = (req, res) => {
  return res.render("home");
};

const see = (req, res) =>  res.render('watch');

const edit = (req, res) => {
  console.log(req.params)
  return res.send("Edit");
};

const search = (req, res) => {
  return res.send("Search")
}

const upload = (req, res) => {
  return res.send("Upload");
}

const deleteVideo = (req, res) => {
  console.log(req.params)
  return res.send("Delete")
}

export { trending, see, edit, search, upload, deleteVideo };
