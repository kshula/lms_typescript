import { Request, Response } from 'express';
import QuizModel from '../models/Quiz';

function isError(error: unknown): error is Error {
  return (error as Error).message !== undefined;
}

// Create a new quiz
export const createQuiz = async (req: Request, res: Response): Promise<void> => {
  try {
    const newQuiz = new QuizModel(req.body);
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (err) {
    console.error(err); // Log the error for debugging
    if (isError(err)) {
      res.status(500).json({ message: 'Failed to create quiz', error: err.message });
    } else {
      res.status(500).json({ message: 'Failed to create quiz' });
    }
  }
};

// Get all quizzes
export const getQuizzes = async (req: Request, res: Response): Promise<void> => {
  try {
    const quizzes = await QuizModel.find();
    res.status(200).json(quizzes);
  } catch (err) {
    console.error(err); // Log the error for debugging
    if (isError(err)) {
      res.status(500).json({ message: 'Failed to retrieve quizzes', error: err.message });
    } else {
      res.status(500).json({ message: 'Failed to retrieve quizzes' });
    }
  }
};
