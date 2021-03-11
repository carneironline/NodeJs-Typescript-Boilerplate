import { Router } from 'express';

const healthRouter = Router();

healthRouter.get('/', async (_, response) => {
  return response.json('App Running');
});

export default healthRouter;
