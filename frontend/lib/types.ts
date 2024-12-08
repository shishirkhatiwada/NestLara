export interface FormData {
  name: string;
  email: string;
  message: string;
}

export interface SubmissionResult {
  success?: boolean;
  error?: string;
}