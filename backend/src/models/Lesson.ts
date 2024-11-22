import { Schema, model, Document } from 'mongoose';

interface ILesson extends Document {
  title: string;
  content: string;
  subject: string;
}

const LessonSchema = new Schema<ILesson>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  subject: { type: String, required: true }
});

const Lesson = model<ILesson>('Lesson', LessonSchema);

export default Lesson;
