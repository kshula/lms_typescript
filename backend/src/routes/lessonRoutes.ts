import express from 'express';
import { getLessons, createLesson } from '../controllers/lessonController';

const router = express.Router();

router.get('/', getLessons);
router.post('/', createLesson);

export default router;
