import { ExamResultInterface } from 'interfaces/exam-result';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface JobInterface {
  id?: string;
  title: string;
  description?: string;
  company_id?: string;
  created_at?: any;
  updated_at?: any;
  exam_result?: ExamResultInterface[];
  company?: CompanyInterface;
  _count?: {
    exam_result?: number;
  };
}

export interface JobGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  company_id?: string;
}
