import mongoose, { Document, Schema } from 'mongoose';

// Define the structure of a question in the quiz
interface Question {
  questionText: string;
  options: string[];
  correctOption: string;
}

// Define the structure of the Quiz document
interface Quiz extends Document {
  title: string;
  description: string;
  type: string; // e.g., 'Math', 'History', etc.
  questions: Question[];
  createdAt: Date;
  updatedAt: Date;
}

// Create the schema for the Question
const QuestionSchema = new Schema<Question>({
  questionText: { type: String, required: true },
  options: { type: [String], required: true },
  correctOption: { type: String, required: true },
});

// Create the schema for the Quiz
const QuizSchema = new Schema<Quiz>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  questions: { type: [QuestionSchema], required: true },
}, {
  timestamps: true, // This will automatically add `createdAt` and `updatedAt` fields
});

// Create the model
const QuizModel = mongoose.model<Quiz>('Quiz', QuizSchema);

export default QuizModel;
