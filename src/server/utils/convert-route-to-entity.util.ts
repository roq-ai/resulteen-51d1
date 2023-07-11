const mapping: Record<string, string> = {
  companies: 'company',
  'exam-results': 'exam_result',
  jobs: 'job',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
