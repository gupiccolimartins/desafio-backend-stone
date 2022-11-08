import httpStatus from 'http-status';
import ExtendableError from './extendable-error';
import Constants from '../../constants/index';

class ForbiddenError extends ExtendableError {
  public statusCode: number;

  constructor(message: string = null) {
    super(message || Constants.errorMessages.FORBIDDEN);
    this.statusCode = httpStatus.FORBIDDEN;
  }
}

export { ForbiddenError };
