import { Request, Response } from 'express';

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

const trending = (req: Request, res: Response) => {
  return res.render('home', { pageTitle: 'Home', videos });
};

const watch = (req: Request, res: Response) => {
  const { id } = req.params;
  const video = videos[Number(id) - 1];

  return res.render('watch', { pageTitle: `Watching ${video.title}`, video });
};

const getEdit = (req: Request, res: Response) => {
  const { id } = req.params;
  const video = videos[Number(id) - 1];

  return res.render('edit', { pageTitle: `Editing ${video.title}`, video });
};

const postEdit = (req: Request, res: Response) => {
  const {
    body: { title },
    params: { id },
  } = req;

  videos[Number(id) - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

const search = (req: Request, res: Response) => {
  return res.send('Search');
};

const upload = (req: Request, res: Response) => {
  return res.send('Upload');
};

const deleteVideo = (req: Request, res: Response) => {
  return res.send('Delete');
};

export { trending, watch, getEdit, postEdit, search, upload, deleteVideo };
