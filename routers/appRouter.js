const express = require('express');
const appRouter = express.Router();
const appControllers = require('../controllers/index');

appRouter.get('/', appControllers.home);
appRouter.get('/about', appControllers.about);
appRouter.get('/projects',appControllers.projects);
appRouter.get('/contact', appControllers.contact);

module.exports = appRouter;