import { Request, Response, NextFunction } from 'express';

class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;

export function globalExceptionHandler(
  err: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
