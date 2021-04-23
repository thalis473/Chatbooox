import { Router } from 'express';

import { SettingsController } from './controllers/SettingsController';
import { UserController } from './controllers/UserController';
import { MenssagensController } from './controllers/MenssagensController';

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UserController();
const messagesController = new MenssagensController();

routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUsername);
routes.put('/settings/:username', settingsController.update);

routes.post('/users', usersController.create);

routes.post('/messages', messagesController.create);
routes.get('/messages/:id', messagesController.showByUser);

export { routes };




