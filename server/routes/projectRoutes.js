import express from 'express';
// Ensure the names inside { } match the names in the controller exactly
import { createProject, getProjects, deleteProject } from '../controllers/projectController.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.delete('/:id', deleteProject);

export default router;