import axios from 'axios';
import queryString from 'query-string';
import { ExamResultInterface, ExamResultGetQueryInterface } from 'interfaces/exam-result';
import { GetQueryInterface } from '../../interfaces';

export const getExamResults = async (query?: ExamResultGetQueryInterface) => {
  const response = await axios.get(`/api/exam-results${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createExamResult = async (examResult: ExamResultInterface) => {
  const response = await axios.post('/api/exam-results', examResult);
  return response.data;
};

export const updateExamResultById = async (id: string, examResult: ExamResultInterface) => {
  const response = await axios.put(`/api/exam-results/${id}`, examResult);
  return response.data;
};

export const getExamResultById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/exam-results/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteExamResultById = async (id: string) => {
  const response = await axios.delete(`/api/exam-results/${id}`);
  return response.data;
};
