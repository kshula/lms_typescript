import { Request, Response } from 'express';
import LessonModel from '../models/Lesson';

function isError(error: unknown): error is Error {
  return (error as Error).message !== undefined;
}

// Create a new lesson
export const createLesson = async (req: Request, res: Response): Promise<void> => {
  try {
    const newLesson = new LessonModel(req.body);
    const savedLesson = await newLesson.save();
    res.status(201).json(savedLesson);
  } catch (err) {
    console.error(err); // Log the error for debugging
    if (isError(err)) {
      res.status(500).json({ message: 'Failed to create lesson', error: err.message });
    } else {
      res.status(500).json({ message: 'Failed to create lesson' });
    }
  }
};

// Get all lessons
export const getLessons = async (req: Request, res: Response): Promise<void> => {
  try {
    const lessons = await LessonModel.find();
    res.status(200).json(lessons);
  } catch (err) {
    console.error(err); // Log the error for debugging
    if (isError(err)) {
      res.status(500).json({ message: 'Failed to retrieve lessons', error: err.message });
    } else {
      res.status(500).json({ message: 'Failed to retrieve lessons' });
    }
  }
};
