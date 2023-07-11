import { UserInterface } from 'interfaces/user';
import { JobInterface } from 'interfaces/job';
import { GetQueryInterface } from 'interfaces';

export interface ExamResultInterface {
  id?: string;
  score: number;
  user_id?: string;
  exam_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  job?: JobInterface;
  _count?: {};
}

export interface ExamResultGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  exam_id?: string;
}
