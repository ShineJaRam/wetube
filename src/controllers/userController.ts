import { Request, Response } from 'express';

const join = (req: Request, res: Response) => {
  return res.send('Join');
};

const edit = (req: Request, res: Response) => {
  return res.send('Edit User');
};

const remove = (req: Request, res: Response) => {
  return res.send('Remove User');
};

const login = (req: Request, res: Response) => {
  return res.send('Login');
};

const logout = (req: Request, res: Response) => {
  return res.send('Log Out');
};

const see = (req: Request, res: Response) => {
  return res.send('See');
};

export { join, edit, remove, login, logout, see };
