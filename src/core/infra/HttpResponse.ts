import httpStatus from 'http-status';
import {
  BusinessError,
  DatabaseError,
  ExternalError,
  ForbiddenError,
  Unauthorized
} from '../errors';
import Constants from '../../constants/index';

export type HttpResponse = {
  statusCode: number;
  body: any;
};

export type ResponsePagination<T> = {
  list: T[];
  page: number;
  count: number;
  size: number;
};

export function ok<T>(dto?: T): HttpResponse {
  const body = dto;

  return {
    statusCode: httpStatus.OK,
    body
  };
}

export const noContent = (): HttpResponse => ({
  statusCode: httpStatus.NO_CONTENT,
  body: null
});

export function fail(error: Error): HttpResponse {
  let statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  let body: any = error;

  if (
    error instanceof BusinessError ||
    error instanceof DatabaseError ||
    error instanceof Unauthorized ||
    error instanceof ForbiddenError ||
    error instanceof ExternalError
  ) {
    statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  } else {
    body = {
      generic: new Error(Constants.errorMessages.GENERAL),
      err: error
    };
  }

  return {
    statusCode,
    body
  };
}

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: httpStatus.BAD_REQUEST,
  body: error
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: httpStatus.FORBIDDEN,
  body: error
});

export const unauthorized = (error: Error = null): HttpResponse => ({
  statusCode: httpStatus.UNAUTHORIZED,
  body: error || new Unauthorized(Constants.errorMessages.UNAUTHORIZED)
});
