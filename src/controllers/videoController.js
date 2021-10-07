const videos = [
  {
    title: 'first Video',
    rating: 5,
    comments: 2,
    createdAt: '2 Minutes ago',
    views: 1,
    id: 1,
  },
  {
    title: '2 Video',
    rating: 5,
    comments: 2,
    createdAt: '2 Minutes ago',
    views: 59,
    id: 2,
  },
  {
    title: '3 Video',
    rating: 5,
    comments: 2,
    createdAt: '2 Minutes ago',
    views: 59,
    id: 3,
  },
];

const trending = (req, res) => {
  return res.render('home', { pageTitle: 'Home', videos });
};

const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];

  return res.render('watch', { pageTitle: `Watching ${video.title}`, video });
};

const edit = (req, res) => {
  console.log(req.params);
  return res.send('Edit');
};

const search = (req, res) => {
  return res.send('Search');
};

const upload = (req, res) => {
  return res.send('Upload');
};

const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send('Delete');
};

export { trending, watch, edit, search, upload, deleteVideo };
