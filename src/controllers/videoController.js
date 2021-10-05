const trending = (req, res) => {
  const videos = [
    {
      title: 'first Video',
      rating: 5,
      comments: 2,
      createdAt: '2 Minutes ago',
      views: 59,
      id: 1,
    },
    {
      title: 'first Video',
      rating: 5,
      comments: 2,
      createdAt: '2 Minutes ago',
      views: 59,
      id: 1,
    },
    {
      title: 'first Video',
      rating: 5,
      comments: 2,
      createdAt: '2 Minutes ago',
      views: 59,
      id: 1,
    },
  ];

  return res.render('home', { pageTitle: 'Home', videos });
};

const see = (req, res) => res.render('watch');

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

export { trending, see, edit, search, upload, deleteVideo };
